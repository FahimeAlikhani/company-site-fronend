<template>
  <section class="section0">
     <!-- <img src="../../../assets/img/Rectangle.svg" /> -->
    
 <div class="box">
    <div class=featuresItem>
        <div class="Item">
            <img class="img" src="../../../assets/img/employee.svg" />
            <div class="subItem">
            <h1 class="number">10+</h1>   
            <p class="text">تعداد همکاران</p>
            </div>
        </div>
        <div class="divider"></div>
        <div class="Item">
            <img class="img" src="../../../assets/img/Project1.svg" />
            <div class="subItem">
            <h1 class="number">7+</h1>
            <p class="text">پروژه های در دست ساخت</p>
            </div>
        </div>
        <div class="divider"></div>
        <div class="Item">
            <img class="img" src="../../../assets/img/Project2.svg" />
            <div class="subItem">
            <h1 class="number">3+</h1>
            <p class="text">پروژه های تکمیل شده</p>
            </div>
        </div>       
    </div> 
</div>   
  </section>
</template>

<script>
export default {
    name: 'Section0_item' 
}
</script>

<style scoped>
section.section0{
    width: 100%;
    height: auto;
    display: flex;
    justify-content:center;
    align-items: center;
    
}

div.box{      
    width: 1140px;
    height: 199.99;
    background-color: #FFFFFF;      
    border-radius: 10px;
    box-shadow: 1px 1px 114px #0d10252c ; 
    margin-top: 98px;
    align-items: center;
    justify-content:center;
}  

div.featuresItem{
    display: flex;  
}
div.Item{
    display: flex;
    width: 34%;
}
div.subItem{
    padding-top: 4rem;
    padding-left: 2rem ;
}
h1.number{
    color: #0B132A;  
    font-family: 'Rubik';
    font-weight: bold;
    font-style: normal;
    font-size: 1.56rem;
    line-height: 1.875rem;
    -moz-font-feature-settings: "ss02";
    -webkit-font-feature-settings: "ss02";
    font-feature-settings: "ss02";
}
p.text{
    color: #4F5665;   
    font-family: 'IRANSansFaNum';
    font-weight: normal;
    font-style: normal;
    font-size: 1.25rem;
    line-height: 1.875rem;
    
}

img{  
    padding-top: 4rem;
    max-width: 55px;
    max-height: 55px;
    padding-left: 2rem ;
}



div.divider{
    height: 18vh;
    margin-top: 2%;
    margin-bottom: 2%;
    margin-left: 5%;
    border: 2px solid #EEEFF2;
    background-color: #EEEFF2;
}
@media(max-width: 768px){
    section.section0{
        padding-bottom: 0;
    }
    

}
</style>