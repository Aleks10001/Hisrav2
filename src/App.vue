<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <RoadmapComponent/>
</template>

<script>
import RoadmapComponent from './components/RoadmapComponent.vue'

export default {
  name: 'App',
  components: {
    RoadmapComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
