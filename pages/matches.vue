<template>
  <div>
    <h1>Matches</h1>
    <center>
      <div
        class="Matchcard row justify-content-center mx-5 col-6"
        v-for="(match, index) in MatchList"
        :key="index"
      >
        <b-card
          overlay
          align="center"
          img-src="../assets/images/gradient.png"
          img-alt="Card Image"
          text-variant="white"
          :title="`match ${index + 1}`"
        >
          <b-card-body>
            <!-- {{ match.teams[0] }} -->
            <img src="../assets/images/vs.png" height="100px" width="100px" />
            <!-- {{ match.teams[1] }} -->
            <p>
              <!-- <b> {{ match.name }} </b> -->
              <br />
              <!-- {{ match.status }} -->
              <br />
              <!-- {{ match.date }} -->
            </p>
            <b-button v-b-modal.bet-modal>BET</b-button>
          </b-card-body>
        </b-card>
      </div>
    </center>
    <div>
      <b-modal id="bet-modal" centered title="Please place your bet">
        <b-container fluid>
          <b-row class="mb-1 text-center">
            <b-col cols="3"></b-col>
            <b-col>Team</b-col>
            <b-col>Result</b-col>
          </b-row>

          <b-row>
            <b-col>
              <b-form-select :options="teams"></b-form-select>
            </b-col>
            <b-col>
              <b-form-select :options="results"></b-form-select>
            </b-col>
          </b-row>
        </b-container>

        <template #modal-footer>
          <div class="w-100">
            <b-button
              variant="primary"
              size="sm"
              class="float-right"
              @click="show = false"
            >
              BET
            </b-button>
          </div>
        </template>
      </b-modal>
    </div>
  </div>
</template>
<script>
export default {
  // middleware: "authenticated",
  layout: "custom",
  methods: {
    showModel() {},
    hideModel() {},
  },
  async mounted() {
    try {
      this.MatchList = await this.$axios.$post(
        // "http://localhost:3001/matches/getMatches"
      );
    } catch (error) {
      console.log("error", error);
    }
  },
  async fetch() {},
  data() {
    return {
      MatchList: 15,
      results: ["win", "loose", "tie"],
      teams: ["teams1", "team2"],
    };
  },
};
</script>
<style scoped>
.card-img-overlay {
  /* height: 70vh;
  max-height: fit-content;
  width: 80vw; */
}
/* img{
  height: 200px;
  width: 80vw;

} */
.Matchcard {
  /* height: 70vh; */
}
</style>
