<template>
    <Menu />
    <Main />
    <Footer />
</template>
<script>
import Menu from './components/Pages/Menu.vue';
import Main from './components/Pages/Main/Main.vue';
import Footer from './components/Pages/Footer.vue';
export default {
  name: 'App',
  components: {
    Menu , 
    Main ,
    Footer
  }
}
</script>

<style>
*{
  font-family: "Vazir";
}
</style>
