<template>
  <b-modal
    @close="close()"
    @hide="close()"
    v-model="showModal"
    id="bet-modal"
    size="lg"
    height="500px"
    
    centered
    title="Add New Card"
  >
    <div class="card-div" id="card-element"></div>
    
    <div id="card-errors" class="m-2" role="alert">
      <p></p>
    </div>
    <br>
  </b-modal>
</template>
<script>
import { loadStripe } from "@stripe/stripe-js/pure";

export default {
  props: ["show"],
  async mounted() {
    this.stripe = await loadStripe(
      "pk_test_51NDq1PSGrthBFHWgmuEy9NW7cm3AozNBrvxIfPXjqYrxcaVJv28QsuxUsRWcj4mp6fkLRHIgnXGIwArKMIcnqujB00YK9TQz4v"
    );
    // this.loadCard();
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    close() {
      console.log("close");
      this.$emit("modalClosed");
    },
    loadCard() {
      this.element = this.stripe.elements();
      this.card = this.element.create("card");
      this.card.on("change", ({ error }) => {
        let displayError = document.getElementById("card-errors");
        if (error) {
          displayError.textContent = error.message;
        } else {
          displayError.textContent = "";
        }
      });
      if(this.showModal){
      this.card.mount("#card-element");
      }
      // this.showModal = true;
    },
  },
  watch: {
    show(val) {
      console.log("val", val);
      this.showModal = val;
      setTimeout(() => {
        this.loadCard();
      }, 500);
    },
  },
};
</script>
