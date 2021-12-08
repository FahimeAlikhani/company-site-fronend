<template>
    <nav class="nav">
        <div class="logo" ref="logo">
            <p>LOGO</p> 
        </div>
        <div class="menu-bar">
            <div class="menu">
                <div class="btn-menu" v-on:click="showmenu">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </div>
                <ul ref="show">
                    <li v-on:click="scrollTofooter">تماس با ما</li>
                    <li v-on:click="scrollToSectionfive">درباره ما</li>
                    <li v-on:click="scrollToSectionfour">پروژه ها </li>
                    <li v-on:click="scrollToSectiontree">گالری </li>
                    <li v-on:click="scrollToSectiontwo">سرویس ها</li>
                    <li v-on:click="scrollTotop">صفحه اصلی</li>
                </ul>
            </div>
        </div>
        <div class="btn-cta">
            <button v-on:click="scrollToSectionfive">CTA</button>
        </div>
    </nav>
</template>

<script>
import { ref , onMounted } from 'vue';
export default {
    name: 'Menu' ,
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
                top: 900,
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
                top: 1500,
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
                top: 2100,
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
            function scrollToSectionfive(){
                if(window.innerWidth > 768){
        window.scrollTo({
                top: 2700,
                behavior: 'smooth'
                       });
            }
            else{
                window.scrollTo({
                top: 3000,
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
        return { logo , show , showmenu , scrollTotop ,scrollToSectiontwo , scrollToSectiontree , scrollToSectionfour , scrollToSectionfive , scrollTofooter}
    }
}
</script>

<style scoped>
nav.nav{
    width: 100%;
    height: 6.5rem;
    display: flex;
    flex-direction: row;
    background-color: white;
    position: sticky;
    top: 0;
    box-shadow: 1px 1px 5px #dddddd;
    z-index: 1;
}
div.logo{
    width: 20%;
    text-align: center;
}
div.logo p{
    font-family: "Poppins";
    font-size: 3rem;
    font-weight: bolder;
    margin-top: 1rem;
}
div.menu-bar{
    width: 60%;
    display: flex;
    align-items: center;
}
div.menu{
    width: 100%;
}
div.menu ul{
    display: flex;
    text-align: center;
    flex-direction: row;
}
div.menu ul > li{
    list-style-type: none;
    width: 15.6%;
    color: gray;
}
div.menu ul > li:hover{
    color: #019CD5;
    cursor: pointer;
}
div.btn-menu{
    display: none;
}
div.btn-cta{
    width: 20%;
    text-align: center;
    padding-top: 2rem;
}
div.btn-cta button{
    width: 70%;
    height: 2.5rem;
    border-radius: 30px;
    background-color: #019CD5;
    border: none;
    color: white;
    font-weight: bold;
    box-shadow: 1px 3px 5px gray;
    transition: 0.5s;
}
div.btn-cta button:hover{
    box-shadow: none;
}
@media(max-width: 768px){
nav.nav{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    box-shadow: none;
}
div.logo{
    width: 100%;
    text-align: center;
    background-color: #d7d7ff;
}
div.menu-bar{
    width: 100%;
}
div.menu{
    width: 100%;
    background-color: #f1f1f1;
}
div.menu ul{
    display: flex;
    text-align: center;
    flex-direction: column-reverse;
    visibility: hidden;
    height: 0rem;
    overflow: hidden;
    margin: auto;
    transition:all 1s;
}

div.menu ul > li{
    list-style-type: none;
    width: 100%;
    border: 1px solid #fbfbfb;
}
div.btn-menu{
    width: 15%;
    display: block;
    align-self: start;
    text-align: center;
    background-color: #d3d3d3;
    transition: ease-in 0.5s;
}
div.btn-menu img{
    width: 100%;
    height: 100%;
}
div.btn-menu:hover{
    background-color: #f3f3f3;
}
div.btn-cta{
    display: none;
}
}
</style>