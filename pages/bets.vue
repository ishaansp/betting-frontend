<template>
  <div class="bets-card" v-if="items.data"> 
    <h1>Placed Bets</h1>
    <b-table striped hover outlined responsive :fields="fields" :items="items.data.bets"></b-table>
  </div>
</template>

<script>
  export default {
    layout:'custom',
    async mounted(){
       this.items= await this.$axios.post('http://localhost:3001/bets/getPlacedBets');
       console.log("this.items", this.items)
    },
    data() {
      return {
        fields:[{
            key:'amount',
            label:'Bet Amount'
        },
        {
            key:'team',
            label:'Team Selected'
        },
        {
            key:'result',
            label:'Result Predicted'
        },{
            key:'createdAt',
            label:'Betting Date',
            formatter:this.formatDate,
        },],
        items: [
        ]
      }
    },
    computed:{
        
    },
    methods:{
        formatDate(value ){
            return this.$moment(value).format('MMMM Do YYYY, h:mm A');
        }
    }
  }
</script>
<style scoped>
.bets-card{
  margin: 20px;
  padding: 20px;
  background-image: linear-gradient(#b9bde6, #7c85e7) !important;
  border-radius: 10px;
}
</style>