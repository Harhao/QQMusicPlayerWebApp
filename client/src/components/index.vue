<template>
	<div class="wrapper">
		<swiper :options="swiperOption" ref="mySwiperA">
			<swiper-slide v-for="item in imgArray" :key="item.picUrl">
				<img class="player" v-bind:src="item.picUrl"/>
			</swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
		<div class="lists">
			<div class="title">电台</div>
			<div class="listItem">
				<div class="itemContainer">
            <a href="">
              <div class="displayImg">
                <img v-lazy="data.radioList[0].picUrl"/>
                <span class="icon"></span>
              </div>
              <div class="content">{{data.radioList[0].Ftitle}}</div>
            </a>
				</div>
				<div class="itemContainer">
            <a href="">
              <div class="displayImg">
                <img v-lazy="data.radioList[1].picUrl"/>
                <span class="icon"></span>
              </div>
              <div class="content">{{data.radioList[1].Ftitle}}</div>
            </a>
				</div>
			</div>
		</div>
		<div class="lists">
			<div class="title">热门歌单</div>
			<div class="listItem">
				<div class="itemContainer" v-for="(item,index) in data.songList" :key="index">
            <router-link :to="{ path:'/indexlist',query:{ id: item.id,picUrl:item.picUrl}}">
              <div class="displayImg">
                <img v-lazy="item.picUrl"/>
                <span class="icon"></span>
              </div>
              <div class="content">{{item.songListDesc}}</div>
            </router-link>
				</div>
			</div>
		</div>
		<Mfooter></Mfooter>
		<loading :finish="downloaded"></loading>
	</div>
</template>
<script type="text/ecmascript-6">
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Mfooter from "@/components/my-footer";
import loading from "@/components/loading";
export default {
  components: {
    swiper,
    swiperSlide,
    Mfooter,
    loading
  },
  methods: {},
  data() {
    return {
      swiperOption: {
        // 所有配置均为可选（同Swiper配置）
        //direction: 'vertical',
        initialSlide: 0,
        pagination: ".swiper-pagination",
        loop: true,
        speed: 400,
        autoplay: true,
        paginationClickable: true
      },
      imgArray: "",
      musicMenu: [],
      downloaded: false,
      data: ""
    };
  },
  created() {
    this.$http
      .get("http://localhost:3000/home")
      .then(response => {
        this.imgArray = response.data.data.slider;
        this.data = response.data.data;
        setTimeout(() => {
          this.downloaded = true;
        }, 500);
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>
<style >
body {
  padding: 0;
  margin: 0;
}
.wrapper {
  margin-top: 2px;
  background-color: #ddd;
}
.player {
  width: 100%;
  height: auto;
}
.lists {
  display: flex;
  flex-direction: column;
  margin-top: -2px;
  background-color: #ddd;
}
.title {
  font-size: 16px;
  color: #000;
  padding: 10px;
  font-weight: normal;
}
.listItem {
  padding-bottom: 8px;
}
.itemContainer {
  position: relative;
  display: inline-block;
  padding: 0 1%;
  margin-bottom: 15px;
  width: 48%;
  /* float: left; */
}
.icon {
  position: absolute;
  bottom: 55px;
  right: 15px;
  display: inline-block;
  width: 24px;
  height: 24px;
  background: url("../../static/images/list_sprite.png") no-repeat;
  background-size: 24px 60px;
}
.displayImg {
  width: 100%;
}
.displayImg > img {
  width: 100%;
  height: auto;
}
.content {
  background-color: #fff;
  font-family: "微软雅黑";
  font-size: 14px;
  padding: 5px;
  height: 36px;
  color: #333;
}
#footer {
  width: 100%;
  height: 200px !important;
  background-color: #ddd;
}
#footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#footer div {
  align-self: center;
  justify-content: center;
  margin-top: 15px;
}

#PCWeb a {
  color: #000;
}
#logo a {
  display: inline-block;
  width: 86px;
  height: 24px;
  background: url("../../static/images/logo.png") no-repeat;
  background-size: cover;
}
#copyright a,
#contact a {
  font-size: 10px;
}
a {
  /*color:#555;*/
  text-decoration: none;
  /*border-bottom:none !important;*/
  /*造成导航栏消失的元凶*/
  /*text-indent: -9999px;*/
}
</style>
