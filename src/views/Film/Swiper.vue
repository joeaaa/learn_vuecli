<template>
  <div class="swiper-container filmswiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div class='swiper-pagination'></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import '_swiper@5.3.0@swiper/css/swiper.min.css'
// import Vue from 'vue'
export default {
  // swiper初始化
  // mounted () {
  //   let vmSwiper = new Swiper('.filmswiper', { loop: true,
  //     pagination: {
  //       el: '.swiper-pagination'
  //     }
  //   })
  //   Vue.use(vmSwiper)
  // }
  mounted () {
    // eslint-disable-next-line
    new Swiper('.filmswiper',
      {
        loop: true,
        autoplay: {
          delay: 2000
        },
        pagination: {
          el: '.swiper-pagination'
        }
      })
  }
}
</script>

<style lang="scss" scoped>
  .swiper-wrapper {
    img {
      // 使得图片宽度适应显示
      width: 100%
    }
  }
</style>
