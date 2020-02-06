<template>
  <div>
      <!-- 轮播图 -->
      <!-- <swiper :key='slidelist.length'>
        <div class='swiper-slide' v-for='data in slidelist' :key='data.bannerId'>
          <img :src="data.imgUrl" />
        </div>
      </swiper> -->
      <swiper swiperId="swiper" effect="slide" :key='slidelist.length'>
        <div class='swiper-slide' v-for='data in slidelist' :key='data.bannerId' slot="swiper-slot">
          <img :src="data.imgUrl" />
        </div>
      </swiper>

      <div>film-header</div>
      <hr>
      <div>
        <ul>
          <!-- todo -->
          film-nav
          <router-view></router-view>
        </ul>
      </div>
  </div>
</template>

<script>
// 引入封装的swiper
import swiper from '@/views/Film/Swiper'
import axios from 'axios'
export default {
  // 轮播图列表
  data () {
    return {
      slidelist: []
    }
  },
  components: {
    swiper
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
  }
}
</script>
