<template>
    <nav class="nav">
        <!-- <div class="btn-cta">
            <span class="position-button">              
                <img class="languge-icon" src="../../assets/img/flag-iran.svg" />
                FA
                <img src="../../assets/img/arrow-down.svg">
            </span>
        </div> -->
        <div class="menu-bar">
            <div class="menu">
                <div class="btn-menu" v-on:click="showmenu">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </div>

                <ul class="position-nav-btn" ref="show">
                    <li  v-on:click="scrollTofooter"><p class="position-li" tabindex="1">تماس با ما</p></li>
                    <li  v-on:click="scrollTofooter"><p class="position-li" tabindex="1">درباره ما </p></li>
                    <li v-on:click="scrollToSectionfour"><p class="position-li" tabindex="1">همکاران</p></li>
                    <li v-on:click="scrollToSectiontree"><p class="position-li" tabindex="1">پروژه ها</p></li>
                    <li v-on:click="scrollToSectiontwo"><p class="position-li" tabindex="1">مزایای همکاری</p></li>
                    <li v-on:click="scrollTotop" >
                    <router-link class="routerLink" to="./"><p class="position-li" tabindex="1">خانه</p></router-link>
                    </li>
                </ul>
                </div>
        </div>
      <div class="logo" ref="logo">
            <img class="logo-style" src="../../assets/img/logo.svg" />
        </div>
    </nav>
</template>

<script>
import { ref , onMounted } from 'vue';
export default {
    name: 'Menu_app',
    setup(){
        const logo = ref(null);
         onMounted(() => {
        document.addEventListener('scroll', function(){
            if(window.innerWidth < 768){
                if(window.pageYOffset > 300){
                logo.value.style.display = 'none';
            }
            else{
                logo.value.style.display = 'block';
            }
            }
        })
      })
        const show = ref(null);
        function showmenu(){
            if(show.value.style.visibility == 'hidden'){
            show.value.style.visibility = 'visible';
            show.value.style.height = '10rem';
            }
            else{
            show.value.style.visibility = 'hidden';
            show.value.style.height = '0rem';
            }
        }
        function scrollTotop(){
            window.scrollTo({
                top: top,
                behavior: 'smooth'
                       });
        }
        function scrollToSectiontwo(){
            if(window.innerWidth > 768){
        window.scrollTo({
                top: 720,
                behavior: 'smooth'
                       });
            }
            else{
                window.scrollTo({
                top: 1400,
                behavior: 'smooth'
                       })
            }
        }
        function scrollToSectiontree(){
            if(window.innerWidth > 768){
        window.scrollTo({
                top: 1350,
                behavior: 'smooth'
                       });
            }
            else{
                window.scrollTo({
                top: 2000,
                behavior: 'smooth'
                       })
            }
        }
        function scrollToSectionfour(){
                if(window.innerWidth > 768){
        window.scrollTo({
                top: 2450,
                behavior: 'smooth'
                       });
            }
            else{
                window.scrollTo({
                top: 2400,
                behavior: 'smooth'
                       })
            }
            }

            function scrollTofooter(){
                if(window.innerWidth > 768){
        window.scrollTo({
                top: 4000,
                behavior: 'smooth'
                       });
            }
            else{
                window.scrollTo({
                top: 3700,
                behavior: 'smooth'
                       })
            }
            }
        return { logo , show , showmenu , scrollTotop ,scrollToSectiontwo , scrollToSectiontree , scrollToSectionfour , scrollTofooter}
    }
}
</script>

<style scoped>
nav.nav{
    width: 100%;
    height: 7.06rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #FFFFFF;
    position: sticky;
    top: 0;
    box-shadow: 0px 5px 15px #F8F8F8;   
    z-index: 1;
}
p.position-li{
    font-family: 'IRANSansFaNum';
    font-style: normal;
    font-weight: 500;
    vertical-align: top;
    font-size: 18px;
    line-height: 28px;
    color: #4F5665;
}
.position-li:hover,.position-li:focus,.position-li:active{    
    color: #F53838;
    width:auto;
    min-height: 30px;
    cursor: pointer;
    border-bottom:1.5px solid #F53838;
}

img.languge-icon{
    width: 2rem;
    height: 1.5rem;
    font-family: 'Roboto';
    padding: 0.2rem;
}
.position-button{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
}
ul.position-nav-btn{
    width: auto;
    display: flex;
    flex-direction: row;
}
.routerLink{
     text-decoration: none;
 }
div.logo{
    width: 139px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-right: 150px;
}
img.logo-style{
    width: 8.7rem;
    height: 2.4rem;
}
div.menu-bar{
    width: 100%;
    display: flex;  
    align-items: center;
    
}
div.menu{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
}
div.menu ul{
    display: flex;
    text-align: center;
    flex-direction: row;
}
div.menu ul > li{
    list-style-type: none;
    margin-left: 30px;
    color: #4F5665;
}

div.btn-menu{
    display: none;
}

div.btn-cta {
    width: 7.5rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    text-align: flex-end;
    margin-top: 2rem;
    margin-left: 7.6rem;
    border-radius: 6px;
    background-color: #FFFFFF;
    border: none;
    color: #4F5665;  
    font-weight: bold;
    border:  1px solid #E5E5E5;
}
div.btn-cta button:hover{
    box-shadow: none;
}
@media(max-width: 768px ){
nav.nav{  
    height: auto;
    display: flex;
    flex-direction: column; 
    direction: rtl;
}
div.logo{
 display: none;
}
div.menu-bar{
    width: 100%;
}
div.menu{
    background-color: #FFFFFF;
}
div.menu ul{
    display: flex;
    text-align: right;
    flex-direction: column-reverse;
    visibility: hidden;
    height: 0rem;
    overflow: hidden;
    margin: auto;
    transition:all 1s;
}

div.menu ul > li{
    list-style-type: none;
    width: 78%;
    border: 1px solid #FFFFFF;
}
div.btn-menu{
    width: 15%;
    display: block;
    align-self: start;
    text-align: center;
    background-color: #FFFFFF;
    transition: ease-in 0.5s;
}
div.btn-menu img{
    width: 100%;
    height: 100%;
}
div.btn-menu:hover{
    background-color: #FFFFFF;
}
.position-li:hover,.position-li:focus,.position-li:active{    
    border:none;
}
}
</style>
