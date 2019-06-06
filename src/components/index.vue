<template>
    <div class="content">
      <h1>Hello,{{user.name}},
        <h1 v-if="user.count===0">你的事情做完啦！</h1>
        <h1 v-if="user.count!==0">你还有{{user.count}}件事情没做</h1>
      </h1>
      <label for="content"></label>
      <input type="text" placeholder="输入待办事项" name="content" v-model="content">
      <button v-on:click="createTodo">添加</button>
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
      },
      createTodo(){
        if (this.user.id) {
          if (this.content) {
            const data = {
              "id":this.user.id,
              'name':this.user.name,
              'content':this.content,
              'status':true
            }
            this.$http.post('/createTodo',data)
              .then(res=>{
                if (res.success) {
                  this.user.list.push({
                    "id":this.user.id,
                    'name':this.user.name,
                    'content':data.content,
                    'status':true
                  })
                }
              })
          }
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
        },
        content:''
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
