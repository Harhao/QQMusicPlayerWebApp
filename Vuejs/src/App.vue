
<template>
  <div id="app">
    <Mheader></Mheader>
    <keep-alive><router-view></router-view></keep-alive>
    <musicDetail></musicDetail>
    <audioPane></audioPane>
    <audio id="play"  :src="songPlayList[0].songSrc" preload ></audio>
  </div>
</template>

<script type="text/ecmascript-6">
import Mheader from '@/components/my-header';
import audioPane from'@/components/AudioPane';
import musicDetail from '@/components/MusicDetail'
export default {
  components: {
      Mheader,
      audioPane,
      musicDetail,
    },
  computed:{
    songPlayList(){
      return this.$store.state.songPlayList;
    }
  },
  mounted() {
    //do something after mounting vue instance
    this.$http.get("http://localhost:3000/songList").then((response)=>{
      var data=response.data.cdlist[0].songlist;
      this.$store.commit('addSong',data);
    }).catch((e)=>{
      console.log(e);
    });
  }
}
</script>

<style scoped>
body{
  margin:0;
  overflow: hidden !important;
}

</style>
