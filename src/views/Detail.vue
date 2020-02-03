<template>
<!-- 列表跳转详情页面 -->
  <div>
    detail-page
  </div>
</template>

<script>
export default {
  mounted () {
    // 获取传入url的id值
    console.log(this.$route.params.id)
  }
}
</script>
