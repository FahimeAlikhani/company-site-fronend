<template>
  <section class="section4">

          <h1 class="header-title">پروژه های شرکت</h1>

      
      <div class="position-feature">
        <div class="featuresItem2">
            <h2 class="header">وبسایت</h2>
        </div>
        <div class="featuresItem1">
            <h2 class="header">اپلیکیشن</h2>
        </div>
        <div class="featuresItem1">
            <h2 class="header">همه پروژه ها</h2>

        </div>
     </div>
     <div class="position-card">

         <div class="card">
  <img src="../../../assets/img/img3.svg" alt="Avatar" style="width:100%">
  <div class="container">
    <h4><b>JADE</b></h4> 
    <p>نرم افزار ارتباطی کامپیوتر های شخصی</p> 
  </div>
</div>

<div class="card">
  <img src="../../../assets/img/img2.svg" alt="Avatar" style="width:100%">
  <div class="container">
    <h4><b>اپلیکیشن ویرا</b></h4> 
    <p>سامانه هوشمند گزارش دهی پرستاران مورد استفاده شبکه بهداشت و بیمارستانی</p> 
  </div>
</div>

<div class="card">
  <img src="../../../assets/img/img1.svg" alt="Avatar" style="width:100%">
  <div class="container">
    <h4><b>اپلیکیشن کات آرا</b></h4> 
    <p>سامانه نوبت دهی و شبکه اجتماعی آرایشگران و سالن های زیبایی کشور</p> 
  </div>
</div>
     </div>

  </section>
</template>

<script>
export default {
    name:'Section4'
}
</script>

<style scoped>
section.section4{
    width: 100%;
    height: auto;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
 
}
div.position-header{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
    padding-right: 23%;
    margin: 45px;
}
h1.header-title{
    width: 89%;
    height: 5%;
    text-align: right;
    border-right: 4px solid #F53838 ;
    padding: 5px;
    color: black;
    margin: 40px 11% 40px 0;
}

div.position-feature{
  width: 88%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding: 1.4rem;
  border-radius: 24px;

}
div.position-card{
    width: 100%;
    height: auto;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 20px;
}
div.boxs{
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
    color: white;
}
div.box1{
    width: 20rem;
    height: 20rem;
    background-color: #16A8FC;
    border-radius: 20px;
    transition: ease-in 0.4s;
}
div.box2{
    width: 21rem;
    height: 21rem;
    background-color: #FD3D39;
    border-radius: 20px;
    transition: ease-in 0.4s;
}
div.box3{
    width: 20rem;
    height: 20rem;
    background-color: #16A8FC;
    border-radius: 20px;
    transition: ease-in 0.4s;
}
h1.header{
    padding-top: 0.25rem;
    font-size: 2rem;
}
p.text{
    padding-top: 2rem;
    font-size: 0.9rem;
}
div.features{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    }
div.featuresItem1{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    border-left:1px solid #EEEFF2 ;
    padding-left: 180px;
    }
div.featuresItem2{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    }
div.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 20%;
  width: 23rem;
  height: 20.6rem;
  padding: 1.4rem;
  border-radius: 24px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

img {
  border-radius: 5px 5px 0 0;
}

div.container {

  text-align: right;
}
@media(max-width: 768px){
    section.section2{
        padding-bottom: 0;
    }
    div.boxs{
    width: 100%;
    display: flex;
    flex-direction: column;
}
div.box1{
    order: 3;
    width: 100%;
    height: 20rem;
    border-radius: 0;
}
div.box2{
    order: 1;
    width: 100%;
    height: 20rem;
    border-radius: 0;
}
div.box3{
    order: 2;
    width: 100%;
    height: 20rem;
    border-radius: 0;
}
div.box1:hover , div.box2:hover , div.box3:hover{
    transform: scale(1);
}  
}
</style>