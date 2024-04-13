<template>
  <router-view v-slot="{ Component }">
    <div class="container">
      <component :is="Component" :key="$route.path" />
    </div>
  </router-view>
</template>

<script>

</script>

<style>

</style>
