<template>
  <div>
    <div>
      <p></p>
      <span v-if="userInfo">你好！{{ userInfo.name }}</span>
    </div>
    <div>
      <!-- 插入音乐 -->
      <span>月半小夜曲</span>
      <audio autoplay
             controls
             loop
             src="../assets/music/李克勤 - 月半小夜曲.mp3"></audio>
    </div>
    <div class="banner">
      <div class="item">
        <img :src="dataList[currentIndex]"
             alt="logo" />
      </div>
      <div class="page"
           v-if="this.dataList.length > 1">
        <ul>
          <li @click="gotoPage(prevIndex)">&lt;</li>
          <li v-for="(item, index) in dataList"
              :key="index"
              @click="gotoPage(index)"
              :class="{ current: currentIndex == index }">
            {{ index + 1 }}
          </li>
          <li @click="gotoPage(nextIndex)">&gt;</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      dataList: [
        require('@/assets/images/xm1.jpg'),
        require('@/assets/images/xm2.jpg'),
        require('@/assets/images/xm3.jpg')
      ],
      // dataList: ["../assets/image/11.jpg", "../assets/image/cjq.jpeg", "../assets/image/dog1.jpg"],//不可行
      // dataList: ["https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg", "https://i1.mifile.cn/a4/xmad_15532384207972_iJXSx.jpg", "https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg"],
      currentIndex: 0, //默认显示图片
      timer: null, //定时器
      // imgsrc: require('@/assets/image/dog1.jpg'),
      sound: require('@/assets/music/李克勤 - 月半小夜曲.mp3')
    }
  },
  methods: {
    gotoPage (index) {
      this.currentIndex = index
    },
    getImage () {
      console.log('getImage: ' + this.dataList[this.currentIndex])
      return this.dataList[this.currentIndex]
    },
    /* 自动播放音乐 */
    musicPause () {
      // TODO
    },
    musicPlay () {
      // TODO
    }
  },

  computed: mapState({
    // Register.vue中存储userInfo时进行了序列化，所以这儿需要反序列化
    userInfo: state => state.userModule.userInfo,
    //上一张
    prevIndex () {
      if (this.currentIndex == 0) {
        return this.dataList.length - 1
      } else {
        return this.currentIndex - 1
      }
    },
    //下一张
    nextIndex () {
      if (this.currentIndex == this.dataList.length - 1) {
        return 0
      } else {
        return this.currentIndex + 1
      }
    }
  }),
  mounted () {
    //定时器
    this.timer = setInterval(() => {
      this.gotoPage(this.nextIndex)
    }, 1000)
  }
}
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
ul li {
  list-style: none;
  float: left;
  width: 30px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
}
.banner {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  margin-top: 60px;
}
.banner img {
  width: 100%;
  display: block;
}
.banner .page {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
}
.banner .page ul {
  float: right;
}
.current {
  color: #ff6700;
}
.first {
  width: 50%;
  float: left;
  height: 100px;
  border: 1px solid #3b6273;
}
</style>
