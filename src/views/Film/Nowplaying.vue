<template>
    <div>
        Now-playing
        <hr>
        <ul>
            <li v-for='data in datalist' :key='data' @click='handlePageChange(data)'>{{data}}</li>
        </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
      // 动态路由示例
      datalist: ['111', '222', '333']
    }
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
