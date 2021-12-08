<template>
  <section class="section6">
      <div class="header">
          <h1>فرم درخواست مشاوره و سفارشات</h1>
      </div>
      <form class="register" ref="register">
          <div class="top-form">
              <div class="email">
                  <div class="labal">
                      <label>ایمیل</label>
                  </div>
                  <div class="input">
                      <input type="text" placeholder="آدرس ایمیل خود را وارد نمایید" v-model="userdata.email">
                  </div>
              </div>
              <div class="call">
                  <div class="labal">
                      <label>تلفن</label>
                  </div>
                  <div class="input">
                      <input type="text" placeholder="شماره تماس خود را وارد نمایید" v-model="userdata.phone">
                  </div>
              </div>
              <div class="name">
                  <div class="labal">
                      <label> نام و نام خانوادگی </label>
                  </div>
                  <div class="input">
                      <input type="text" placeholder="نام و نام خانوادگی خود را وارد نمایید" v-model="userdata.fullname">
                  </div>
              </div>
          </div>
          <div class="bottom-form">
              <div class="message">
                  <div class="labal">
                      <label>پیام</label>
                  </div>
                  <div class="input">
                     <textarea type="text" placeholder="... اینجا بنویسید" v-model="userdata.message"></textarea>
                  </div>
              </div>
              <div class="error">
                  <p class="error-item" v-for="(error , index) in errors" :key="index">{{ error.msg }}</p>
              </div>
              <div class="msg-send" v-if="messagesend">
                  <p class="msg-send">پیام شما با موفقیت ارسال شد</p>
              </div>
          </div>
          <div class="submit">
              <input type="submit" value="CTA" v-on:click.prevent="sendData">
          </div>
      </form>
  </section>
</template>
<script>
import {reactive , ref} from 'vue';
export default {
    name: 'Section6' , 
    setup(){
        const userdata = reactive({
            fullname: '' , 
            phone: '' , 
            email: '' ,
            message: ''
        });
        const messagesend = ref(false);
        const errors = reactive([]);
        function sendData(){
            const data = {
      fullName: userdata.fullname,
      phone: userdata.phone,
      email: userdata.email,
      message: userdata.message,
    };
    fetch("http://185.128.82.62:3334/user/create", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
    },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        if(data.code == 400){
          errors.push(...data.errors);
          setTimeout(() => {
              errors.length = 0;
          }, 3000);
      }
      else{
          messagesend.value = true;
          setTimeout(() => {
            messagesend.value = false;
            userdata.fullname = '';
            userdata.phone = '' ; 
            userdata.email = '' ;
            userdata.message = '' ;
          }, 3000);
      }
      })
 }
 return{ sendData ,  userdata , messagesend , errors}
    }
}
</script>

<style scoped>
section.section6{
    width: 100%;
    height: auto;
    padding-bottom: 9rem;
    background-image: url('../../../assets/img/Elevator Vector.jpg');
}
div.header{
    width: 50%;
    margin: 5rem auto;
    text-align: center;
}
form.register{
    width: 70%;
    margin: auto;
}
div.top-form {
    width: 100%;
    display: flex;
    flex-direction: row;
    padding-bottom: 1rem;
}
div.name , div.call , div.email{
    width: 33.3%;
}
div.labal{
    font-size: 0.9rem;
    text-align: right;
}
div.input{
    text-align: right;
}
div.input input{
    width: 70%;
    padding: 0.3rem;
    border-radius: 5px;
    outline: none;
    border: 1px solid #c1c1c1;
    transition: 1s;
}
div.input input::placeholder{
    text-align: right;
}
div.input input:focus , div.input input:hover{
    text-align: right;
    border: 1px solid black;
}
div.bottom-form{
    width: 100%;
}
div.error{
    width: 50%;
    margin: auto;
    text-align: center;
    color: red;
    background-color: #ffc9c9;
    border-radius: 10px;
}
div.msg-send{
    text-align: center;
    color: green;
    border-radius: 10px;
    background-color: #6fff6f;
    width: 50%;
    margin: auto;
}
div.bottom-form div.input textarea{
    width: 90%;
    padding-bottom: 2rem;
    border-radius: 5px;
    outline: none;
    border: 1px solid #c1c1c1;
    transition: 1s;
    resize: none;
}
div.bottom-form div.input textarea:hover{
    border: 1px solid black;
}
div.bottom-form div.input textarea::placeholder{
    text-align: right;
}
div.submit{
    width: 28%;
    margin-top: 2rem;
    text-align: right;
}
div.submit input{
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
div.submit input:hover{
    box-shadow: none;
}
@media(max-width: 768px){
    div.header{
    width: 100%;
}
form.register{
    width: 100%;
}
div.top-form {
    flex-direction: column;
}
div.name , div.call , div.email{
    width: 100%;
}
div.input input{
    width: 97%;
}
div.bottom-form div.input textarea{
    width: 98%;
}
div.submit{
    width: 100%;
    text-align: center;
}
}
</style>