
<template>
  <div id="search">
  	<div id="searchWord">
      <form action="##" method="get" id="searchSong" @submit="sub" @keyup.enter="search">
        <input id="keyWord" ref="keyWord" type="text" name="keyword" @blur="blurHandle" @focus="focusHandle" placeholder="搜索歌曲、歌单、专辑"/>
        <input type="button" value="取消" ref="submit" id="submit" @click="sendData"/>
      </form>
      <div ref="hotKey" id="hotKey">
        <h3>热门搜索</h3>
        <router-link v-for="(item,index) in hotkey" v-if="index<8" tag="a" :to="{path:''}">{{item.k}}</router-link>
      </div>
      <div class="searchResult">
        <ul>
          <li v-for="(item,index) in searchResult" v-if="index<8">
            <i class="icon"></i>
            <span>{{item.songname}}-{{item.singer[0].name}}</span>
          </li>
        </ul>
      </div>
      <history id="history" :word="hist"></history>
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
            hist:""
     		};
     	},
      methods:{
        sub(e){
          e.preventDefault();
          e.stopPropagation();
          return false;
        },
        search(e){
          e.preventDefault();
          e.stopPropagation();
          const keyword=this.$refs.keyWord.value;
          this.hist=keyword;
          this.$http.get("http://localhost:3000/search?keyword="+keyword).then((response)=>{
            this.searchResult=response.data.data.song.list;
          }).catch((err)=>{
            console.log(err);
          });
        },
        sendData(event){
          event.target.style.display="none";
        },
        focusHandle(event){
          this.$refs.submit.style.display="inline-block";
          this.$refs.hotKey.style.display="none";
          document.getElementById("history").style.display="block";

        },
        blurHandle(){
          this.$refs.hotKey.style.display="block";
          document.getElementById("history").style.display="none";
          this.$refs.submit.style.display="none";
          this.searchResult=[];
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
}
li span{
  display: inline-block;
  width:80%;
  height: 55px;
  line-height: 55px;
  color: #555;
  margin-left: 50px;
}
</style>
