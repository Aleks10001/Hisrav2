<template>
	<router-view v-slot="{ Component }">
		<!-- <transition name="slide" mode="out-in"> -->
			<component :is="Component" :key="$route.path" />
		<!-- </transition> -->
	</router-view>
</template>

<script>

</script>

<style>

</style>
