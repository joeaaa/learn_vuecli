<template>
  <div>
      <swiper swiperId="swiper" effect="slide" :key='slidelist.length' ref="myswiper">
        <div class='swiper-slide' v-for='data in slidelist' :key='data.bannerId' slot="swiper-slot">
          <img :src="data.imgUrl" />
        </div>
      </swiper>
      <filmheader :class="isFixed ? 'fixed':''"></filmheader>
      <hr>
      <div>
        <ul>
          <router-view></router-view>
        </ul>
      </div>
  </div>
</template>

<script>
// 引入封装的swiper
import swiper from '@/views/Film/Swiper'
// 引入film-header
import filmheader from '@/views/Film/Filmheader'
import axios from 'axios'
export default {
  // 轮播图列表
  data () {
    return {
      slidelist: [],
      isFixed: false
    }
  },
  components: {
    swiper,
    filmheader
  },
  mounted () {
    axios({
      url: 'https://m.maizuo.com/gateway?type=2&cityId=310100&k=6324612',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1580884372519691043891","bc":"500100"}',
        'X-Host': 'mall.cfg.common-banner'
      }
    }).then(res => {
      this.slidelist = res.data.data
    })
    // 页面下滚导航固定
    window.onscroll = this.handleScroll
  },
  beforeDestroy() {
    // 页面销毁前取消监听
    window.onscroll = null
  },
  methods: {
    // 页面下滚导航固定方法
    handleScroll () {
      if (document.documentElement.scrollTop >= this.$refs.myswiper.$el.offsetHeight) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    }
  }
}
</script>
