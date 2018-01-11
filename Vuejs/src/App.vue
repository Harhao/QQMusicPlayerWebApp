
<template>
  <div id="app">
    <Mheader></Mheader>
    <keep-alive><router-view></router-view></keep-alive>
    <musicDetail></musicDetail>
    <audioPane></audioPane>
    <audio id="play"  :src="songPlayList[0].songSrc" @ended="nextSong" @error="nextSong" preload="auto"></audio>
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
    methods: {
      nextSong(){

        if(this.$store.state.songPlayList){
          this.$store.commit("nextSong",1);
          var audio=document.getElementById('play');
          audio.addEventListener("canplaythrough", function(){
              audio.play();
          },false);
          if(!this.toggle){
            var state=!this.toggle;
            this.$store.commit('changeTog',state);
          }

        }else{
          console.log("not found this song");
        }

      }
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
