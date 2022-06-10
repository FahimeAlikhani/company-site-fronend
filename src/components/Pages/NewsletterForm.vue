<template>
  <div class="newsletter-form-container">
    
      <div class="btn-cta">
          <button
          id="button-newsletter"
          class="btn-cta"
          :class="{disabled: form.sending}"
          type="submit"
          @click.prevent="validateForm"
        >
        عضویت در خبرنامه
        </button>
      </div>
        <input
          id="email"
          v-model="form.email"
          type="email"
          name="email"
          placeholder=" ایمیل خود را وارد کنید ..."
          class="input"
        >
        
      <transition name="status">
        <div
          v-if="form.errors.length"
          :class="form.success ? 'alert-success' : 'alert-danger'"
          class="alert"
          role="alert"
        >
          <ul>
            <li
              v-for="(error, index) in form.errors"
              :key="index"
            >
            {{ error }}
            </li>
          </ul>
        </div>
      </transition>
    
  </div>
</template>

<script>
import axios from 'axios'
import { APISettings } from "../../api/config.js";
export default {
  name: 'NewsletterForm',
  data() {
    return {
      form: {
        email: null,
        errors: [],
        validated: false,
        sending: false,
        success: false,
      },
    }
  },
  methods: {
    validateForm() {
      this.form.success = false;
      this.form.errors = [];
      if (!this.form.email) {
        this.form.errors.push('Email required.');
      } else if (!this.validEmail(this.form.email)) {
        this.form.errors.push('Valid email required.');
      }
      if (!this.form.errors.length) {
        this.subscribe();
        return true;
      } else {
        this.closeFormStatus();
      }
    },
    validEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    closeFormStatus() {
      setTimeout(()=> {
        this.form.errors = [];
      }, 3000);
    },
    resetFormEmail() {
      setTimeout(()=> {
        this.form.email = '';
      }, 3000);
    },
    async subscribe() {
      this.form.sending = true;
      this.form.errors.push('Sending...');
      try {
        const response = await axios.post(APISettings.baseURL +'/dashboard/newsletterform', {email: this.form.email});
        this.form.success = true;
        this.resetFormEmail();
        this.form.errors.push(`Thank you: ${this.form.email} ${response.data}!`);
      } catch (error) {
        this.form.errors.push(`Error (${error.response.data.status}): ${error.response.data.title}`);
      } finally {
        this.closeFormStatus();
        this.form.sending = false;
      }
    }
  }
}
</script>

<style scoped>
div.btn-cta{
    left:300px;
    width: 13%;
    text-align: center;
    position:absolute;
    margin-left:0.8%;
    margin-top: 0.8%; 
    }
div.btn-cta button{
    width: 90%;
    height: 3rem;
    font-size: 18px;
    line-height: 28.17px;
    border-radius: 10px;
    background-color: #F53838;
    border: none;
    color: white;
    font-weight: 700;
    cursor: pointer;       
    }
  
div.btn-cta button:hover{
    margin-top: 4px;   
    transform:scale(.9);
    box-shadow: #F53838 0px 20px 45px -10px;
    
    }
.alert{
    color:#F53838;
    font-size: 1rem;
    font-weight: 400;
    font-style: normal;
    line-height: 30px;
    text-align: left;
    margin-left:70px;
}
  input.input {
    width: 82%;
    color: #B2B2B2;
    border:1px solid #E5E5E5;
    padding:20px 24px ;
    border-radius: 14px;
    font-family: 'IRANSansFaNum';
    font-size: 1rem;
    font-weight: 400;
    font-style: normal;
    line-height: 30px;
    direction: rtl;
    }
input:focus { 
    outline: none !important;
    border-color: #F53838;
    box-shadow: 0 0 10px #F53838;
}
  .newsletter-form-container {
    width: 70vw; 
  }
  @media(max-width: 768px){
    div.newsletter-form-container{
      width: 50vw;
      margin-top: 50px;
    }
    div.btn-cta{
    left:250px;
    width: 20%;
    margin-left:0;
    margin-top: 1.2%; 
    }
    div.btn-cta button{
      font-size: 14px;
      line-height: 15.17px;
      font-weight: 400;  
    }
    input.input {
      font-size: 0.8rem;
    }
    .alert{
    margin-left:35px;
    }
}
    
    
</style>
