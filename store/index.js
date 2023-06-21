export const state = () => ({
    loggedin: false,
    token:'',
    user:{},
  })
  
  export const getters = {
    getLoginState(state) {
      return state.loggedin
    },
    walletBalance(state){
      return state.user.balance
    },
    stripeID(state){
      return state.user.stripeID
    },
    userId(state){
     return state.user._id
    }

  }
  
  export const mutations = {
    login(state,value) {
        console.log('mutation', value)
   
        state.loggedin=true
        state.token=value.token
        state.user=value.user

    },
    updateUser(state,value) {
      state.user=value

  },
    logout(state,value) {
      state.loggedin=false
      state.token=''
  }
  }
  
  export const actions = {
    login (context, value) {
    console.log('action', value)

        context.commit('login', value)
    },
    updateUser (context, value) {
          context.commit('updateUser', value)
      },
    logout (context, value) {
          context.commit('logout')
      },
  }