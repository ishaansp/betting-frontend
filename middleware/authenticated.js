var ls = require('local-storage');
 
export default function ({ store, redirect }) {
    // If the user is not authenticated
    debugger
    var a=ls.get("vuex");
    console.log("vuex", a);
    console.log('state',store.state)
    if (!store.state.loggedin) {
      return redirect('/login')
    }else{
      return redirect('/')

        // console.log('state',store.state)
    }
  }