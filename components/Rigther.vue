<template>
  <div class="right-bar">
    <el-button @click="show = !show">
      <i class="el-icon-arrow-down" v-if="show"></i>
      <i class="el-icon-arrow-up" v-else></i>
    </el-button>
    <el-collapse-transition>
      <div v-show="show">
        <div><i class="el-icon-edit"></i></div>
        <div><i class="el-icon-edit"></i></div>
        <div><i class="el-icon-edit"></i></div>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        show: true
      }
    }
  }
</script>

<style lang="" scoped>
  .right-bar{
    position: fixed;
    top: 300px;
    right: 50px;
  }
</style>
