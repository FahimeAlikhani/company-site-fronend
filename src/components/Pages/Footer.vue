<template>
  <footer class="footer">
      <div class="footer-top">
           <div class="layer-one"> 
               <div class="newsletter">
                  <NewsletterForm/> 
               </div>        
                <div class="layer-two-in-one">
                    <h1>
                        خبرنامه
                    </h1>
                    <p>
                        با عضویت در خبرنامه از جدید ترین اخبار مطلع شوید!
                    </p>
                </div>
          </div>

        <div class="layer_two">
                <div class="logo">
                <img class="logo-style" src="../../assets/img/logo.svg" >
                <div class="logo-text">
                    <p>خالق استثنایی ترین ها برای جهان شما</p>
                    <p> شماره تماس :  77298865 (021)</p>
                    <a href="mailto:info@jahanafza.com">info@jahanafza.com</a>
                    <p>آدرس : بزرگراه شهید سلیمانی ، بزرگراه شهید باقری،بین فلکه اول و دوم تهران پارس ، خیابان رشید، بین خیابان آهنی و گلشنی، پلاک 213، واحد 7</p>
                </div>
            <div class="section-Social">
                <div class="Social">
                    <a  href="https://www.instagram.com/jahanafza.co" target="_blank">
                       <img 
                             src="../../assets/img/social/instagram.svg"
                             alt="instagram"
                        />
                    </a>
                    <a href="https://www.linkedin.com/company/jahanafza/" target="_blank">
                       <img 
                             src="../../assets/img/social/linkdin.svg"
                             alt="linkdin"
                        />
                    </a>
                    <a href="#" target="_blank">
                       <img 
                             src="../../assets/img/social/twitter.svg"
                             alt="twitter"
                        />
                    </a>
                    <a href="https://chat.whatsapp.com/L9km9adg6EQDNJA7xhDyqi" target="_blank">
                       <img 
                             src="../../assets/img/social/whatsapp.svg"
                             alt="whatsapp" 
                        />
                    </a>
                </div>
             </div> 
        </div>
        <div class="about">
            <h2>درباره ما</h2>
                <p class="text">
                    شرکت جهان افزا از سال 1398 با گرد هم آمدن و همکاری تعدادی ازبرنامه نویسان با تجربه و با انگیزه از نقاط مختلف کشور آغاز به کار کر د خدمات ما شامل طیف گسترده ای از فعالیت ها، از جمله طراحی و ساخت سایت ها و اپلیکیشن های مختلف ایده محور و نوآورانه می باشد.
                </p>              
            </div>
            </div>
            <div class="footer-bottom"><p>کلیه حقوق این سایت متعلق به شرکت جهان افزا می باشد</p></div>
        </div>     
  </footer>
</template>

<script>
import NewsletterForm from './NewsletterForm.vue'
export default {
  components: { NewsletterForm },
    name: 'FooterPage' ,
    
}
</script>

<style scoped>

footer.footer{
    width: 100%;
    height: 20rem;
        
    }
div.footer-top{
    width: 100%;
    height:30rem;
    background-image: linear-gradient(to top,#F8F8F8  98%, #FFFFFF 30% 30%);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    }
div.layer-one{
    width: 65%;
    height: 232.91px;
    background-color: #FFFFFF;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
    padding: 40px 40px 40px 40px;
    }
    
textarea:focus { 
    outline: none !important;
    border-color: #F53838;
    box-shadow: 0 0 10px #F53838;
}
   
div.layer-two-in-one{
    width: 35%;
    text-align: right;   
    }
div.newsletter{
    width: 65%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly; 
}
div.layer-two-in-one h1{
    font-size: 28px;
    line-height: 54px;
    font-style: normal;
    font-weight: 700;
    color: #F53838;
    text-align: right;
    }
div.layer-two-in-one p{
    font-size: 1rem;
    line-height: 30px;
    font-style: normal;
    font-weight: 400;
    color: #4F5665;
    }
div.layer_two{
    width: 100%;
    height: 60%;
    margin-top: 40px;
    background-color: #F8F8F8;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;   
    }

div.logo{
    width: 20%;
    height: 100%;
    direction: rtl;
    flex-direction: column;
    }
.logo-style {
    width: 140px;
    height: 42px;
    direction: rtl;
    margin-bottom: 18px;
    }
.logo-text{
    font-family: 'IRANSansFaNum';
    color: #4F5665;
    font-size: 1rem;
    font-weight: 500;
    font-style: normal;
    line-height: 30px;
    text-align: right;
    text-justify: inter-word;
    }
 
div.section-Social{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    text-align: left;
    margin-top: 34px;
}
div.Social{
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    direction: ltr;
    padding-left: 20px;
}
div.Social a{
    padding-left: 20px;
}
div.about{
    font-family: 'IRANSansFaNum';
    width: 34%;
    text-align: right;
    color: #0B132A;
    direction: rtl;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 193;
}

div.about h2{
    font-size: 1.375rem;
    font-weight: bold;
    margin-top: 1rem;
    font-style:normal;
    line-height: 34px;
}
div.about p.text{
    margin-top:18px;
    color: #4F5665;
    font-size: 1.125rem;
    font-weight: normal;
    font-style: normal;
    line-height: 42px;
    text-align: justify;
    text-justify: inter-word;
}
div.footer-bottom{
    width: 100%;
    height: 3.43rem;
    background-color: #F53838;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    text-align: center;
    color: #FFFFFF;
    font-size:1rem;
    margin-top: 80px;
    padding-bottom: 10px;
    font-weight: 500;
    font-style: normal;
    line-height: 1.56rem;
}
div.footer-bottom p{
    padding-top: 1rem;
}
@media(max-width: 768px){
     div.footer-top{
        flex-direction: column;
        height: auto;
    }
    div.contact , div.fast-contact , div.logo{
        width: 50%;
    }
    div.layer-one{
        width: 90%;
        height: 200px;
        justify-content:center;
        align-items: center;
        padding: 0px 40px 60px 40px;
    }
    div.layer-two-in-one {
        text-align: center; 
         width: 100%; 
    }
    div.newsletter{
        width: 100%;
        text-align: center; 
        margin-top: 170px;
    }
    div.layer_two{
       width: 80%;
       text-align: center;
       flex-direction: column-reverse;
    }
    div.about{
       margin-top: 20px;
       width: 100%;
       text-align: center;
    }
    div.logo{
       margin-top: 40px;    
    width: 90%;
    height: 100%;
    direction:unset;
    flex-direction: column;
    }
    
}
</style>