<template>
    <div>
        Now-playing
        <hr>
        <ul>
            <li v-for='data in datalist' :key='data.filmID' @click='handlePageChange(data)'>
              <img :src="data.poster" alt="data.name">
              <h3>{{data.name}}</h3>
              <p>评分：{{data.grade}}</p>
              <p>主演：{{data.actors | actorFilter}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
Vue.filter('actorFilter', function (data) {
  var actorlist = data.map(item => item.name)
  return actorlist.join(' ')
})
export default {
  data () {
    return {
      // 动态路由示例
      datalist: []
    }
  },
  mounted () {
    // 使用卖座网数据
    // get请求带上header解决跨域
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=9347823',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1580884372519691043891","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res)
      this.datalist = res.data.data.films
    })
  },
  methods: {
    // 处理页面跳转
    handlePageChange (id) {
      // 进行列表点击跳转
      // this.$router.push(`/detail/${id}`)
      // 使用命名路由跳转
      this.$router.push({ name: 'nowPlayingDetail',
        params: {
          id: id
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  ul {
    li {
      padding: 10px;
      overflow: hidden;
      img {
        float: left;
        width: 100px;
      }
    }
  }
</style>
