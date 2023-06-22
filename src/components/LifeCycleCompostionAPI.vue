<template>
  <div> <h2> Life Cycle Hooks - Composition API </h2></div>
  <div> Count Value : {{ state.count }}
  <br />
  <button @click.prevent="state.count++">Click Me </button>
  </div>
  <div v-if="showComp">
   <AboutView />
  </div>
  <div>
    <button @click="showComp=!showComp" > Toggle Show Component </button>
  </div>
</template>

<script>

import { onBeforeMount,
onBeforeUnmount, onBeforeUpdate, 
onMounted, onRenderTracked, onRenderTriggered, onUnmounted, 
onUpdated , reactive, ref } from 'vue'

import AboutView from '@/views/AboutView.vue';

export default{
    setup() {
        let showComp = ref(true);
        const state = reactive({
            count: 0
        });
        onBeforeMount(() => {
            console.log("Before Mounted");
        });
        onMounted(() => {
            console.log("On mounted");
        });
        onBeforeUpdate(() => {
            console.log("On Before Updated");
        });
        onUpdated(() => {
            console.log("On Updated");
        });
        onBeforeUnmount(() => {
            console.log("On Before Unmounted");
        });
        onUnmounted(() => {
            console.log("On Unmounted");
        });

        onRenderTracked((e) => {
            console.log(e);
        });

        onRenderTriggered((e) => {
            console.log(e);
        });

        return { state, showComp };
    },
    components: { AboutView }
}
</script>

<style scoped></style>