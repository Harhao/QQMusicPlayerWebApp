<template>
    <div id="playerPane" >
      <div id="albumn"  @click="openDetail">
        <img :src="songPlayList[0].singerAvartar" :class="{Rotation:this.toggle}"/>
      </div>
      <div id="controllPane">
        <span id="panePrev" @click="prevSong"></span>
        <span id="panePlay" :class="{pause:!this.toggle,panePlay:this.toggle}" @click="play"></span>
        <span id="paneNext" @click="nextSong"></span>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
import operateFunctions from "../common/musicOperate";
export default {
  data() {
    return {};
  },
  computed: {
    toggle() {
      return this.$store.state.toggle;
    },
    songPlayList() {
      return this.$store.state.songPlayList;
    }
  },
  methods: {
    openDetail(event) {
      document.getElementById("musicPlayer").style.display = "block";
      document.documentElement.style.overflow = "hidden";
    },
    ...operateFunctions
  }
};
</script>
<style scoped>
#playerPane {
  display: block;
  width: 100%;
  height: 60px;
  position: fixed;
  margin: 0;
  padding: 0;
  bottom: 0;
  background-color: #31c27c;
  z-index: 99;
}
#albumn {
  display: inline-block;
  width: 60px;
  height: 60px;
  line-height: 60px;
  padding: 0 0 0 5%;
}
#albumn img {
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 5px;
}
#controllPane {
  display: inline-block;
  width: 60%;
  height: 60px;
  position: absolute;
  right: 0;
  text-align: center;
}
#controllPane span {
  display: inline-block;
  width: 50px;
  height: 50px;
  margin-top: 5px;
}
.panePlay {
  background-image: url("../../static/images/play.png");
  background-position: center center;
  background-size: 35px 35px;
  background-repeat: no-repeat;
}
#panePrev {
  background: url("../../static/images/prev.png") no-repeat;
  background-position: center center;
  background-size: 35px 35px;
}
#paneNext {
  background: url("../../static/images/next.png") no-repeat;
  background-position: center center;
  background-size: 35px 35px;
}
.pause {
  background: url("../../static/images/pause.png") no-repeat;
  background-position: center center;
  background-size: 35px 35px;
}
@keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
.Rotation {
  transform: rotate(360deg);
  animation: rotation 5s linear infinite;
  -moz-animation: rotation 5s linear infinite;
  -webkit-animation: rotation 5s linear infinite;
  -o-animation: rotation 5s linear infinite;
}
</style>
