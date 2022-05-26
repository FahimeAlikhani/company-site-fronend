<template>
  <section class="section1">
        <div class="section-img">
                <img src="../../../assets/img/Illustration1.svg" />
        </div> 
        <div class="section2"> 
          <div class="section-text-header">       
               <div class="title">
                <span style="color:#0B132A">شرکت طراحی و برنامه نویسی</span>&nbsp;
                <span style="color:#F53838">جهان افزا</span>
               </div>
          </div>
            <div class="textBox">
              <p class="text">
بهره گیری از نیروی جوان و مستعد در راستای تحقق اهداف نوآوارنه بنیانگذاران شرکت، جهان افزا را اکنون در جایگاهی قرار داده است که می‌توانیم مشاور و مجری پیچیده ترین و خلاقانه ترین ایده های بلند پروازانه‌ی شما باشیم

بارز ترین شاخصه هایی که ما را از دیگر شرکت های فعال در حوزه نرم افزار و برنامه نویسی متمایز می کند، خلاقیت، انگیزه، پایبندی به تعهدات و نرخ های رقابتی خدمات است. </p>
            </div> 
        <div class="position">  
           <div class="btn-cta">           
             <div> <router-link class="routerLink" to="">مشاوره و برآورد هزینه</router-link> </div>     
             <div> <router-link class="routerLink" to="../Other/ProjectRequest">سفارش پروژه</router-link></div>
            </div>
        </div>
        </div>  
  </section>
</template>

<script>

export default {
  name: 'Section1_item',
}
</script>
<style scoped>
section.section1{
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    font-family: 'IRANSansFaNum';
}
div.section-img{
    width: 50%;
    margin-top: 2.5rem;
    display: flex;
    justify-content: right;
    align-items: center;
}
div.section2{
    justify-content: right;
    text-align: center;
}
div.section-text-header{
    width: 100% 
}
div.title{
    text-align: right;
    font-size: 2.2rem;
    font-weight: bold;
    line-height: 4.7rem; 
    vertical-align: top; 
    margin-top: 30px;
} 
div.title span{
    font-family: 'IRANSansFaNum';
    color: #4f5665;  
}

.textBox{
    width: 90%;
    margin-top: 38px; 
    margin-left: 70px;
}
p.text{    
    padding-left: 50;
    color:#4f5665;
    text-align: right;
    font-family: 'IRANSansFaNum';
    font-weight: 400;
    font-style: normal;
    font-size: 1rem;
    line-height: 42px; 
    text-align: justify;
    text-justify: inter-word;
    direction: rtl;
}
div.position{
    margin-top: 5%;
    margin-left: 23%;
}
div.btn-cta{
    display:flex;
    flex-direction: row;
    width: 30%;
    text-align: center;
    position:absolute;
}
div.btn-cta div{
    width: 100%;
    height: 3rem;
    border-radius: 10px;    
    background-color: #F53838;
    border: none;        
    cursor: pointer; 
    margin-left:12px;      
}
.routerLink{
    text-decoration: none;
    color: white; 
    font-size: 1.125rem;
    line-height: 2.76rem;
    font-weight: 700;
    text-align: center;
 }
div.btn-cta div:hover{
    margin-top: 4px;   
    transform:scale(.9);
    box-shadow: #F53838 0px 20px 45px -10px;
    
}

@media(max-width: 768px){
    div.section-img{
        margin-left:50px;
        display: none;
    }

    section.section1{
        padding-bottom: 0;
    }
    div.section-text-header{
        width: 100%;
    }
    div.title{
        font-size: 2rem;
        line-height: 4rem; 
    }
    div.btn-cta{
        width: 60%;   
    }
    .routerLink{
        font-size: 1rem;
        font-weight: 500;
    }
    .textBox{
    margin-left: 35px;
}
}
</style>
