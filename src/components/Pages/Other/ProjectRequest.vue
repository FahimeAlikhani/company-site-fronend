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
      <div class="section-text">
          <div class="text">
          <p>پروژه خود را به بهترین ها بسپارید</p> 
      <div>
        <label for="full_name" class="label">نام و نام خانوادگی</label>
        <div class="relative rounded-md shadow-sm">
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
        <div class="relative rounded-md shadow-sm">
          <textarea
            id="message"
            v-model="message"
            name="message"
            required
            rows="4"
            class="input"
            placeholder="توضیحات پروژه را بنویسید"
          ></textarea>
        </div>
      </div>      
      <div class="">
        <span
            type="submit"
             class="submit"
          >
            {{ loading ? "Sending Message..." : "ارسال" }}
        </span>
      </div>
    </div>
   </div>
   </div>
  </section>
</template>

<script>
export default {
    name: 'ProjectRequest', 
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
      this.$axios
        .post("/messages", {
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
    width: 83%;
    height: 1px;
    margin: 20px 10px;
}
div.header-title{
    width: 80%;
    margin-top: 3rem;
    display: flex;
    flex-direction: row; 
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
    width: 40%;
    margin-top: 2rem;
    margin-left: 9.130rem;
}
div.section-text{
    text-align: right;
    width: 58%;
    margin-right: 11.75rem;
}
div.text{
    margin-top:2.56rem ;   
    direction: rtl;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    font-family: 'IRANSansFaNum';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    text-align: right;
}
div.text p{
  color: #4F5665;
  margin-bottom: 3.75rem;
}

div.position-layer{
    width: 100%;
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
    padding:32px 12px;
}
.input{
    min-width: 25rem;
    max-width: 25rem;
    font-family: 'IRANSansFaNum';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    text-align: right;
    color: #D0CFD4;
    padding: 10px 8px;
    margin: 12px 0 32px 0;
}
.submit{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 24px;
    background: #F53838;
    border-radius: 6px;
    margin-top: 1.375rem;
    margin-bottom: 6.8125rem;
    cursor: pointer; 
}
.submit :hover{
  margin-bottom: 5px;
}
@media(max-width: 768px){
    div.section-img{
    display: none;
}
div.section2-text{
    width: 100%;
}
div.text{
    width: 90%;
    height: 12rem;
    
}
.input{
    width: 50%;
    
}
}
</style>