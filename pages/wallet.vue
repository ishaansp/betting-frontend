<template>
  <div>
    <h3>My Wallet</h3>
    <div>
      Balance :{{ Balance }}
      <b-form-input type="number" v-model="amount" />
      <b-button @click="addMoney">add Money</b-button>
    </div>
    <div class="card-div" id="card-element">
    <!-- Elements will create input elements here -->
  </div>
  <div id="card-errors" role="alert"></div>

    <br />
  </div>
</template>
<script>

export default {
  layout: "custom",
  data() {
    return {
      amount: 0,
      card:'',
      Balance: 0,
      stripe: "",
      show:false,
      secret:'',
    };
  },
  async mounted() {
    
    
  },
  methods: {
   async addMoney() {
        const payload= {
    "email":"testing@betting.com",
    "stripeID":"cus_O0C6GDdXDTjyat",
    "amount":50
};
      console.log("addMOney");
    //  this.secret= await this.$axios.post('http://localhost:3001/payments/createPaymentIntent', payload)
    // console.log("this.secret",this.secret.data.payment)
    const options = {
      // clientSecret: this.secret.data.payment//"pi_3NEF7jSGrthBFHWg0nN92cjl_secret_BlAWBlNcFWYKfrx7ll3qu89VH",
    };
    const appearance = {
      theme: "night",
      labels: "floating",
    };
    this.element = this.stripe.elements();
this.card = this.element.create("card");
this.card.on('change', ({error}) => {
  let displayError = document.getElementById('card-errors');
  if (error) {
    displayError.textContent = error.message;
  } else {
    displayError.textContent = '';
  }
});

this.card.mount("#card-element");
// this.element = this.stripe.elements(options, { appearance });
  //  const paymentElement = this.element.create("payment");
    
    // await paymentElement.mount("#payment-element"); 
  
   
    },
  },
};
</script>
<style scoped>
.card-div{
    max-width: 400px;
}
</style>