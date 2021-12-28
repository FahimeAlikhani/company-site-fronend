<template>
  <section class="section2">
        <div class="featuresItem">
            <h1 class="header">90+</h1>
            <p class="text">
               تعداد همکاران 
            </p>
        </div>
        <div class="featuresItem">
            <h1 class="header">30+</h1>
            <p class="text">
                پروژه های دردست ساخت
            </p>
        </div>
        <div class="featuresItem">
            <h1 class="header">50+</h1>
            <p class="text">
                پروژه های تکمیل شده
            </p>
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
    justify-content: space-evenly;
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
    padding-top: 0.25rem;
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
div.features{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    }
div.featuresItem{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: center;
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