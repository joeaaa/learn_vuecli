<template>
    <nav>
        <!-- 声明式导航 -->
        <ul>
            <router-link to="/film" tag="li" active-class="my-active-class"><i class='iconfont icon-folder'></i>film</router-link>
            <router-link to="/cinema" tag="li" active-class="my-active-class"><i class='iconfont icon-form'></i>cinema</router-link>
            <router-link to="/center" tag="li" active-class="my-active-class"><i class='iconfont icon-favorite'></i>center</router-link>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
  .my-active-class {
    color: red
  }
  nav {
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 50px;
    background-color: white;
  }
  ul {
    display: flex;
    li {
      flex: 1;
      line-height: 50px;
      text-align: center;
    }
  }
</style>
