<template>
    <div id="musicPlayer" >

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
        <div id="avatar" @click="toggleAvatar">
          <img class="img" :class="{Rotation:this.toggle}" :src="songPlayList[0].singerAvartar"/>
          <span class="largeCir">
            <span class="smallCir"></span>
          </span>
        </div>
        <div id="lyricsCon" class="hide" @click="togglelyricsCon">
            <div id="custom" @touchstart="start" @touchmove="move" @touchend="end">
              <p v-for="(item,index) in lyric" :data-index="index">
                <span v-for="(row,index) in item" :data-time="index">{{row}}</span>
              </p>
            </div>
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
      <loading :finish="downloaded"></loading>
      <div id="mask"></div>
      <div id="glass"><img :src="songPlayList[0].singerAvartar"/></div>
    </div>
</template>
<script type="text/ecmascript-6">
  import globalList from './globalList.vue';
  import loading from './loading.vue'
  export default{
    components:{
      globalList,
      loading
    },
    data(){
      return {
        duration:'00:00',
        currentTime:'00:00',
        show:false,
        count:0,
        startY:0,
        moveY:0,
        endY:0,
        downloaded:false
      }
    },
    computed:{
      toggle(){
        return this.$store.state.toggle;
      },
      songPlayList(){
        return this.$store.state.songPlayList;
      },
      lyric(){
          let globalArr=[];
          this.$http.get("http://localhost:3000/lyrics?id="+this.songPlayList[0].mid).then((response)=>{
              let lyric=response.data.lyric;
              let tmpLyric=this.formatLyric(lyric);
              let Arr=tmpLyric.split('\n');

              for(let i=0;i<Arr.length;i++){
                let row=Arr[i].split(']');
                let obj={};
                if(row[2]){
                  let time=row[1].split('[')[1];
                  let second=Math.floor(time.split(':')[1]);
                  let minute=parseInt(time.split(':')[0]);
                  time=minute*60+second;
                  obj[time]=row[2];
                  globalArr.push(obj);
                }else if(!row[1]){
                  continue;
                }else{
                  let time=row[0].split('[')[1];
                  let second=Math.floor(time.split(':')[1]);
                  let minute=parseInt(time.split(':')[0]);
                  time=second+minute*60;
                  obj[time]=row[1];
                  globalArr.push(obj);
                }

              }

          }).catch((e)=>{
            console.log(e);
          });
          return globalArr;
      }
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
        let Con=document.getElementById('custom');
        let Spans=Con.getElementsByTagName('span');

        for(var i=0;i<Spans.length;i++){
          var attr=Spans[i].getAttribute('data-time');
          if(parseInt(audio.currentTime)==attr){
            let index=Spans[i].parentNode.getAttribute('data-index');
            if(index>0){
              Spans[index].classList.add('currentLyc');
              Spans[index-1].classList.remove('currentLyc');
              Con.style.top=(-35)*index+'px';
            }
          }
        }
      },
      getDuration(){
        var audio=document.getElementById('play');
        var duration=this.formatTime(audio.duration,audio);
        this.downloaded=true;
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
        }else{
          localStorage.setItem(this.songPlayList[0].songName,this.songPlayList[0]);
          event.target.classList.add('store');
        }

      },
      toggleAvatar(){
        	document.getElementById("avatar").classList.add('hide');
        	document.getElementById("lyricsCon").classList.remove('hide');

      },
      togglelyricsCon(){
      	document.getElementById("lyricsCon").classList.add('hide');
      	document.getElementById("avatar").classList.remove('hide');
      },
      formatLyric(lyric){
          var str=lyric.replace(/&#58;/g,":");
          str=str.replace(/&#46;/g,'.');
          str=str.replace(/&#10;/g,'\n');
          str=str.replace(/&#\d+;/g,'');
          return str;
      },
      addToContent(obj){
        var div=document.getElementById('custom');
        for(var i=0;i<obj.length;i++){
          for(var key in obj[i]){
            var node=document.createElement('p');
            node.style["text-align"]="center";
            node.style.color="#fff";
            node.innerHTML=obj[i][key];
            div.appendChild(node);
          }
        }
      },
      start(event){
        this.startY=event.touches[0].pageY;
      },
      move(event){
        event.preventDefault();
        this.moveY=event.touches[0].pageY;
        let distance=this.moveY-this.startY;
        let top=document.getElementById('custom').style.top;
        document.getElementById('custom').style.top=parseFloat(top)+distance+'px';
      },
      end(event){
        this.endY=event.changedTouches[0].pageY;
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
    /* background: url('https://y.gtimg.cn/music/photo_new/T001R150x150M000003Nz2So3XXYek.jpg?max_age=2592000') no-repeat; */
    /* background-size: cover; */
    /* -webkit-transition-origin: bottom left; */
    -webkit-animation:changeIn 0.3s ease-in-out;
  }

  @keyframes changeIn {
    from {
      /* -webkit-transform:scale(0); */
      -webkit-transform: scale(0, 0);
    -webkit-transform-origin: bottom left;

    }
    to{
      /* -webkit-transform:scale(1); */
      -webkit-transform: scale(1, 1);
      -webkit-transform-origin: top right;
    }
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
  #avatar,#lyricsCon{
    position: relative;
    display: flex;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    align-self: center;
    justify-content: center;
    justify-items: center;
  }
  #lyricsCon{
  	min-height:250px;
    max-height: 250px;
    overflow-y: hidden;
    flex-direction: column;
    border-radius: 0;
  }
  ::-webkit-scrollbar{
    display:none;
  }
  #custom{
    position: absolute;
    top: 0;
    /* height:250px;
    overflow-y: scroll; */
    -webkit-transition:top 0.3s ease-in-out;
    left:0;
    right: 0;

  }
  #custom p span{
    display: inline-block;
    width: 100%;
    color: #fff;
    font-size: 16px;
    font-family: "微软雅黑";
    text-align: center !important;
  }
  .currentLyc{
    color: #31c37c !important;
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
    min-height:250px;
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
  .hide{
    display: none !important;
  }
  #glass{
    position: absolute;
    top:0;
    left:0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    z-index: -100;

  }
    #glass img{
      width: 100vw;
      height: 100vh;
      -webkit-filter: blur(10px);
      transform: scale(1.5);

    }
    #mask{
      position: absolute;
      top:0;
      left:0;
      right: 0;
      bottom: 0;
      width: 100vw;
      height: 100vh;
      background-color: #000;
      opacity: 0.7;
      z-index: -99;
    }
</style>
