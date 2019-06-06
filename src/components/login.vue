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
  name: 'login',
  props: ['cls'],
  data () {
    return {
      id:1,
      name: 'jhl',
      password: 'jhl233666'
    }
  },
  methods: {
    loginTo () {
      console.log(this.password)
      console.log(`data:${this.name}`)
      this.$http.post('/username', {name: this.name, password: this.password})
        .then(res => {
          if (res.data.success) {
            sessionStorage.setItem('token-by-vue', res.data.token)
            this.$data={
              type: 'success',
              message: '登录成功！',
            }
            console.log('登录成功')
            this.$router.push('/username')
          } else {
            console.log('登录失败')
            this.$data.error=res.data.info
            sessionStorage.setItem('token-by-vue', null)
          }
        }, err => {
          this.$data.error='请求错误！'
          sessionStorage.setItem('token-by-vue', null)
        })
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
