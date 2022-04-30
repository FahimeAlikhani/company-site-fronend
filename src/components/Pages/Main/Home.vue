<template>
  <main class="main">
    <Section1 />
    <Section0 />
    <Section2 />
    <Section3 />
    <Section4 />
  </main>
</template>

<script>
import Section1 from './Section1.vue';
import Section0 from './Section0.vue';
import Section2 from './Section2.vue';
import Section3 from './Section3.vue';
import Section4 from './Section4.vue';

export default {
  name: 'Main-app' , 
  components: {
    Section1 ,
    Section0 ,
    Section2 ,
    Section3 , 
    Section4 ,
  }
}
</script>

<style scoped>
main.main{
    height: auto;
}
</style>