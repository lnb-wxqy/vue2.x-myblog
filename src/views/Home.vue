<template>
  <div>
    <!-- 背景音乐 -->
    <audio autoplay
           loop
           controls
           src="../assets/music/李克勤 - 月半小夜曲.mp3"></audio>
    <p><b>你要去做一个大人，不要回头，不要难过。</b></p>
    <div>
      <a href="https://github.com/zc2638/go-standard/">go标准库学习</a><br>
      <a href="https://cloudconvert.com/flac-to-mp3">flac格式在线转mp3</a><br>
      <a href="https://www.jianshu.com/p/0ae3e3bb3082">vue项目流程</a><br>
      <a href="https://www.cnblogs.com/zsh-blogs/p/11497720.html">centos7 安装mysql</a>
      <a href="https://www.cnblogs.com/aaronthon/category/1427206.html">博客园-golang部分</a>

    </div>
    <div class="center">
      <span>
        <a href="http://www.beian.miit.gov.cn/">陕ICP备20011075号-1</a>
      </span>
    </div>
  </div>
</template>

<script>
//这种方式也可以导入本地静态文件
// import img from '@/assets/image/11.jpg'
// import img2 from '@/assets/image/cjq.jpeg'
// import img3 from '@/assets/image/dog1.jpg'

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
      timer: null //定时器
      // imgsrc: require('@/assets/image/dog1.jpg'),
    }
  },
  methods: {
    gotoPage (index) {
      this.currentIndex = index
    },
    getImage () {
      console.log('getImage: ' + this.dataList[this.currentIndex])
      return this.dataList[this.currentIndex]
    }
  },
  computed: {
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
  },
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
.center {
  left: 50%;
  padding: 10px;
  position: fixed;
  bottom: 0;
}
</style>
