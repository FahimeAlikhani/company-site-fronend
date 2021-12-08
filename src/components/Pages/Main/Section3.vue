<template>
  <section class="section3">
      <h1 class="header">گالری تصاویر نقطه اوج افلاک</h1>
     
      <div class="slider">
          <Carousel :itemsToShow="3.95" :autoplay="2000" :wrapAround="true">
    <Slide v-for="image in images" :key="image.ID">
      <div class="carousel__item">
          <img :src="'https://'+image.url" alt="">
          <div class="caption"></div>
      </div>
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
      </div>
  </section>
</template>

<script>
import {reactive} from 'vue';
import { Carousel, Slide , Navigation, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
export default {
  name: 'Section3' ,
    components: {
    Carousel,
    Slide,
    Navigation,
    Pagination
  } ,
  setup(){
    const images = reactive([]);
      function showImages(){
        async function getImages(){
          let response = await fetch('http://185.128.82.62:3334/menu4/all');
          let data =  response.json();
          return data;
        }
        getImages().then(function(a){
          images.push(...a.data.pictures)
        })
      }
      showImages();
      return{ images }
  }
}
</script>

<style scoped>
section.section3{
    width: 100%;
    height: 40rem;
    background-image: url('../../../assets/img/bg.jpg');
    background-size: 100% 40rem;
    background-repeat: no-repeat;
}
h1.header{
    width: 100%;
    text-align: center;
    padding-top: 7rem;
    color: white;
}
div.slider{
    width: 80%;
    height: 15rem;
    margin: 5rem auto;
}
.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
  position: relative;
}
div.carousel__item img{
  width: 100%;
  height: auto;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}
.carousel__prev,
.carousel__next {
  border: 5px solid white;
}
button.carousel__prev {
    top: 100%;
    background-color: transparent;
    right: 0;
    border: 1 px solid white;
    border-radius: 0.5rem;
}
div.caption{
  position: absolute;
  top: 85%;
  left: 10%;
  color: white;
  background-color: rgb(36, 36, 36 , 0.5);
  font-size: 0.9rem;
}
@media(max-width: 768px){
    section.section3{
    background-image: none;
    height: auto;
    background-color: #007ec7;
}
h1.header{
    padding-top: 5rem;
}
div.caption{
  display:  none;
}
}
</style>