export default function ({ store, redirect }) {
    // If the user is not authenticated
   debugger
    console.log('state',store.state)
    if (!store.state.loggedin) {
      return redirect('/login')
    }else{
      return redirect('/')

        // console.log('state',store.state)
    }
  }