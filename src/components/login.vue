<template>
    <div v-bind:class="cls">
      <div>      <label for="name">姓名：</label>

        <input type="text" name="name" v-model="name">
      </div>
      <div>      <label for="password">密码：</label>

        <input type="password" name="password" v-model="password">
      </div>
      <button v-on:click="loginTo">登录</button>
    </div>
</template>

<script>
    export default {
        name: "login",
      props:['cls'],
      data(){
          return {
            name:'',
      password:''
    }
      },
      methods:{
          loginTo(){
            this.$router.push('/')
          }
      }
    }
</script>

<style scoped>
div{
  margin: 10px;
}
.content{
  display: flex;
  justify-content: center;
  align-items: center;
}
  button{
    border: none;
    color: aliceblue;
    border-radius: 10px;
    outline: none;
    background-color: blueviolet;
    width: 100px;
    height: 40px;
    letter-spacing: 3px;
    line-height: 40px;
    font-size: 24px;
  }
  button:hover{
    box-shadow: 0 0 5px cornflowerblue;
  }
  button:active{
    transform: scale(.9);
  }
</style>
