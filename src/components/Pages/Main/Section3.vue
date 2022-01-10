<template>
  <section class="section3">
         <h1 class="header-title">مزایای اجرای پروژه توسط جهان افزا</h1>
         <div class="position-layer">
      <div class="section3-text">
          <div class="text">
              <div class="test-layer">
                  <img src="../../../assets/img/tick-square.svg">
                  <p>بهره گیری از تیم مجرب، متخصص و با انگیزه</p>
              </div>
              <div class="test-layer">
                  <img src="../../../assets/img/tick-square.svg">
                  <p>اراﺋﻪ ﻣﺸﺎوره رایگان ﺟﻬﺖ اﻣﮑﺎن ﺳﻨﺠﯽ و ﺑﺮآورد ﻫﺰﯾﻨﻪ اﻧﺠﺎم ﭘﺮوژه ﻫﺎ</p>
              </div>
              <div class="test-layer">
                  <img src="../../../assets/img/tick-square.svg">
                  <p>ﻧﺮخ ﻫﺎی ﻣﻨﺼﻔﺎﻧﻪ و رﻗﺎﺑﺘﯽ ﺧﺪﻣﺎت</p>
              </div>
              <div class="test-layer">
                  <img src="../../../assets/img/tick-square.svg">
                  <p>تجربه پیاده سازی پروژه های گوناگون در شاخه های مختلف</p>
              </div>
              <div class="test-layer">
                  <img src="../../../assets/img/tick-square.svg">
                  <p>پشتیبانی مستمر در کمترین زمان ممکن</p>
              </div>
              <div class="test-layer">
                  <img src="../../../assets/img/tick-square.svg">
                  <p>پشتیبانی مستمر در کمترین زمان ممکن</p>
              </div>
              <div class="test-layer">
                  <img src="../../../assets/img/tick-square.svg">
                  <p>رﻋﺎﯾﺖ ﺣﺮﯾﻢ ﺧﺼﻮﺻﯽ اﺷﺨﺎص، ﺷﺮﮐﺖ ﻫﺎ و ﺣﻔﻆ ﻣﺤﺮﻣﺎنگی اﻃﻠﺎﻋﺎت</p>
              </div>
              <div class="test-layer">
                  <img src="../../../assets/img/tick-square.svg">
                  <p>اﺳﺘﻔﺎده از ﺑﻪ روز ﺗﺮﯾﻦ ﻣﺘﺪﻫﺎ و ﺗﮑﻨﻮﻟﻮژی ﻫﺎ</p>
              </div>
          </div>
      </div>

     <div class="section3-img">
          <div class="img">
              <img src="../../../assets/img/Illustration2.svg" alt="">
          </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'Section3' 
}
</script>

<style scoped>
section.section3{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    background-color: #F8F8F8;
}
h1.header-title{
    width: 89%;
    height: 5%;
    text-align: right;
    border-right: 4px solid #F53838 ;
    padding: 5px;
    margin-top: 40px;
    color: black;
}
div.section3-img{
    width: 50%;
}
div.section3-text{
    text-align: right;
    width: 50%;
}
div.text{
    width: 85%;
    height: 20rem;
    margin: 7rem auto;
    margin-right: 7rem;
    direction: rtl;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    
}
div.text p{
    color: #4F5665;
}
div.test-layer{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;    
}
div.text p{
    margin-top: 1rem;
    font-size: 1.1rem;
}
button.btn-text{
    background-color: transparent;
    border: 1px solid #d7d7d7;
    padding: 0.5rem 1.7rem;
    margin-top: 1rem;
    border-radius: 5px;
    color: #a3a3a3;
    transition: 0.5s;
}
button.btn-text:hover{
    color: white;
    background-color: #019CD5;
}
div.img {
    width: 70%;
    height: 20rem;
    margin: 7rem auto;
}
div.img img{
    width: 100%;
    height: 100%;
    border-radius: 20px;
}
div.position-layer{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
@media(max-width: 769px){
    div.section4-img{
    display: none;
}
div.section4-text{
    width: 100%;
}
div.text{
    width: 90%;
    height: 12rem;
    margin: 5rem auto;
}
}
</style>