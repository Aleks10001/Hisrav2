<template>
    <div class="container mx-auto">
        <ul class="steps steps-vertical lg:steps-horizontal">
        <li class="step step-primary">
            <CardComponent/>
        </li>
        <li class="step step-primary">
            <CardComponent/>
        </li>
        <li class="step">
            <CardComponent/>
        </li>
        <li class="step">
            <CardComponent/>
        </li>
    </ul>
    </div>
</template>

<script>
import CardComponent from './CardComponent.vue'

export default {
	name: 'RoadmapComponent',
	components: {
		CardComponent
	}
}
</script>