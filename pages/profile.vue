<template>
  <div class="wallet-card">
    <h2>Profile</h2>
    <i class="bi bi-currency-rupee"></i>
    <div>
      <b-tabs v-model="tabs" content-class="mt-3">
        <b-tab active>
          <template v-slot:title>
            <b-icon icon="wallet"></b-icon> Wallet
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="30"
              fill="currentColor"
              class="bi bi-currency-rupee"
              viewBox="0 0 16 16"
            >
              <path
                d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"
              />
            </svg>
            {{ walletBalance }}
          </template>
          <div>
            <!-- <div class="wallet-balance"> <p> Balance :{{walletBalance}}</p></div> -->

            <b-row>
              <b-col cols="2">
                <b-input-group>
                  <template #prepend>
                    <b-input-group-text>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-currency-rupee"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"
                        /></svg
                    ></b-input-group-text>
                  </template>
                  <b-form-input
                    v-model="amount"
                    placeholder="Enter Amount"
                  ></b-form-input>
                </b-input-group>
              </b-col>
              <b-col cols="3">
                <b-form-select v-model="selectedCard">
                  <b-form-select-option value=""
                    >Select your Card</b-form-select-option
                  >
                  <option
                    :value="card.id"
                    v-for="(card, index) in cards"
                    :key="index"
                  >
                    {{ `${card.brand} XXXX-XXXX-XXXX-${card.last4}` }}
                  </option>
                </b-form-select>
              </b-col>
              <b-col>
                <b-button variant="light" @click="addMOney()">
                  <b-spinner small v-if="loader"></b-spinner>
                  Add Money</b-button
                >
              </b-col>
            </b-row>

            <hr color="white" />
            <div>
              <h3>Transactions</h3>

              <b-tabs>
                <b-tab title="Credit">
                  <b-table
                    table-variant="success"
                    class="mt-3"
                    striped
                    hover
                    outlined
                    responsive
                    :fields="creditTransactionFields"
                    :items="creditTransactionItems"
                  ></b-table>
                </b-tab>
                <b-tab title="Debit">
                  <b-table
                    table-variant="danger"
                    class="mt-3"
                    striped
                    hover
                    outlined
                    responsive
                    :fields="debitTransactionFields"
                    :items="debitTransactionItems"
                  ></b-table>
                </b-tab>
              </b-tabs>
            </div>
          </div>
        </b-tab>
        <b-tab>
          <template v-slot:title>
            <b-icon
              icon="credit-card2-back
"
            ></b-icon>
            Cards
          </template>
          <div>
          <h2>Available Cards</h2>
          <b-button style="float:right" class="m-3" @click="addCard">Add new card</b-button>
         </div>
          <b-table-simple responsive table-variant="primary">
            <b-thead>
              <b-tr>
                <b-th>Sr No.</b-th>
                <b-th>Card Brand</b-th>
                <b-th>Card Number</b-th>
                <b-th>Action</b-th>
              </b-tr>
            </b-thead>
            <b-tbody >
              <b-tr v-for="(card, index) in cards" :key="index">
                <b-td>{{ index + 1 }}</b-td>
                <b-td>{{ card.brand }}</b-td>
                <b-td>{{ `XXXX-XXXX-XXXX-` + card.last4 }}</b-td>
                <b-td
                  ><b-button @click="deleteCard(card)">
                    <b-icon
                      icon="trash
"
                    ></b-icon> </b-button
                ></b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
        </b-tab>
        <b-tab title="Add New Card">
          <p>Add New Card</p>
          <!-- <div class="card-div" id="card-element"> -->
            <!-- Elements will create input elements here -->
          <!-- </div> -->
          <!-- <div id="card-errors" role="alert"></div> -->
          <button @click="createToken">add card</button>
        </b-tab>
      </b-tabs>
    </div>
    <add-card-modal :show="showModal" @modalClosed="modalClosed"/>
  </div>
</template>
<script>
import { loadStripe } from "@stripe/stripe-js/pure";
import addCardModal from '../components/addCardModal.vue';

export default {
  components: { addCardModal },
  layout: "custom",
  // middleware: "authenticated",
  async mounted() {
    console.log("mounted profilepage");
     const a=JSON.parse(localStorage.getItem('vuex'));
      console.log(a)
    this.stripe = await loadStripe(
      "pk_test_51NDq1PSGrthBFHWgmuEy9NW7cm3AozNBrvxIfPXjqYrxcaVJv28QsuxUsRWcj4mp6fkLRHIgnXGIwArKMIcnqujB00YK9TQz4v"
    );

    this.getCreditTransaction();
    this.getDebitTransaction();

    this.retrieveCards();
  },
  data() {
    return {
      modalValue: "",
      showModal:false,
      amount: "",
      loader: "",
      tabs: 0,
      cards: [],
      selectedCard: "",
      balance: 0,
      creditTransactionItems: [],
      creditTransactionFields: [
        {
          key: "transactionId",
          label: "Transaction Id",
        },
        {
          key: "cardId",
          label: "card Id",
        },
        {
          key: "amount",
          label: "Amount",
        },
        {
          key: "balance",
          label: "Balance",
        },
        {
          key: "createdAt",
          label: "Date",
          formatter: this.formatDate,
        },
      ],
      debitTransactionItems: [],
      debitTransactionFields: [
        {
          key: "customerId",
          label: "customer Id",
        },
        {
          key: "amount",
          label: "Amount",
        },
        {
          key: "balance",
          label: "Balance",
        },
        {
          key: "createdAt",
          label: "Date",
          formatter: this.formatDate,
        },
      ],
    };
  },
  watch: {
    // tabs(val) {
    //   console.log("val", val);
    //   if (val == 2) {
    //     this.loadCard();
    //   }
    // },
  },
  computed: {
    walletBalance() {
      return this.$store.getters.walletBalance;
    },
    stripeID() {
      return this.$store.getters.stripeID;
    },
  },
  methods: {
    addCard(){
       this.showModal= true;
    },
    modalClosed() {
      console.log('hide')
      this.showModal=false
    },
    deleteCard(card) {
      console.log("delete");
      this.$bvModal
        .msgBoxConfirm(`Please confirm that you want to delete card ending with ${card.last4}.`, {
          title: "Please Confirm",
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: "YES",
          cancelTitle: "NO",
          footerClass: "p-2",
          hideHeaderClose: false,
          centered: true,
        })
        .then((value) => {
          console.log("value**", value);
          this.modalValue = value;
        })
        .catch((err) => {
          // An error occurred
        });
      // }
    },
    async getCreditTransaction() {
      const payload = {
        stripeId: this.stripeID,
      };
      const credit = await this.$axios.post(
        "http://localhost:3001/transactions/getCreditTransactions",
        payload
      );
      if (credit) {
        this.creditTransactionItems = credit.data.transactions;
      }
    },
    async getDebitTransaction() {
      this.transactions = await this.$axios.post(
        "http://localhost:3001/transactions/getDebitTransactions"
      );
      if (this.transactions) {
        this.debitTransactionItems = this.transactions.data.transactions;
      }
    },
    formatDate(value) {
      return this.$moment(value).format("MMMM Do YYYY, h:mm A");
    },
    async createToken() {
      var payload = {};
      await this.stripe.createToken(this.card).then(function (result) {
        // Handle result.error or result.token
        console.log(result);
        payload = {
          token: result.token.id,
          stripeID: this.stripeID,
        };
      });
      console.log("payload", payload);
      this.$axios.post("http://localhost:3001/payments/saveCard", payload);
    },
    async addMOney() {
      console.log("Add Money");
      this.loader = true;
      const payload = {
        cardId: this.selectedCard,
        amount: parseInt(this.amount),
        customerId: this.stripeID,
      };
      console.log("payload", payload);
      await this.$axios
        .post("http://localhost:3001/payments/createCharge", payload)
        .then((res) => {
          console.log("success", res);
          this.$store.dispatch("updateUser", res.data.user);
          this.$bvToast.toast(`Money added successfully `, {
            title: "Success",
            autoHideDelay: 3000,
            variant: "success",
          });
          this.loader = false;
          this.amount = "";
          this.getCreditTransaction();
        })
        .catch((error) => {
          console.log("error", error);
          if (error.response) {
            this.$bvToast.toast(error.response.data.message, {
              title: "error",
              autoHideDelay: 3000,
              variant: "danger",
            });
            thius.loader = false;
            this.amount = "";
          }
        });
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

      this.card.mount("#card-element");
    },
    async retrieveCards() {
      const payload = {
        stripeID: this.stripeID,
      };
      this.cards = await this.$axios.post(
        "http://localhost:3001/payments/getSavedCards",
        payload
      );
      this.cards = this.cards.data.cards.data;
    },
  },
};
</script>
<style scoped>
.card-div {
  width: 500px;
}
.wallet-balance {
  background: #7c85e7;
  font-weight: 900;
  text-decoration: underline;
}
.wallet-card {
  margin: 20px;
  padding: 20px;
  background-image: linear-gradient(#b9bde6, #7c85e7) !important;
  border-radius: 10px;
}
.loader {
  z-index: 1;
  opacity: 0.5;
  text-align: center;
  align-items: center;
}
.DemoPickerWrapper {
  padding: 0 12px;
  font-family: "Source Code Pro", monospace;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 3px;
  background: white;
  margin: 24px 0 48px;
  width: 100%;
}

.DemoPicker {
  font-size: 18px;
  border-radius: 3px;
  background-color: white;
  height: 48px;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  border: 0;
  width: 100%;
  color: #6772e5;
  outline: none;
  background: transparent;

  -webkit-appearance: none;
}

.DemoWrapper {
  margin: 0 auto;
  max-width: 500px;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.Demo {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 40%;
}

.StripeElement {
  display: block;
  margin: 10px 0 20px 0;
  background-color: #fafafa;
  padding: 10px 14px;
  font-size: 1em;
  font-family: "Source Code Pro", monospace;
  border-bottom: 2px solid #e2e8f0;
  outline: 0;
}

.StripeElement--focus {
  border-bottom: 2px solid #01896a;
  -webkit-transition: all 150ms ease;
  transition: all 150ms ease;
}

.StripeElement.IdealBankElement,
.StripeElement.FpxBankElement,
.StripeElement.PaymentRequestButton {
  padding: 0;
}
</style>
