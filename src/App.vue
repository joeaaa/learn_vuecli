<template>
  <div id="app">
    <tabbar></tabbar>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
// 引入tabbar 作为cinema film center导航
import tabbar from './components/TabBar'

// 引入axios，读取url json
import axios from 'axios'

export default {
  data () {
  },
  methods: {
  },
  mounted () {
    // vue.config.js中，配置转发代理
    axios.get('/ajax/movieOnInfoList?token=').then(res => {
      console.log(res)
    })
  },
  components: {
    tabbar: tabbar
  }
}
</script>

<style lang="scss">
  ul {
      list-style : none;
    li {
        //background : yellow
    }
  }
</style>
