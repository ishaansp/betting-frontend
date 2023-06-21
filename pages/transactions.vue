<template>
  <div class="m-2 p-3" > 
    <h1>Transactions</h1>
    <div>
  <b-tabs content-class="mt-3">
    <b-tab title="Debit" active><p>I'm the first tab</p></b-tab>
    <b-tab title="Credit"><p>I'm the second tab</p></b-tab>
  </b-tabs>
</div>
    <!-- <b-table striped hover outlined responsive :fields="fields" :items="items.data.bets"></b-table> -->
  </div>
</template>

<script>
  export default {
    layout:'custom',
    async mounted(){
       this.items= await this.$axios.post('http://localhost:3001/bets/getPlacedBets').catch((error)=>{
        console.log('error')
       });;
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