<template>
  <div id="top">
    <my-header/>
    <nuxt/>
    <my-lefter/>
    <my-righter/>
    <my-footer/>
  </div>
</template>

<script>
import MyFooter from '~/components/Footer.vue'
import MyHeader from '~/components/Header.vue'
import MyLefter from '~/components/Lefter.vue'
import MyRighter from '~/components/Rigther.vue'
import axios from '~/plugins/axios'
import {mapActions} from 'vuex'

export default {
  components: {
    MyFooter,
    MyHeader,
    MyLefter,
    MyRighter
  },
  created () {
  },
  methods: {
    ...mapActions([
      'AgetTitles'
    ]),
    init () {
      axios.get('/api/articles').then(res => {
        this.AgetTitles(res.data)
      })
    }
  }
}
</script>

<style lang="stylus">
  @import '../assets/css/base.styl'
.container
{
  margin: 0 auto;
  width: 70%;
  height: 180vh;
  box-shadow: 0px 0px 15px 5px;
  padding: 100px 0;
  background-color: backColor;
  text-align: center;
}

.button, .button:visited
{
  display: inline-block;
  color: fontColor1;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #000;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}

.button:hover, .button:focus
{
  color: #fff;
  background-color: #000;
}

.title
{
  color: #000;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
}
</style>
