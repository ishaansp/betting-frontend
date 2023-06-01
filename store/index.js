export const state = () => ({
    loggedin: false,
    token:''
  })
  
  export const getters = {
    getLoginState(state) {
      return state.loggedin
    }
  }
  
  export const mutations = {
    login(state,value) {
        console.log('mutation', value)
   
        state.loggedin=true
        state.token=value
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
    logout (context, value) {
          context.commit('logout')
      },
  }