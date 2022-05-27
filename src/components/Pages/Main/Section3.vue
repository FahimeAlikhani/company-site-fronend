<template>
  <section class="section3">
      
      <div class="header-title">
        <div class="title-Vertical-line"></div>
        <div class="title-Horizontal-line"></div>
         <div class="title">
              <span style="color:#0B132A">پروژه های </span>
              <span style="color:#F53838">شرکت</span>
          </div>
         <div class="title-Vertical-line"></div> 
      </div> 
         

      <div class="box">   
         <div class="position-apps">
            <div class="website">
              <span id="card" @click="website = !website" class="hoverBox" tabindex="1">وبسایت</span>
            </div>
            <div class="divider"></div>
            <div class="app">
               <span id="card" @click="app = !app" class="hoverBox" tabindex="1">اپلیکیشن</span>
            </div>
            <div class="divider"></div>
            <div class="all-project">
               <span id="card" @click="allProject = !allProject" class="hoverBox" tabindex="1">همه پروژه ها</span>    
           </div>
         </div>
      </div>
      <div class="position-card">
        <div v-if="app||allProject" class="card">
            <img src="../../../assets/img/project/Jadee.jpg" alt="Avatar" >
           <div  class="container">
               <div class="container-title">JADE</div> 
                <p>نرم افزار ارتباطی کامپیوتر های شخصی</p> 
           </div>
        </div>
        <div v-if="app||allProject" class="card">
           <img src="../../../assets/img/project/Vira.jpg" alt="Avatar" >
            <div class="container">
               <div class="container-title">اپلیکیشن ویرا</div> 
               <p>سامانه هوشمند گزارش دهی پرستاران مورد استفاده شبکه بهداشت و بیمارستانی</p> 
            </div>
        </div>

        <div v-if="app||allProject" class="card">
           <img src="../../../assets/img/project/CutAra.jpg" alt="Avatar">
           <div class="container">
               <div class="container-title" >اپلیکیشن کات آرا</div> 
               <p>سامانه نوبت دهی و شبکه اجتماعی آرایشگران و سالن های زیبایی کشور</p> 
            </div>
        </div>
        <div v-if="website||allProject" class="card">
           <img src="../../../assets/img/project/Peak.jpg" alt="Avatar">
           <div class="container">
               <div class="container-title" >Peak</div> 
               <p>وبسایت  ارائه خدمات و پروژه های آسانسوری شرکت آسانسور نقطه اوج افلاک</p> 
            </div>
        </div>
     </div>

  </section>
</template>

<script>
export default {
    name:'Section3_item',
    el: "#card",
     data: function () {
    return { 
      app: false,
      website: false,
      allProject: true,
    }; 
  },
  props: {
    msg: String,
  },
}
</script>

<style scoped>
section.section3{ 
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
div.title-Vertical-line{
  background-color: #F53838;
  border: 3px solid #F53838;
  box-shadow: #F53838 0px 20px 45px -10px; 
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
div.title {
  color: black;
  font-family: 'IRANSansFaNum';
  font-weight: bold;
  font-style: normal;
  font-size: 1.75rem;
  line-height: 1.875rem;
  padding:0 20px 0 20px;
}
div.box{      
  width: 76%; 
  height: 6rem;
  background-color: #FFFFFF;      
  border-radius: 10px;
  box-shadow: 1px 1px 114px #0d10252c ; 
  margin-top: 60px;
  flex-direction: row;
  justify-content:center;
  align-items: center
  
}  

div.position-apps{
  display: flex;
  font-family: 'IRANSansFaNum';
  font-weight: 500;
  font-style: normal;
  font-size: 1.375rem;
  line-height: 1.875rem;
  align-items: center;
}
span.hoverBox{
  padding:15px 27px;
}

.hoverBox:hover,.hoverBox:focus,.hoverBox:active{
  background-color: #FFECEC;
  color: #F53838;
  border-radius: 12px;
  font-weight: bold;
}

div.website{
  flex: 0 0 33.333333%;
  display: flex;
  justify-content: center;
  cursor: pointer;
}

div.app{
  flex: 0 0 33.333333%;
  display: flex;
  justify-content: center;
  cursor: pointer;
}

div.all-project{
  flex: 0 0 33.333333%;
  display:flex;
  justify-content: center;
  cursor: pointer;
}

div.divider{
  height: 7vh;
  margin-top: 2%;
  margin-bottom: 2%;
  border: 2px solid #EEEFF2;
  background-color: #EEEFF2;
}
div.position-card{
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

div.card {
  box-shadow: 1px 1px 114px #0d10252c ; 
  width: 22%;
  height: 45vh;
  padding: 1rem 1rem 2.625rem 1rem;
  border-radius: 24px;
  margin-left: 1.2rem;
  margin-right: 0.2rem;
  margin-top: 2rem;
  cursor: pointer;
}

div.card img {
  border-radius: 24px;
  margin-top: 0.2rem;
  width: 100%;
}
.card:hover {
  margin-top: 1rem;
  border: 2px solid #F53838;
  box-shadow: #F53838 0px 20px 54px -20px;
  color: #F53838; 
}

div.container {
  font-family: 'IRANSansFaNum';
  font-style: normal;
  text-align: right;
  line-height: 1.875rem;
  padding-top: 1rem;
}
div.container-title{  
  font-weight: bold;
  font-size: 1.375rem;
}

div.container p {
  padding-top: 1rem;
  font-weight: normal; 
  font-size: 1.25rem;
  color: #4F5665 !important
}
@media(max-width: 768px){
    section.section2{
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
    div.card {
      width: 70%;
      height: 50vh;
      margin-left: 0;
      padding: 1rem ;
    }
   div.position-apps{
      font-weight: 700;
      font-size: 0.8rem;
      line-height: 1.2rem;
    }
    div.box{      
      width: 70%; 
      height: 4rem;
    }  
    span.hoverBox{
      padding:10px 8px;
    }
    div.container p {
      direction: rtl;
      text-align: justify;
      text-justify: inter-word;
  }
}
</style>