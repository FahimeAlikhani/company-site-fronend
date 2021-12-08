<template>
  <section class="section2">
      <div class="boxs">
        <div class="box1">
            <h1 class="header">ویژگی سوم</h1>
            <p class="text">
                لورم ایپسوم یا طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.
          .طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد
            </p>
        </div>
        <div class="box2">
            <h1 class="header">ویژگی اول</h1>
            <p class="text">
                لورم ایپسوم یا طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.
          .طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد
            </p>
        </div>
        <div class="box3">
            <h1 class="header">ویژگی دوم</h1>
            <p class="text">
                لورم ایپسوم یا طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.
          .طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد
            </p>
        </div>
      </div>
  </section>
</template>

<script>
export default {
    name: 'Section2' 
}
</script>

<style scoped>
section.section2{
    width: 100%;
    height: auto;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
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
    padding-top: 2rem;
    font-size: 2rem;
}
p.text{
    padding-top: 2rem;
    font-size: 0.9rem;
}
div.box1:hover{
    background-color: #007ec7;
    transform: scale(1.1);
}  
div.box2:hover{
    background-color: #f13a36;
    transform: scale(1.1);
}  
div.box3:hover{
    background-color: #007ec7;
    transform: scale(1.1);
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