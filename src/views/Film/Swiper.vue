<template>
  <!-- <div class="swiper-container filmswiper"> -->
  <div class="swiper-container" :class='swiperId'>
    <div class="swiper-wrapper">
      <!-- 存放具体的轮播内容 -->
      <slot name='swiper-slot'></slot>
    </div>
    <!-- 分页器 -->
    <!-- <div class='swiper-pagination'></div> -->
    <div :class="{'swiper-pagination':pagination}"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import '_swiper@5.3.0@swiper/css/swiper.min.css'
// import Vue from 'vue'
export default {
  /* swiper初始化
  mounted () {
    let vmSwiper = new Swiper('.filmswiper', { loop: true,
      pagination: {
        el: '.swiper-pagination'
      }
    })
    Vue.use(vmSwiper)
  } */

  // swiper 组件属性验证
  props: {
    swiperId: { // 轮播容器class属性的类名
      type: String,
      default: ''
    },
    effect: { // 图片切换效果:slide，fade，cube，overflow，flip
      type: String,
      default: 'slide'
    },
    loop: { // 轮播循环
      type: Boolean,
      default: true
    },
    direction: { // 图片滑动方向：水平horizontal，垂直vertical)
      type: String,
      default: 'horizontal'
    },
    pagination: { // 使用分页导航
      type: Boolean,
      default: true
    },
    paginationType: { // 分页器样式：bullets，fraction，progressbar，custom
      type: String,
      default: 'bullets'
    },
    autoplay: { // 自动切换
      type: Number,
      default: 2000
    }
  },
  data () {
    return {
      dom: ''
    }
  },
  mounted () {
    /*
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
    */

    // swiper初始化：需传入：轮播容器的类名，轮播组件详细功能的对象
    var that = this
    this.dom = new Swiper('.' + that.swiperId, {
      // 循环
      loop: that.loop,
      // 分页器
      pagination: {
        el: '.swiper-pagination',
        bulletClass: 'swiper-pagination-bullet'
      },
      // 分页类型
      paginationType: that.paginationType,
      // 自动播放
      autoPlay: that.autoPlay,
      // 方向
      direction: that.direction,
      // 特效
      effect: that.effect,
      // 用户操作swiper之后，不禁止autoplay
      disableOnInteraction: false,
      // 修改swiper自己或子元素时，自动初始化swiper
      observer: true,
      // 修改swiper的父元素时，自动初始化swiper
      observeParents: true
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
  // 分页器中当前小圆点的类名
  .swiper-pagination-bullet-active {
  background: #fff;
  }
  // 分页器的类名
  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 1rem;
    width: 95%;
    text-align: right;
  }
</style>
