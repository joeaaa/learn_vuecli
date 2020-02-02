<template>
  <div id="app">
    <!-- 使用ref获取节点 -->
    <input type="text" ref="mytext">
    <button @click="handleAdd()">click me</button>
    <ul>
      <li v-for="data in datalist" :key="data">{{data}}</li>
    </ul>
    <!-- 引入navbar，sidebar，点击btn控制sidebar显示与否 -->
    <navbar>
      <!-- button通过slot插入到navbar.vue中 -->
      <button @click="isShow=!isShow">navbar click</button>
    </navbar>
    <sidebar v-show="isShow"></sidebar>
  </div>
</template>

<script>
// 引入navbar， sidebar
import navbar from './components/NavBar'
import sidebar from './components/SideBar'

// 引入axios，读取url json
import axios from 'axios'

// 注册为全局组件
// import Vue from 'vue'
// Vue.component('navbar', navbar)
// Vue.component('sidebar', sidebar)

export default {
  data () {
    return {
      datalist: ['a', 'b', 'c', 'd'],
      isShow: false
    }
  },
  methods: {
    handleAdd () {
      this.datalist.push(this.$refs.mytext.value)
    }
  },
  mounted () {
    axios.get('http://m.maoyan.com/ajax/movieOnInfoList?token=').then(res => {
      console.log(res)
    })
  },
  components: {
    navbar: navbar,
    sidebar: sidebar
  }
}
</script>

<style lang="scss">
  ul {
      list-style : none;
    li {
        background : yellow
    }
  }
</style>
