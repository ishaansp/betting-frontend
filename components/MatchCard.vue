<template>
  <div class="match-card">
      <!-- <b-card
          overlay
          align="center"
          img-src="../assets/images/gradient.jpeg"
          img-alt="Card Image"
          text-variant="white"
          style="max-width:40rem"
        >
          <b-card-body> -->
            {{ match.teams[0] }}
            <img src="../assets/images/vs.png" height="200px" width="200px" />
            {{ match.teams[1] }}
              
             <p> <b> {{ match.name }} </b></p>
<p>             On {{  $moment(match.dateTimeGMT)}} at {{ match.venue }}</p>

<p>              {{ match.status }}</p>
            <!-- </p> -->
            <b-button v-if="canBet" @click="showModel">bet</b-button>
          <!-- </b-card-body>
        </b-card> -->
  </div>
</template>
<script>

export default{
  props:['match'],
  methods:{
    showModel(){
      console.log('showModel');
      this.$emit('showModal', this.match)
    }
  },
  computed:{
    canBet(){
       const min= this.$moment().diff(this.$moment(this.match.dateTimeGMT), 'minutes');
        console.log('minutes', min)
        if(min<30){
          return true
        }
        else{
          false
        }
}

  }
}
</script>
<style scoped>
.match-card{
  opacity: 1;
  /* background-image: url('../assets/images/gradient.jpeg'); */
  /* background-image: linear-gradient(red, black  ); */
background-image: linear-gradient(.25turn, black, 40%, red);
  image-rendering: -webkit-optimize-contrast;
  margin:10px;
  color: white;
  text-align: center;
  padding: 20px;

}
</style>
