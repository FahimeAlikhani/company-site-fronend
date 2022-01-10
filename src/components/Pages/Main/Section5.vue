<template>
  <section class="Section5">

    <h1 class="header-title">همکاران شرکت</h1>
     <div class="position-card">

         <div class="card">
  <img src="../../../assets/img/cabos.png" alt="Avatar" style="width:60%;height:50%">
  <div class="container">
    <h4><b>JADE</b></h4> 
    <p>نرم افزار ارتباطی کامپیوتر های کابوس</p> 
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
    name:'Section5'
}
</script>

<style scoped>
section.Section5{
    width: 100%;
    height: auto;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-image: url('../../../assets/img/bcimg.jpg');
 
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
  width: 15%;
  height: 15.6rem;
  padding: 1.4rem;
  border-radius: 24px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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