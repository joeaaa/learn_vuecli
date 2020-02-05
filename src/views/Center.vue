<template>
    <div>
        center page
    </div>
</template>

<script>
// user登陆 局部验证
const centerLocalAuth = {
  isLogin () {
    return false
  }
}
export default {
  beforeRouterEnter (to, from, next) {
    if (centerLocalAuth.isLogin) {
      next()
    } else {
      next('/login')
    }
  }
}
</script>
