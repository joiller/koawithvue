<template>
  <div id="app">
    <img src="./assets/logo.png">
<!--    <login v-bind:person="user"></login>-->
    <router-view></router-view>

  </div>
</template>

<script>
import login from './components/login'
export default {
  name: 'App',
  components: {
    login
  },
  // data () {
  //   return {
  //     user: {
  //       id: login.id,
  //       name: login.data().name,
  //
  //       email: ''
  //     }
  //   }
  // }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
