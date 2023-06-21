<template>
  <div class="row justify-content-center mt-5" >
    <div class="col-md-12 col-lg-10">
      <div class="wrap d-md-flex">
        <div class="img" >
          <img src="../assets/images/cover.jpg" width="300" height="80%" />
        </div>
        <div class="login-wrap p-4 p-md-5">
          <div class="d-flex">
            <div class="w-100">
              <h3 class="mb-4">Sign In</h3>
            </div>
            <div class="w-100">
              <p class="social-media d-flex justify-content-end">
                <a
                  href="#"
                  class="social-icon d-flex align-items-center justify-content-center"
                  ><span class="fa fa-facebook"></span
                ></a>
                <a
                  href="#"
                  class="social-icon d-flex align-items-center justify-content-center"
                  ><span class="fa fa-twitter"></span
                ></a>
              </p>
            </div>
          </div>
          <form class="signin-form">
            <div class="form-group mb-3">
              <label class="label" for="name">Username</label>
              <input
                v-model="email"
                type="text"
                class="form-control"
                placeholder="Username"
                required
              />
            </div>
            <div class="form-group mb-3">
              <label class="label" for="password">Password</label>
              <input
                v-model="password"
                type="password"
                class="form-control"
                placeholder="Password"
                required
              />
            </div>
            <div class="form-group">
              <button
                type="submit"
                class="form-control btn btn-primary rounded submit px-3"
                @click.prevent="login"
              >
                Sign In
              </button>
            </div>
            <!-- <div class="form-group d-md-flex">
              <div class="w-50 text-left">
                <label class="checkbox-wrap checkbox-primary mb-0"
                  >Remember Me
                  <input type="checkbox" checked />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="w-50 text-md-right">
                <a href="#">Forgot Password</a>
              </div>
            </div> -->
          </form>
          <p class="text-center">
            Not a member? <nuxt-link data-toggle="tab" to="/signup">Sign Up</nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // middleware: "authenticated",
  methods: {
    async login() {
      const payload = {
        email: this.email,
        password: this.password,
      };
      console.log("login", payload);
      // try {
         this.$axios.$post(
          "http://localhost:3001/user/signin",
          payload
        ).then((data)=>{
console.log("user", data);
        this.$store.dispatch('login', data);
              this.$bvToast.toast(`logged in `, {
          title: 'Success',
          autoHideDelay: 3000,
          variant:'success'
        })
        this.$router.push('/')
        }).catch(error=>{
          if(error.response){
 this.$bvToast.toast(`${error.response.data.message}`, {
          title: 'Error',
          autoHideDelay: 3000,
          variant:'danger'
        })
          }
           
        });
        
      // } catch (error) {
      //   console.log("error", error);
      // }
    },
  },
  data() {
    return {
      email: "",
      password: "",
      image1:"../assets/images/cover.jpg"
    };
  },
};
</script>

