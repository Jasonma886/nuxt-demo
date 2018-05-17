<template>
  <div class="left-bar">
    <!--<div><el-button type="primary" icon="el-icon-edit" circle></el-button></div>-->
    <div><el-button type="success" icon="el-icon-check" circle></el-button></div>
    <div><el-button type="info" icon="el-icon-message" circle></el-button></div>
    <div><el-button type="warning" icon="el-icon-star-off" circle></el-button></div>
    <div><el-button type="danger" icon="el-icon-delete" circle></el-button></div>
    <div><a href="#top">top</a></div>
  </div>
</template>

<script>
  export default {
    name: ''
  }
</script>

<style lang="" scoped>
  .left-bar{
    width: 40px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 50px);
    position: fixed;
    top: 300px;
    left: 50px;
  }
</style>
