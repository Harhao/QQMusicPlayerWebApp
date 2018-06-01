
<template>
  <div id="search">
  	<div id="searchWord">
      <form action="##" method="get" id="searchSong" @submit="sub" @keyup.enter="search">
        <input id="keyWord" ref="keyWord" type="text" name="keyword"  @focus="focusHandle" placeholder="搜索歌曲、歌单、专辑"/>
        <input type="button" value="取消" ref="submit" id="submit" @click="sendData"/>
      </form>
      <div ref="hotKey" id="hotKey">
        <h3>热门搜索</h3>
        <router-link v-for="(item,index) in hotkey" v-if="index<8" tag="a" :to="{path:''}" :key="index">{{item.k}}</router-link>
      </div>
      <div class="searchResult">
        <ul>
          <li v-for="(item,index) in searchResult" v-if="index<8" @click="playSong" :key="index">
            <i class="icon"></i>
            <span :data-index="index">{{item.songname}}-{{item.singer[0].name}}</span>
          </li>
        </ul>
      </div>
      <history id="history" ></history>
    </div>
    <div id="tips" ref="tips" class="hide">
      <span><i>已经添加到播放列表</i></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import history from './history.vue';
  export default {
      components:{
        history
      },
      created() {
        //do something after creating vue instance
        this.$http.get("http://localhost:3000/hotkey").then((response)=>{
          this.hotkey=response.data.data.hotkey;
        }).catch((err)=>{
          console.log(err);
        });
      },
     	data(){
     		return{
            hotkey:[],
            searchResult:[],
     		};
     	},
      methods:{
        playSong(e){
          const selectIndex=e.target.getAttribute("data-index");
          const item=this.searchResult[selectIndex];
          let data=new Array();
          const song={
            mid:item.songid,
            title:item.songname,
            singer:item.singer[0].name,
            singerAvartar:"http://imgcache.qq.com/music/photo_new/T002R300x300M000"+item.albummid+".jpg",
            songSrc:"http://dl.stream.qqmusic.qq.com/C400"+item.songmid+".m4a?"+this.$store.state.Mkey
          };
          data.push(song);
          this.$store.commit("addSong",data);
          this.$refs.tips.classList.remove("hide");
          setTimeout(()=>{
            this.$refs.tips.classList.add("hide");
          },1000);
        },
        sub(e){
          e.preventDefault();
          e.stopPropagation();
          return false;
        },
        search(e){
          e.preventDefault();
          e.stopPropagation();
          const keyword=this.$refs.keyWord.value;
          this.$store.commit("addSearchWord",keyword);
          this.$http.get("http://localhost:3000/search?keyword="+keyword).then((response)=>{
            this.searchResult=response.data.data.song.list;
          }).catch((err)=>{
            console.log(err);
          });
        },
        sendData(event){
          event.target.style.display="none";
          this.$refs.hotKey.style.display="block";
          document.getElementById("history").style.display="none";
          this.searchResult=[];
        },
        focusHandle(event){
          this.$refs.submit.style.display="inline-block";
          this.$refs.hotKey.style.display="none";
          document.getElementById("history").style.display="block";

        },
        blurHandle(){

          // this.$refs.submit.style.display="none";

        }
      }
    }
</script>

<style scoped>
body{
  margin:0;
  overflow: hidden;
}
#searchWord{
  width: 96%;
  height: 50px;
  padding: 2%;
  background-color: #f4f4f4;
  position: relative;
}
form#searchSong{
  display: flex;
  width: 100%;
  height: 50px;
  background-color: #fff;
}
#keyWord{
  display: inline-block;
  width:85%;
  height: 50px;
  border: none;
  color: #555;
  outline:none;
  font-size: 0.8em;
  border-radius: 20px;
  text-indent: 10%;
  background: url('../../static/images/search.png') no-repeat;
  background-size: 18px 18px;
  background-position: 8px center;
}
  #submit{
    /*display: inline-block;*/
    display: none;
    width: 15%;
    height: 50px;
    border: none;
    background: none;
    background-color:#f4f4f4 ;

  }
  #hotKey{
    width: 100%;
    height: 200px;
    text-align: center;
    display:inline-block;
  }

#hotKey h3{
  color:rgba(0,0,0,.6);
  margin-bottom: 8px;
  text-align: left;
  font-style: normal;
}
#hotKey a{
  font-size: 14px;
  padding: 5px 10px;
  height: 35px !important;
  line-height: 35px !important;
  color: #000;
  border: 1px solid rgba(0,0,0,.6);
  border-radius: 99px;
  word-break: keep-all;
  margin-bottom: 10px;
  margin-right: 14px;
  margin-top: 10px;
  text-decoration: none;
}
#hotKey a:nth-child(2){
  color: #fc4524;
  border-color: #fc4524;
}
ul{
  position:absolute;
  z-index:99;
  width: 100%;
  padding:0;
  margin: 0;
}
li{
  position: relative;
  list-style: none;
  height: 55px;
  vertical-align: top;
  background:#fff;
}
.icon{
  position: absolute;
  display: inline-block;
  width:45px;
  height: 45px;
  background:url("../../static/images/search_sprite.png") no-repeat;
  background-position: 0 0;
  transform: scale(0.5);
  top: 5px;
  left:2px;
}
li span{
  display: inline-block;
  width:80%;
  height: 55px;
  line-height: 55px;
  color: #555;
  margin-left: 50px;
}
#tips{
  position:fixed;
  z-index: 999;
  left: 0;
  right: 0;
  top:0;
  botom:0;
  width: 100%;
  height: 100%;
  background: none;
  display: flex;
  align-items: center;
}
.hide{
  display: none !important;
}
#tips span{
  display: flex;
  align-items: center;
  width: 50%;
  height: 20%;
  background: #000;
  opacity: 0.9;
  color: #fff;
  position: absolute;
  left: 50%;
  top:50%;
  margin-top:-25%;
  margin-left:-25%;
  border-radius: 5px;
  text-align: center;
  vertical-align: center;
}
#tips span i{
  font-style: normal;
  margin: 0 auto;
}
</style>
