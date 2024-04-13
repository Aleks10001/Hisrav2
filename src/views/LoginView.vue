<script>
import { login } from '@/core/auth';

export default {
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      disableForm: false,
    }
  },
  methods: {
    async performLogin() {
      this.disableForm = true;
      try {
        const data = await login(this.user.email, this.user.password);
        this.handleSuccessfulLogin(data);
      } catch (error) {
        this.handleLoginError(error);
      } finally {
        this.disableForm = false;
      }
    },
    handleSuccessfulLogin(data) {
      localStorage.setItem('token', data.key);
      this.$router.push('/profile');
    },
    handleLoginError(error) {
      if (error.response && error.response.status === 401) {
        console.error('Incorrect email or password. Please try again.');
      } else {
        console.error('Login error:', error.message);
      }
    },
  },
  beforeMount() {
    if (localStorage.getItem('token')) {
      this.$router.push('/profile');
    }
  }
}

</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900">
    <div class="items-center justify-center w-full lg:w-1/3 bg-white rounded-lg shadow-2xl lg:flex md:mt-0 lg:max-w-screen-lg 2xl:max:max-w-screen-lg xl:p-0 dark:bg-gray-800">
      <div class="w-full p-6 space-y-8 sm:p-8 lg:p-8">
        <h2 class="text-2xl font-bold text-center text-gray-900 lg:text-3xl dark:text-white">
          Войдите в платформу
        </h2>
        <form class="mt-8 space-y-6" @submit.prevent="performLogin()">
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ваша почта</label>
            <input v-model="user.email" :disabled="disableForm" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="name@company.com" required>
          </div>
          <div>
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ваш пароль</label>
            <input v-model="user.password" :disabled="disableForm" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
          </div>
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input :disabled="disableForm" id="remember" aria-describedby="remember" name="remember" type="checkbox" class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600">
            </div>
            <div class="ml-3 text-sm">
              <label for="remember" class="font-medium text-gray-900 dark:text-white">Запомнить меня</label>
            </div>
            <a href="#" class="ml-auto text-sm text-primary-700 hover:underline dark:text-primary-500">Забыли пароль?</a>
          </div>
          <button type="submit" class="w-full px-5 py-3 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Войти</button>
          <div class="text-sm font-medium text-gray-500 dark:text-gray-400">
            Нет аккаунта? <router-link to="/register" class="text-primary-700 hover:underline dark:text-primary-500 cursor-pointer">Зарегистрироваться</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>