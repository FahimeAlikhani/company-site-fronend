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

     <!-- <div class="position-card">
        <div class="card">
            <img src="../../../assets/img/programmer/Alikhani.jpg" alt="Avatar" >
           <div  class="container">
                <h1>فهیمه علیخانی</h1>
                <p>(Fullstack Developer) </p>
           </div></div>
           <div class="card">
            <img src="../../../assets/img/programmer/Imani.jpg" alt="Avatar" >
           <div  class="container">
                <h1>امین ایمانی</h1>
                <p>(DevOps Engineer) </p>
           </div></div>
           <div class="card">
            <img src="../../../assets/img/programmer/Matin.jpg" alt="Avatar" >
           <div  class="container">
                <h1>علی متین</h1>
                <p>(Android Developer) </p>
           </div></div>

          <div class="card">
            <img src="../../../assets/img/programmer/Abbasi.jpg" alt="Avatar" >
           <div  class="container">
               <h1>هومن عباسی</h1>
                <p>(UI/UX کارآموز) </p>
           </div></div>
           <div class="card">
            <img src="../../../assets/img/programmer/Abdolhosseini.jpg" alt="Avatar" >
           <div  class="container">
                <h1>محمد عبدالحسینی</h1>
                <p>(UI/UX Designer) </p>
           </div></div>

          <div class="card">
            <img src="../../../assets/img/programmer/Ranjbar.jpg" alt="Avatar" >
           <div  class="container">
                <h1>امیر رنجبر</h1>
                <p>(Backend Developer) </p>
           </div></div>
      </div> -->
      <Carousel  :autoplay="3000" :wrapAround="true" :transition="50000000" :settings="settings" :breakpoints="breakpoints" >
    <Slide v-for="data in sliderdata" :key="data.id">

      <div class="card">
          <div class="avatar">
            <img :src="data.avatar" alt="Avatar" >
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
  </section>
</template>

<script>
import { reactive } from '@vue/reactivity';
import { Carousel, Pagination, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
// import Alikhani from '@/assets/img/programmer/Alikhani.svg';
import Alikhani from '@/assets/img/programmer/fahimeh.svg';
import Rahmani from '../../../assets/img/programmer/Rahmani.svg';
import Matin from '../../../assets/img/programmer/Matin.svg';
import Abbasi from '../../../assets/img/programmer/Abbasi.svg';
import Abdolhosseini from '../../../assets/img/programmer/abdolhoseini.svg';
import Ranjbar from '../../../assets/img/programmer/Ranjbar.svg';
import Basir from '../../../assets/img/programmer/Basir.svg';

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
          title: '(Funder/CEO)',
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
          title: '(کارشناس شبکه های اجتماعی) ',
      } ,
      {id: 5 ,
          avatar: Abdolhosseini ,
          name: 'محمد عبدالحسینی' ,
          title: '(UI/UX Designer)',
      } ,
      {id: 6 ,
          avatar: Ranjbar ,
          name: 'امیر رنجبر' ,
          title: '(Backend Developer)',
      } ,
      {id: 7 ,
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
					itemsToShow: 1.5,
					snapAlign: "center"
				},
				// 1024 and up
				1024: {
					itemsToShow: 3,
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

div.title-Vertical-line{
  background-color: #F53838;
  border: 3px solid #F53838;
  box-shadow: 0px -4px 50px rgba(253,61,57,0.6) ;
  height: 40px;
  flex-direction: row;
}
div.title-Horizontal-line{
  border-top: 1px dashed rgba(245,56,56,0.35);
  width: 77%;
  height: 1px;
  margin: 20px 10px;

}
div.headerPosition{
  margin-top: 3rem;
  margin-left: 879px;
  display: flex;
}
div.header-title{
  width: 75%;
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
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

@media(max-width: 768px){
    section.section4{
        padding-bottom: 0;
    }

}

div.card {

  width: 100%;
  max-width: 250px;
  height: 45vh;

  border-radius: 24px;
  margin-left: 1.2rem;
  margin-right: 0.2rem;
  margin-top: 4rem;
  margin-bottom: 2rem;
   box-shadow: #F53838 0px 20px 45px -10px;
}

div.avatar {

  border-radius: 24px;
  margin-bottom: 29px;
  width: 100%;
  height: 30vh;
}

div.container h1{
  font-family: 'IRANSansFaNum';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  text-align: right;
  letter-spacing: -0.03em;
  color: #505887;
}

div.container p {
  font-family: 'IRANSansFaNum';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  text-align: right;
  letter-spacing: -0.03em;
  color: #718EBF;
}

</style>
