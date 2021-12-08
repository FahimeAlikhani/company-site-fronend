<template>
  <section class="section5">
      <div class="header">
          <span class="kama1">
              <svg width="30" height="30" viewBox="0 0 20 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.5058 20.2701V35.8377H0.57373V23.5133C0.57373 16.8647 1.56996 11.9998 3.56241 8.91873C6.21901 4.86467 10.2039 1.94575 15.8492 -0.162354L20.0001 5.02684C16.5134 6.16197 14.0228 7.94576 12.5284 10.216C10.8681 12.4863 10.0379 15.7295 9.87184 20.1079H18.5058V20.2701Z" fill="white"/>
</svg></span><span class="kama2"><svg width="30" height="30" viewBox="0 0 20 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.5058 20.2701V35.8377H0.57373V23.5133C0.57373 16.8647 1.56996 11.9998 3.56241 8.91873C6.21901 4.86467 10.2039 1.94575 15.8492 -0.162354L20.0001 5.02684C16.5134 6.16197 14.0228 7.94576 12.5284 10.216C10.8681 12.4863 10.0379 15.7295 9.87184 20.1079H18.5058V20.2701Z" fill="white"/>
</svg></span><h1>منو شماره ۴ </h1><span class="kama3"><svg width="30" height="30" viewBox="0 0 20 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.06792 15.7299V0.16235H20V12.4867C20 19.1353 19.0038 24.0002 17.0113 27.0813C14.3547 31.1353 10.3698 34.0542 4.72453 36.1624L0.573586 30.9732C4.06038 29.6759 6.55094 27.8921 8.04528 25.6218C9.70566 23.3515 10.5358 20.1083 10.7019 15.7299H2.06792Z" fill="white"/>
</svg></span><span class="kama4"><svg width="30" height="30" viewBox="0 0 20 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.06792 15.7299V0.16235H20V12.4867C20 19.1353 19.0038 24.0002 17.0113 27.0813C14.3547 31.1353 10.3698 34.0542 4.72453 36.1624L0.573586 30.9732C4.06038 29.6759 6.55094 27.8921 8.04528 25.6218C9.70566 23.3515 10.5358 20.1083 10.7019 15.7299H2.06792Z" fill="white"/>
</svg></span>
          </div>
      <div class="slider">
          <Carousel>
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
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import {reactive} from 'vue';
export default {
  name: 'Section5' ,
    components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup(){
    const images = reactive([]);
      function showImages(){
        async function getImages(){
          let response = await fetch('http://185.128.82.62:3334/menu5/all');
          let data =  response.json();
          return data;
        }
        getImages().then(function(a){
          console.log(a);
          images.push(...a.data.pictures)
        })
      }
      showImages();
      return{ images }
  }
}
</script>

<style scoped>
section.section5{
    width: 100%;
    height: 40rem;
    background-image: url('../../../assets/img/liftInBackground.jpg');
    background-repeat: no-repeat;
    background-size: 100% 45rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
div.header{
    width: 50%;
    text-align: center;
    position: relative;
}
div.header h1{
    padding: 1rem;
    color: white;
}
span.kama1{
    position: absolute;
    top: 30%;
    right: 27%;
    opacity: 0.3;
}
span.kama2{
    position: absolute;
    top: 30%;
    right: 23%;
    opacity: 0.3;
}
span.kama3{
    position: absolute;
    top: 30%;
    right: 67%;
    opacity: 0.3;
}
span.kama4{
    position: absolute;
    top: 30%;
    right: 71%;
    opacity: 0.3;
}
div.slider{
    width: 50%;
    height: auto;
}
.carousel__item {
  height: 19rem;
  width: 100%;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
div.carousel__item img{
  width: 100%;
  height: 19rem;
  border-radius: 8px;
}
.carousel__slide {
  padding: 10px;
}
div.caption{
  position: absolute;
  top: 85%;
  color: white;
  background-color: rgb(36, 36, 36 , 0.5);
  font-size: 0.9rem;
}

@media(max-width: 798px){
  section.section5{
    height: auto;
}
span.kama1 , span.kama2 , span.kama3 , span.kama4{
 display:  none;  
}
.carousel__item {
  height: auto;
}
div.carousel__item img{
  height: auto;
}
div.caption{
  display:  none;
}
}
section.carousel button.carousel__prev{
  color : red!important;
}
</style>