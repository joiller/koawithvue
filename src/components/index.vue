<template>
    <div class="content">
      <h1>Hello,{{person.name}}</h1>
    </div>
</template>

<script>

  export default {
    name: 'index',
    props:['person']
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
