<template>
    <div id="musicPlayer">

      <div id="back">
        <div id="backCon" @click="Back">

          <span id="goBack"></span>
          <span>返回</span>
        </div>
      </div>
      <div id="musicTop">
        <div id="musicAvatar">
          <img :src="songPlayList[0].singerAvartar"/>
        </div>
        <div id="info">
          <div id="title">{{songPlayList[0].songName}}</div>
          <div id="author">{{songPlayList[0].singer}}</div>
        </div>
        <div :class="{pause:!this.toggle,control:this.toggle}" @click="controlPause"></div>
      </div>
      <div id="lyrics">
        <div id="avatar">
          <img class="img" :class="{Rotation:this.toggle}" :src="songPlayList[0].singerAvartar"/>
          <span class="largeCir">
            <span class="smallCir"></span>
          </span>
        </div>
      </div>
      <div id="musicControlPane">
        <div class="function" >
          <i class="icon_play_list" @click="toggleMenu"></i>
          <i class="space"></i>
          <i class="icon_like" @click="store"></i>
        </div>
        <div class="Pane">
          <span class="startTime">{{currentTime}}</span>
          <span class="progress">
            <i class="total"></i>
            <i class="current"></i>
          </span>
          <span class="endTime">{{duration}}</span>
        </div>
      </div>
      <globalList></globalList>
    </div>
</template>
<script type="text/ecmascript-6">
  import globalList from './globalList.vue';
  export default{
    components:{
      globalList
    },
    data(){
      return {
        duration:'',
        currentTime:'',
        show:false
      }
    },
    computed:{
      toggle(){
        return this.$store.state.toggle;
      },
      songPlayList(){
        return this.$store.state.songPlayList;
      },

    },
    methods:{
      formatTime(time,audio){
        var munite=Math.floor(time.toFixed(0)/60);
        var second=time.toFixed(0)%60;
        if(second<10){
          var format="0"+munite+':0'+second;
        }else{
          var format="0"+munite+':'+second;
        }

        return format;
      },
      controlPause(event){
        var audio=document.getElementById('play');
        //toggle为true，即播放中
        if(this.toggle){
          var state=!this.toggle;
          this.$store.commit('changeTog',state);
          audio.pause();
        }else{
          var state=!this.toggle;
          console.log(this.toggle);
          this.$store.commit('changeTog',state);
          audio.play();
        }

      },
      Back(){
        document.getElementById('musicPlayer').style.display='none';
        document.documentElement.style.overflow="auto";
      },
      updateCurrentTime(){
        var audio=document.getElementById('play');
        var currentTime=this.formatTime(audio.currentTime,audio);
        this.currentTime=currentTime;
        var percent=(audio.currentTime.toFixed(0)/audio.duration.toFixed(0))*100;
        document.getElementsByClassName('current')[0].style.width=percent+'%';

      },
      getDuration(){
        var audio=document.getElementById('play');
        var duration=this.formatTime(audio.duration,audio);
        this.duration=duration;
      },
      addEventListeners(){
        var audio=document.getElementById('play');
        audio.addEventListener('timeupdate', ()=>{
          this.updateCurrentTime();
        });
        audio.addEventListener('canplay',()=>{
          this.getDuration();
          this.updateCurrentTime();
        });
      },
      removeEventListeners(){
        var audio=document.getElementById('play');
        audio.removeEventListener('timeupdate', this.updateCurrentTime());
        audio.removeEventListener('canplay',()=>{
          this.getDuration();
          this.updateCurrentTime();
        });
      },
      toggleMenu(event){
        var menu=document.getElementById('globalList');
        if(!this.show){
          var start=0;
          var show=setInterval(()=>{
            if(start<=200){
              menu.style.height=start+'px';
              start+=100;
            }else {
              clearInterval(show);
            }

          },100);
          this.show=!this.show;
        }else{
          var start1=200;
          var hide=setInterval(()=>{
            if(start1>=0){
              menu.style.height=start1+'px';
              start1-=100;
            }else {
              clearInterval(hide);
            }

          },100);
          this.show=!this.show;
        }
      },
      store(event){
        if(localStorage.getItem(this.songPlayList[0].songName)){
          event.target.classList.remove('store');
          localStorage.removeItem(this.songPlayList[0].songName);
          console.log('cancel done');
        }else{
          localStorage.setItem(this.songPlayList[0].songName,this.songPlayList[0]);
          event.target.classList.add('store');
          console.log('store done');
        }

      }

    },
    mounted() {
      this.addEventListeners();
    },
    beforeDestroyed() {
      this.removeEventListeners()
    }
  }
</script>
<style scoped>
  #musicPlayer{
    position:fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top:0;
    bottom: 0;
    right: 0;
    z-index:999;
    display: none;
    overflow: hidden;
    background: url('https://y.gtimg.cn/music/photo_new/T001R150x150M000003Nz2So3XXYek.jpg?max_age=2592000') no-repeat;
    background-size: cover;
  }
  #back{
    width: 100%;
    height: 60px;
    color:#fff;
  }
  #backCon{
    width: 80px;
    height: 60px;
    line-height: 60px;
  }
  #goBack{
    display: inline-block;
    width: 10px;
    height: 10px;
    border-left:1px solid #fff;
    border-bottom:1px solid #fff;
    border-right: none;
    border-top:none;
    transform: rotate(45deg);
    margin-left: 20px;
    margin-top: 15px;
  }
  #musicTop{
    display: flex;
    width: 100%;
    height: 80px;
    padding: 15px 0px;
    flex-direction: row;
    background:rgba(0,0,0,.1);
  }
  #musicAvatar{
    flex:1.3;
    text-align: center;
    padding-left: 2%;

  }
  #musicAvatar img{
    width: 80px;
    height: 80px;
  }
  #info{
    flex: 3;
    display: flex;
    flex-direction: column;
    padding-left:10px;
    color: #fff;

  }
  #title{
    height: 30px;
    font-size: 18px;
  }
  #author{
    margin-top: 5px;
    height: 20px;
    font-size: 14px;
  }
  .control{
    flex: 1;
    background: url('../../static/images/play.png') no-repeat;
    background-position: center center;
    background-size:45px 45px ;
  }
  .pause{
    flex: 1;
    background: url('../../static/images/pause.png') no-repeat;
    background-position: center center;
    background-size:45px 45px ;
  }
  #avatar{
    position: relative;
    display: flex;
    /*width: 300px;*/
    /*height: 300px;*/
    width: 80%;
    height: 80%;
    border-radius: 50%;
    align-self: center;
    justify-content: center;
    justify-items: center;
  }
  #avatar img{
    /*width: 208px;*/
    /*height: 210px;*/
    width: 80%;
    height: 85%;
    border-radius: 50%;
    padding: 5px;
    background-color: #ccc;
  }
  #avatar span.largeCir{
    display: flex;
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #3A3A3A;
    border: 2px solid #fff;
    align-self: center;
    align-items: center;
    justify-content: center;
    opacity: 0.8;
  }
  span.smallCir{
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
    margin: 0 auto;
    border:2px solid #3A3A3A;
  }
  #lyrics{
    display: flex;
    width: 100%;
    min-height: 150px;
   justify-items: center;
    justify-content: center;
  }
  @-webkit-keyframes rotation{
    from {-webkit-transform: rotate(0deg);}
    to {-webkit-transform: rotate(360deg);}
  }

  .Rotation{
    -webkit-transform: rotate(360deg);
    animation: rotation 8s linear infinite;
    -moz-animation: rotation 8s linear infinite;
    -webkit-animation: rotation 8s linear infinite;
    -o-animation: rotation 8s linear infinite;
  }
  #musicControlPane{
    width: 100%;
    height: 154px;
  }
  .function{
    width: 100%;
    display: flex;
    height: 50px;
    flex-direction: row;
  }
  .function i{
    display: flex;
    width: 50px;
    height: 50px;
    align-self: center;
  }
  .function i.icon_play_list{
    justify-content: center;
    background: url('../../static/images/sprite_play.png') no-repeat;
    background-position: 0 -470px ;
    transform: scale(0.7);
    margin-left: 20px;
  }
  .function i.space{
    flex: 5;
  }
  .function i.icon_like{
    justify-content: center;
    background: url('../../static/images/sprite_play.png') no-repeat;
    background-position: 0 -0px ;

    margin-right: 20px;
    transform: scale(0.7);
  }
  .store{
    background-position: 0 -55px !important;
  }
  .Pane{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 40px;
    margin-top: 20px;
  }
  .startTime, .endTime{
    flex: 1;
    color: #fff;
    justify-content: center;
    align-self: center;
  }
  .startTime{
    margin: 0 10px;
  }
  .endTime{
    margin: 0 10px;
  }
  .progress{
    position: relative;
    flex: 5;
    display: flex;
    align-items: center;
  }
  .progress i.total{
    display: inline-block;
    width: 100%;
    height: 3px;
    background-color: #fff;
  }
  .progress i.current{
    position: absolute;
    display: inline-block;
    width:0%;
    height: 3px;
    background-color: #31c37c;
    z-index:9;
  }
  #play{
    width: 100%;
    height: 0;
  }
</style>
