<template>
  <main class="main">
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <!-- <Section5 /> -->

  </main>
</template>

<script>
import Section1 from './Section1.vue';
import Section2 from './Section2.vue';
import Section3 from './Section3.vue';
import Section4 from './Section4.vue'
// import Section5 from './Section5.vue'
export default {
  name: 'Main' , 
  components: {
    Section1 ,
    Section2 ,
    Section3 , 
    Section4 
    // Section5 
  }
}
</script>

<style scoped>
main.main{
     border: 1px solid black; 
    height: auto;
}
</style>