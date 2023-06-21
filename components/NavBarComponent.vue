<template>
    <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand @click.prevent="goToHome">
      <!-- <nuxt-link to="/"> -->
      BettingApp
      
      <!-- </nuxt-link> -->
      </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item @click.prevent="goToBets" href="/bets">Bets</b-nav-item>
        <b-nav-item @click.prevent="goToTransactions" href="/transactions">Transactions</b-nav-item>

      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form> -->

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>
         <b-avatar variant="light"></b-avatar>
            </em>
          </template>
          <b-dropdown-item href="/profile" @click.prevent="goToProfile()">Profile</b-dropdown-item>
          <b-dropdown-item href="signout" @click.prevent="signout">{{signedIn?'Sign Out':'Sign In'}}</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<script>
export default{
  computed:{
    signedIn(){
     return this.$store.getters.getLoginState
    }
  },
  methods:{
    signout(){
      this.$store.dispatch('logout')
      this.$router.push('/login')
    },
    goToWallet(){
      console.log("wallet");
      this.$router.push("/wallet")
    },
    goToProfile(){
        if(this.signedIn){
      this.$router.push("/profile")
      }
      else{
      this.$router.push('/login')
      }
    },
     goToBets(){
      this.$router.push("/bets")
    },
     goToTransactions(){
      this.$router.push("/transactions")
    },
     goToHome(){
      this.$router.push("/")
    }
  }
}
</script>
<style scoped>

.nav-link{
  color:white !important
}
</style>
