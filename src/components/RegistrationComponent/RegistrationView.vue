<template>
  <div class="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900">
    <RouterLink to="/" class="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white">
      <img src="@/assets/logo.png" class="h-11" alt="RCONNECT Logo">
    </RouterLink>
    <div class="items-center justify-center lg:w-1/3 mb-6 shadow-2xl bg-white rounded-lg lg:flex md:mt-0 lg:max-w-screen-lg 2xl:max:max-w-screen-lg xl:p-0 dark:bg-gray-800">
      <div v-if="!showConfirmLayout" class="w-full p-6 space-y-8 sm:p-8 lg:p-8">
        <h2 class="text-2xl text-center font-bold text-gray-900 lg:text-3xl dark:text-white">Регистрация</h2>
        <form class="mt-8 space-y-6" @submit.prevent="register()">
          <div>
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ваш ник</label>
            <input :disabled="disableForm" v-model="user.name" type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="student123" required>
          </div>
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ваша почта</label>
            <input :disabled="disableForm" v-model="user.email" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="name@company.com" required>
          </div>
          <div>
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ваш пароль</label>
            <input :disabled="disableForm" v-model="user.password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
          </div>
          <div>
            <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Подтвердите пароль</label>
            <input :disabled="disableForm" v-model="user.confirm_password" type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
          </div>
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input id="remember" aria-describedby="remember" name="remember" type="checkbox" class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" required>
            </div>
            <div class="ml-3 text-sm">
              <label for="remember" class="font-medium text-gray-900 dark:text-white">
                Я принимаю
                <a href="#" class="text-primary-700 hover:underline dark:text-primary-500">условия политики конфиденциальности</a></label>
            </div>
          </div>
          <button type="submit" :disabled="disableForm" class="w-full px-5 py-3 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Создать аккаунт</button>
          <div class="text-sm font-medium text-gray-500 dark:text-gray-400">
            Уже есть аккаунт? <router-link to="/login" class="text-primary-700 hover:underline dark:text-primary-500">Войти</router-link>
          </div>
        </form>
      </div>
      <div v-else class="w-full text-center p-6 space-y-8 sm:p-8 lg:p-8 dark:text-white">
        <p class="text-2xl font-bold">Подтвердите почту</p>
        <p>Ссылка на подтверждение отправлена вам на <b>{{ user.email }}</b>. Если письма нет, попробуйте проверить папку спам.</p>
        <span class="block underline hover:cursor-pointer" @click="showConfirmLayout = false">Повторить попытку</span>
        <router-link to="/login" class="inline-block w-full px-5 py-3 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Войти</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { register } from '@/core/auth';

export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        confirm_password: ''
      },
      disableForm: false,
      showConfirmLayout: false,
    }
  },
  methods: {
    async register() {
      if (this.user.password !== this.user.confirm_password) {
        alert('Пароли не совпадают');
        return;
      }
      this.disableForm = true;
      try {
        const data = await register(this.user.email, this.user.password, this.user.confirm_password);
        if (data.status === 201) {
          // localStorage.setItem('token', data.token);
          this.showConfirmLayout = true
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.error('Неправильный логин или пароль');
          alert('Неправильный логин или пароль');
        } else {
          console.error('Ошибка регистрации:', error.message);
          alert('Ошибка регистрации:', error.message);
        }
      }
      this.disableForm = false;
    }
  },
  beforeMount() {
    if (localStorage.getItem('token')) {
      this.$router.push('/profile');
    }
  }
}
</script>