<template>
  <div>
    <b-modal
    size="lg"
      @close="close()"
      v-model="showModal"
      id="bet-modal"
      centered
      title="Please place your bet"
    >
      <b-container fluid>
        <b-row class="mb-1 text-center">
          <b-col>Team</b-col>
          <b-col>Result</b-col>
          <b-col  >Bet <b-icon id="bet-info" icon="info-circle"></b-icon></b-col>
           <b-tooltip target="bet-info" triggers="hover">
   if you win the bet you will get 80% extra of bet amount as reward but if you loose the bet 100% bet amount will be lost.
  </b-tooltip>
        </b-row>

        <b-row>
          <b-col>
            <b-form-select v-model="selectedTeam" >
              <b-form-select-option value="">please select team</b-form-select-option>
              <b-form-select-option :value="team" v-for="team,index in match.teams" :key="index">{{team}}</b-form-select-option>

            </b-form-select>
          </b-col>
          <b-col>
            <b-form-select v-model="selectedResult" >
              <b-form-select-option value="">please select Result</b-form-select-option>
              <b-form-select-option :value="result" v-for="result,index in results" :key="index">{{result}}</b-form-select-option>


            </b-form-select>
          </b-col>
          <b-col>
            <b-form-select v-model="selectedBet">
              <b-form-select-option value="">please select Amount</b-form-select-option>
              <b-form-select-option :value="bet.amount" v-for="bet,index in betList.bets" :key="index">{{bet.amount}}</b-form-select-option>
            </b-form-select>
          </b-col>
        </b-row>
      </b-container>

      <template #modal-footer>
        <div class="w-100">
          <b-button
            variant="primary"
            size="sm"
            class="float-right"
            @click="placeBet"
          >
            BET
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>
<script>
export default {
  props: ["show", "match"],
  data() {
    return {
      showModal: this.show,
      results: ["win", "loose", "tie"],
      betList:[],
      selectedBet:'',
      selectedResult:'',
      selectedTeam:'',

    };
  },
  async mounted() {
    try {
      this.betList = await this.$axios.$post(
        "http://localhost:3001/bets/getAvailableBets"
      );
    } catch (error) {
      console.log("error", error);
    }
  },
  computed:{
    userId(){
      return this.$store.getters.userId
    }
  },
  watch: {
    show(val) {
      console.log("val", val);
      this.showModal = val;
    },
  },
  methods: {
    close() {
      console.log("close");
      this.$emit("modalClosed");
    },
    placeBet(){
      console.log("placeBet");
   const payload=   {
    userId:this.userId,
    matchId:this.match.id,
    amount:this.selectedBet,
    team:this.selectedTeam,
    result:this.selectedResult
};
      this.$axios.post('http://localhost:3001/bets/placeBet',payload).then(()=>{
      console.log('bet Placed');
      this.close();

      })

    }
  },
};
</script>
