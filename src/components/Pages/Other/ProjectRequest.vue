<template>
<section class="section">
  <div class="header-title">
        <div class="title-Vertical-line"></div>
        <div class="title-Horizontal-line"></div>
         <div class="title">
              <span style="color:#0B132A">سفارش </span>
              <span style="color:#F53838">پروژه</span>
          </div>
         <div class="title-Vertical-line"></div> 
     </div> 

     <div class="position-layer">
         <div class="section-img">
            <div >
              <img src="../../../assets/img/ProjectRequest.svg" alt="ProjectRequest">
            </div>
         </div>
        <div>
             <!-- This shows a success message if the form was submitted correctly. -->
             <div v-if="success" class="">
                   Great! Your message has been sent successfully. I will try to respond
                   quickly.
            </div>
          <form
                   v-else
                   class=""
                   @:submit.prevent="sendMessage"
                >
             <!-- Here an error is displayed if something goes wrong -->
             <div v-if="errored" class="">
                    Bummer, Something went wrong. Did you fill out all of the fields?
              </div>
              <div class="position-layer2">
                   <div class="text">
                       <p>پروژه خود را به بهترین ها بسپارید</p> 
                    </div>
                    <div class="input-box">
                    <div>
                      <label for="full_name" class="label">نام و نام خانوادگی</label>
                        <div class="">
                            <input
                                id="full_name"
                                v-model="name"
                                name="name"
                                class="input"
                                placeholder="نام و نام خانوادگی خود را وارد کنید "
                             />
                         </div>
                     </div>
                     <div>
                       <label for="email" class="label">ایمیل</label>
                          <div class="">
                             <input
                                 id="email"
                                 v-model="email"
                                 name="email"
                                 required
                                 type="email"
                                 class="input"
                                 placeholder="ایمیل خود را وارد کنید"
                              />
                           </div>
                       </div>
                       <div>
                          <label for="message" class="label">توضیحات</label>
                             <div class="">
                               <textarea
                                  id="message"
                                  v-model="message"
                                  name="message"
                                  required
                                  rows="4"
                                  maxlength="4"
                                  size="4"
                                  class="input"
                                  placeholder="توضیحات پروژه را بنویسید"
                                 ></textarea>
                               </div>
                         </div>
                       <div class="btn-cta">
                          <button
                              type="submit"
                              class="submit"
                          >
                             {{ loading ? "Sending Message..." : "ارسال" }}
                          </button>
                      </div>
                      </div>
               </div>
           </form>
          </div>
      </div>
</section>
</template>
<script>
import axios from 'axios'
import { APISettings } from "../../../api/config.js";
export default {
  name:'ProjectRequest',
  
  data() {
    return {
      loading: false,
      success: false,
      errored: false,
      name: "",
      email: "",
      message: "",
    }
  },
  methods: {
    sendMessage() {
      this.loading = true;
       axios
        .post(APISettings.baseURL + "/dashboard/projectrequest", {
          name: this.name,
          email: this.email,
          message: this.message,
        // eslint-disable-next-line no-unused-vars
        }).then(response => {
          this.success = true
          this.errored =false
        })
        .catch(() => {
          this.errored = true
        })
        .finally(() => {
          this.loading = false
        });
    },
  }
}
</script>
<style scoped>
section.section{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    justify-content: space-evenly;
    align-items: center;
}
div.title-Vertical-line{
    background-color: #F53838;
    border: 3px solid #F53838;
    box-shadow: 0px -4px 50px rgba(253,61,57,0.6) ;  
    height: 40px;
    flex-direction: row;
}
div.title-Horizontal-line{
    border-top: 1px dashed rgba(245,56,56,0.35);
    width: 900px;
    height: 1px;
    margin: 20px 10px;
}
div.header-title{
    margin-top: 3rem;
    display: flex;
    flex-direction: row; 
    text-align: center;
}
div.title {
    text-align: right;      
    color: black;
    font-family: 'IRANSansFaNum';
    font-weight: bold;
    font-style: normal;
    font-size: 1.75rem;
    line-height: 1.875rem;
    text-align: right;
    padding:0 20px 0 20px;
}
div.section-img{
    width: 50%;
    margin-top: 2rem;
}

div.position-layer2{
    margin-top:2.56rem ; 
    margin-bottom: 8rem;
    text-align: right;
    margin: 41px 0 120px 0;
}
div.text p{
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #4F5665;
    margin-bottom: 3.75rem;
    align-items: center;
}

div.position-layer{
    width: 78%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.label{
    font-family: 'IRANSansFaNum';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    text-align: right;
    color: #4F5665;
    margin: 32px 0 12px 0;
}
.input{
   max-width: 23rem;
    min-width: 23rem;   
    box-sizing: content-box;
    font-family: 'IRANSansFaNum';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    text-align: right;
    color: #D0CFD4;
    padding: 20px 8px;
    margin: 15px 0; 
    align-items: center;  
}
input:focus { 
    outline: none !important;
    border-color: #F53838;
    box-shadow: 0 0 10px #F53838;
}
textarea.input {
  padding: 20px 8px 90px 8px;
}
textarea.input:focus { 
    outline: none !important;
    border-color: #F53838;
    box-shadow: 0 0 10px #F53838;
}
.text-box{
    max-height:238px;
    min-height:238px;
    max-width: 23rem;
    min-width: 23rem;
}
.submit{
    width: 33%;
    padding: 12px 24px;
    background:#F53838 ;
    border-radius: 6px;
    margin-top: 1.375rem;
    cursor: pointer; 
    text-decoration: none;
    color: white; 
    font-size: 1.125rem;
    line-height: 1.76rem;
    font-weight: 700;
    text-align: center; 
    direction: ltr;
}
div.btn-cta :hover{
    transform:scale(.9);
    box-shadow: #F53838 0px 20px 45px -10px;
    
    }

@media(max-width: 768px){
    div.header-title{
      text-align: center;
    }
    div.title-Horizontal-line{ 
       width: 0;
    }
    div.section-img{
       display: none;
    }
    
    div.text{
       width: 90%;  
   }
   div.text p{
    text-align: center;
    }
   .input{
       width: 50%; 
   }
   .label{
    padding:32px 10%;
   }

}
</style>
