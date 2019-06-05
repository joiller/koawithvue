<template>
  <div id="app">
    <img src="./assets/logo.png">
<!--    <login v-bind:person="user"></login>-->
    <router-view v-bind:person="user"></router-view>

  </div>
</template>

<script>
import login from './components/login'
export default {
  name: 'App',
  components: {
    login
  },
  data () {
    return {
      user: {
        id: 0,
        name: '1231321',
        email: ''
      }
    }
  }
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
