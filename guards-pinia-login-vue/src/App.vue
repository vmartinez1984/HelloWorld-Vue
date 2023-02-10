<template>  
  <nav class="navbar navbar-expand-lg navbar-light bg-light" v-if="loginStore.isLogin">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">Home</router-link>          
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>          
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click="logOut">Cerrar sesión</a>          
        </li>        
      </ul>
    </div>
  </nav>

  <router-view />
    
 

</template>
<script>
  import { useLoginStore } from '@/stores/loginStore'
  
  export default{
    setup(){
      const loginStore = useLoginStore()

      return{
        loginStore
      }      
    },
    methods:{
      logOut(){
        this.loginStore.logOut()
        this.$router.push('/login')      
    }
  }
}
</script>