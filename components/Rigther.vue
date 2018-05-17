<template>
  <div class="right-bar">
    <el-button @click="show = !show">
      <i class="el-icon-arrow-down" v-if="show"></i>
      <i class="el-icon-arrow-up" v-else></i>
    </el-button>
    <el-collapse-transition>
      <div v-show="show" class="titles-list">
        <template v-for="title in titles">
          <div>
            {{title.title}}
          </div>
        </template>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: '',
    data () {
      return {
        show: true
      }
    },
    computed: {
      ...mapGetters([
        'titles'
      ])
    }
  }
</script>

<style lang="" scoped>
  .right-bar{
    position: fixed;
    top: 300px;
    right: 50px;
  }
  .titles-list {
    border: 1px solid #eeffee;
    padding: 15px;
  }
</style>
