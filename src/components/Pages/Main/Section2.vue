<template>
  <section class="section2">
         
         <div class="header-title">
        <div class="title-Vertical-line"></div>
        <div class="title-Horizontal-line"></div>
         <div class="title">
              <span style="color:#0B132A">مزایای اجرای پروژه توسط</span> &nbsp;
              <span style="color:#F53838">جهان افزا</span>
          </div>
         <div class="title-Vertical-line"></div> 
      </div> 

         <div class="position-layer">
      <div class="section2-text">
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

     <div class="section2-img">
          <div class="img">
              <img src="../../../assets/img/Illustration2.svg" alt="">
          </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'Section2-item' 
}
</script>

<style scoped>
section.section2{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    background-color: #F8F8F8;
    justify-content: space-evenly;
    align-items: center;
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
    width: 713px;
    margin: 20px 10px;
}
div.header-title{
    margin-top: 3rem;
    display: flex;
    flex-direction: row; 
    text-align: center;
}
div.title {
    text-align: right;      
    color: black;
    font-family: 'IRANSansX';
    font-weight: bold;
    font-style: normal;
    font-size: 1.75rem;
    line-height: 1.875rem;
    text-align: right;
    padding:0 20px 0 20px;
}
div.section2-img{
    width: 50%;
}
div.section2-text{
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
    padding-top: 1rem;  
}
div.text p{
    font-size: 1.1rem;
    font-weight: normal;
    font-style: normal;
    line-height: 1.875rem;
    padding-right: 0.5rem ;
}
button.btn-text{
    background-color: transparent;
    border: 1px solid #d7d7d7;
    padding: 0.5rem 1.7rem;
    margin-top: 1rem;
    border-radius: 5px;
    color: #a3a3a3;
    
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
@media(max-width: 768px){
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
    div.section2-img{
    display: none;
    }
    div.section2-text{
    width: 100%;
    }
    div.text{
    width: 90%;
    height: 12rem;   
    }
    div.position-layer{
    margin-top: 150px;
    }
}
</style>