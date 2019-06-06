<template>
    <div class="content">
      <h1>Hello,{{user.name}},
        <h1 v-if="user.count===0">你的事情做完啦！</h1>
        <h1 v-if="user.count!==0">你还有{{user.count}}件事情没做</h1>
      </h1>
    </div>
</template>

<script>
  import jwt from 'jsonwebtoken'

  export default {
    name: 'index',
    created(){
      const userInfo = this.getUserInfo()
    },
    methods:{
      getUserInfo(){
        const userinfo = sessionStorage.getItem('token-by-vue')
        if (userinfo){
          const decoded = jwt.decode(userinfo)
          this.user.name = decoded.name
          this.user.id = decoded.id
        }
      }
    },
    data(){
      return {
        user:{
          name:'jhl',
          id:'1',
          todos:'',
          list:[],
          count:0
        }
      }
    }
  }
</script>

<style scoped>
  .content{
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2c3e50;
    color: aliceblue;
    width: 100%;
    height: 300px;
  }
</style>
