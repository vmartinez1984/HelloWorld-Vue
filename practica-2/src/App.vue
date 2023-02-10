<template>
  <nav v-if="$store.state.isLogin" class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">          
          <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/Estados">Lista</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-on:click="logOut" href="#">Cerrar sesión</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<login v-if="!$store.state.isLogin"></login>
<router-view v-if="$store.state.isLogin"></router-view>

</template>
<script>
import Login from './views/Login.vue'

export default {
  components: { Login },
  name: 'App',
  methods:{
    logOut(){
      this.$store.commit('logOut')
      //console.log('logOut')
    }
  }
}
</script>