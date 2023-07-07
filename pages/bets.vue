<template>
  <div class="bets-card">
    <h1>Placed Bets</h1>
    <b-table
    v-if="items.data"
      striped
      hover
      outlined
      responsive
      :fields="fields"
      :items="items.data.bets"
    ></b-table>
    <p v-else> no records found</p>
  </div>
</template>

<script>
export default {
  layout: "custom",
  async mounted() {
    console.log("process.env", process.env.apiUrl)
    console.log("process.env", process.env)

    try {
      this.items = await this.$axios.post(
        `${process.env.apiUrl}/bets/getPlacedBets`
      );
    } catch (error) {
       this.$bvToast.toast(`${error}`, {
        title: "Error",
        autoHideDelay: 3000,
        variant: "danger",
      });
    }
  },
  data() {
    return {
      fields: [
        {
          key: "amount",
          label: "Bet Amount",
        },
        {
          key: "team",
          label: "Team Selected",
        },
        {
          key: "result",
          label: "Result Predicted",
        },
        {
          key: "createdAt",
          label: "Betting Date",
          formatter: this.formatDate,
        },
      ],
      items: [],
    };
  },
  computed: {},
  methods: {
    formatDate(value) {
      return this.$moment(value).format("MMMM Do YYYY, h:mm A");
    },
  },
};
</script>
<style scoped>
.bets-card {
  margin: 20px;
  padding: 20px;
  background-image: linear-gradient(#b9bde6, #7c85e7) !important;
  border-radius: 10px;
}
</style>
