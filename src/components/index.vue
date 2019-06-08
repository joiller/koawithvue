<template>
    <div class="content">
      <h1>Hello,{{user.name}}!!</h1>
      <h1 v-if="user.count===0">你的事情做完啦！</h1>
      <h1 v-if="user.count!==0">你还有{{user.count}}件事情没做</h1>

      <div>
        <label for="content"></label>
        <input type="text" placeholder="输入待办事项" name="content" v-model="content">
        <button v-on:click="createTodo">添加</button>
      </div>
      <div></div>
      <input type="radio" value="0" name="fulfilled" id="r1" checked class="r">
      <input type="radio" value="1" name="fulfilled" id="r2" class="r">
      <div class="show-nav">
        <label for="r1" class="r1">正在进行</label>
        <label for="r2" class="r2">已完成</label>
      </div>
      <div></div>
      <div class="undone">
        <div v-for="todo in this.user.list">
          <div v-if="todo.status" class="todo-grid undone">
            <span>{{todo.user_id}}</span>
            <span>{{todo.content}}</span>
            <div><span>{{todo.status}}</span><button v-on:click="toggleStatus(todo)">完成</button></div>
          </div>
        </div>
      </div>

      <div class="doned">
        <div v-for="todo in this.user.list">
          <div v-if="!todo.status" class="todo-grid done">
            <span>{{todo.user_id}}</span>
            <span>{{todo.content}}</span>
            <div><span>{{todo.status}}</span><button v-on:click="toggleStatus(todo)">未完成</button></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import jwt from 'jsonwebtoken'



  export default {
    name: 'index',
    created(){
      const userInfo = this.getUserInfo()
      this.getTodos()
    },
    // beforeUpdate(){
    //   console.log('update')
    //   if (this.$refs.r1.checked) {
    //     this.$refs.undone.style.display = 'block'
    //     this.$refs.doned.style.display = 'none'
    //   }else {
    //     this.$refs.undone.style.display = 'none'
    //     this.$refs.doned.style.display = 'block'
    //   }
    // },
    methods:{
      getUserInfo(){
        const userinfo = sessionStorage.getItem('token-by-vue')
        if (userinfo){
          const decoded = jwt.decode(userinfo)
          this.user.name = decoded.name
          this.user.id = decoded.id
        }
      },
      getTodos(){
        this.$http.post('/getTodoListByid',{id:this.user.id})
          .then(res=>{
            this.user.list = res.data
            for (let i=0;i<res.data.length;i++){
              if (res.data[i].status) {
                this.user.count+=1
              }
            }
          })
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
                console.log(res)
                if (res.data.success) {
                  this.user.list.push({
                    "uid":this.user.id,
                    "content":data.content,
                    'status':true,
                  })
                  this.user.count+=1
                  this.content = ''
                }
              })
          }
        }
      },
      toggleStatus(todo){
        const data={
          "todoid":todo.id,
          "status":todo.status
        }
        this.$http.post('/toggleStatus',data)
          .then(res=>{
            this.user.count+=!todo.status*1-todo.status*1
            todo.status = !todo.status;
          })
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
        content:'',
      }
    }
  }
</script>

<style scoped>
  .content{
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #2c3e50;
    color: aliceblue;
    width: 100%;
    /*height: 400px;*/
  }

  .todo-grid{
    width: 500px;
    display: grid;
    grid-template-columns: .5fr 1fr 1fr;
  }

  .show-nav label{
    background-color: aquamarine;
    margin: 0;
    color: #2c3e50;
  }

  .show-nav{
    justify-self: right;
  }

  .r{
    display: none;
  }

  label:checked{
    transform: scale(2);
  }

  #r1:checked~.undone{
    display: block;
  }

  #r1:checked~.doned{
    display: none;
  }

  #r2:checked~.doned{
    display: block;
  }

  #r2:checked~.undone{
    display: none;
  }


  #r1:checked~.show-nav .r1{
    background-color: aqua;
  }

  #r2:checked~.show-nav .r2{
    background-color: aqua;
  }
</style>
