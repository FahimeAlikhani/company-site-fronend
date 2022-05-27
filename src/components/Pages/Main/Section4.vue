<template>
  <section class="Section4">

     <div class="header-title">
        <div class="title-Vertical-line"></div>
        <div class="title-Horizontal-line"></div>
         <div class="title">
              <span style="color:#0B132A">همکاران </span>
              <span style="color:#F53838">شرکت</span>
          </div>
         <div class="title-Vertical-line"></div>
     </div>

<div class="section_slide">
      <Carousel  :autoplay="3000" :wrapAround="true" :transition="500" :settings="settings" :breakpoints="breakpoints" >
    <Slide v-for="data in sliderdata" :key="data.id">

      <div class="card">
          <div class="avatar_card">
            <img class="avatar" :src="data.avatar" alt="Avatar" >
            <img class="avatar_blur" :src="data.avatar" >
          </div>
          <div  class="container">
          <h1>{{ data.name }}</h1>
          <p>{{ data.title }}</p>
          </div>
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
import { reactive } from '@vue/reactivity';
import { Carousel, Pagination, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import Alikhani from '@/assets/img/programmer/Alikhani.jpg';
import Rahmani from '../../../assets/img/programmer/Rahmani.jpg';
import Matin from '../../../assets/img/programmer/Matin.jpg';
import Abbasi from '../../../assets/img/programmer/Abbasi.jpg';
import Abdolhosseini from '../../../assets/img/programmer/Abdolhoseini.jpg';
import Ranjbar from '../../../assets/img/programmer/Ranjbar.jpg';
import Basir from '../../../assets/img/programmer/Basir.jpg';
import Khosravi from '../../../assets/img/programmer/Khosravi.jpg';

export default {
    name: 'Section4_item' ,
    components: {
    Carousel,
    Slide,
    Pagination,
  } ,
  setup(){
      const sliderdata = reactive([{
          id: 1 ,
          avatar: Alikhani ,
          name: 'فهیمه علیخانی' ,
          title: '(Funder/CTO)',
      } ,
      {id: 2 ,
          avatar: Rahmani ,
          name: 'علیرضا رحمانی' ,
          title: '(DevOps Engineer)',
      } ,
      {id: 3 ,
          avatar: Matin ,
          name: 'علی متین' ,
          title: '(Android Developer)',
      } ,
      {id: 4 ,
          avatar: Abbasi ,
          name: 'هومن عباسی' ,
          title: '(Social media admin) ',
      } ,
      {id: 5 ,
          avatar: Abdolhosseini ,
          name: 'محمد عبدالحسینی' ,
          title: '(UI/UX Designer)',
      } ,
      {id: 6 ,
          avatar: Khosravi ,
          name: 'هانیه خسروی' ,
          title: '(Fontend Developer) ',
      } ,
      {id: 7 ,
          avatar: Ranjbar ,
          name: 'امیر رنجبر' ,
          title: '(Backend Developer/DBA)',
      } ,
      {id: 8 ,
          avatar: Basir ,
          name: 'الیاس بصیر' ,
          title: '(Backend Developer)',
      } ,
      
      ]);
      return{
        sliderdata,
        settings: {
				itemsToShow: 1,
				snapAlign: "center"
        },
        breakpoints: {
				// 700px and up
				700: {
					itemsToShow: 1,
					snapAlign: "center"
				},
				// 1024 and up
				1024: {
					itemsToShow: 5,
					snapAlign: "start"
				}
			}
			}},
}
</script>

<style scoped>
section.Section4{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5rem;
}

div.section_slide{
   width: 73%;
}
div.title-Vertical-line{
  background-color: #F53838;
  border: 3px solid #F53838;
  box-shadow: 0px -4px 50px rgba(253,61,57,0.6) ;
  height: 40px;
  flex-direction: row;
}
div.title-Horizontal-line{
    border-top: 1px dashed rgba(245,56,56,0.35);
    width: 928px;
    margin: 20px 10px;
}
div.header-title{
    margin-top: 3rem;
    display: flex;
    flex-direction: row; 
    text-align: center;
}
div.headerPosition{
  margin-top: 3rem;
  margin-left: 879px;
  display: flex;
}

div.title {
  text-align: right;
  color: black;
  font-family: 'IRANSansFaNum';
  font-weight: bold;
  font-style: normal;
  font-size: 1.75rem;
  line-height: 1.875rem;
  text-align: right;
  padding:0 20px 0 20px;
}
.carousel__pagination {
    display: flex;
    justify-content: center;
    list-style: none;
}
.carousel__pagination {
    display: flex;
    justify-content: center;
    list-style:none;
}
.carousel__pagination button{
   appearance: auto;
    writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
    cursor: default;
    box-sizing: border-box;
    background-color: -internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59));
    margin: 0em;
    padding: 1px 6px;
    border-width: 2px;
    border-style: outset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
}
@media(max-width: 768px){
    section.section4{
        padding-bottom: 0;
    }

}

div.card {
  width: 100%;
  max-width: 270px;
  height: 50vh;
  border-radius: 24px;
  margin-left: 1.2rem;
  margin-right: 0.2rem;
  margin-top: 4rem;
  margin-bottom: 2rem;
}

div.avatar_card {
  border-radius: 24px;
  margin-bottom: 29px;
  width: 100%;
  height: 26vh;
}
img.avatar {
  border-radius: 24px;
}
img.avatar_blur{
  width: 86%;
  height: 2.5vh;
  filter: blur(18px);
}
div.container{
  font-family: 'IRANSansFaNum';
  font-style: normal;
  letter-spacing: -0.03em;
  margin-top: 10%;
  margin-right: 10px;
}

div.container h1{
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  color: #505887;
}

div.container p {
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  color: #718EBF;
}
@media(max-width: 768px){
    section.section4{
      padding-bottom: 0;
    }
    div.header-title{
      text-align: center;
    }
    div.title-Horizontal-line{ 
      width: 0;
      margin: 0px ;
    }
    div.title {
      text-align: center;      
      font-size: 1.5rem;   
    }
    img.avatar_blur{
      width: 70%;
    }
}
</style>
