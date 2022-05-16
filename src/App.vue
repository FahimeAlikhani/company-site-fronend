<template>
    <Menu />
    <router-view/>
    <Footer />
</template>
<script>
import Menu from './components/Pages/Menu.vue';
import Footer from './components/Pages/Footer.vue';
export default {
  name: 'App',
  components: {
    Menu , 
    Footer
  }
}
</script>

<style>
*{
  font-family: "IRANSansFaNum";
}
</style>
