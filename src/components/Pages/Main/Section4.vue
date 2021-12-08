<template>
  <section class="section4">
      <div class="section4-img">
          <div class="img">
              <img src="../../../assets/img/Rectangle1.jpg" alt="">
          </div>
          <div class="img">
              <img src="../../../assets/img/Rectangle2.jpg" alt="">
          </div>
      </div>
      <div class="section4-text">
          <div class="text">
              <h1 class="header">گروه آسانسور و پله برقی نقطه اوج افلاک</h1>
              <p>هدف ما ارائه سبک نوینی از خدمات در زمینه طراحی، نقشه کشی، ساخت، نصبو راه اندازی انواع آسانسور و پله برقی می باشد.</p>
              <button class="btn-text">بیشتر بدانیم</button>
          </div>
      </div>
  </section>
</template>

<script>
export default {
    name: 'Section4' 
}
</script>

<style scoped>
section.section4{
    width: 100%;
    height: auto;
    display: flex;
}
div.section4-img{
    width: 50%;
}
div.img {
    width: 70%;
    height: 20rem;
    margin: 7rem auto;
}
div.img img{
    width: 100%;
    height: 100%;
    border-radius: 20px;
}
div.section4-text{
    text-align: right;
    width: 50%;
}
div.text{
    width: 85%;
    height: 20rem;
    margin: 7rem auto;
    margin-right: 7rem;
}
div.text p{
    margin-top: 1rem;
    font-size: 1.1rem;
}
button.btn-text{
    background-color: transparent;
    border: 1px solid #d7d7d7;
    padding: 0.5rem 1.7rem;
    margin-top: 1rem;
    border-radius: 5px;
    color: #a3a3a3;
    transition: 0.5s;
}
button.btn-text:hover{
    color: white;
    background-color: #019CD5;
}
@media(max-width: 769px){
    div.section4-img{
    display: none;
}
div.section4-text{
    width: 100%;
}
div.text{
    width: 90%;
    height: 12rem;
    margin: 5rem auto;
}
}
</style>