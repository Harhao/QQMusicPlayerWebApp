
<template>
  <div id="search">
  	<div id="searchWord">
      <form action="" method="GET" id="searchSong">
        <input id="keyWord" type="text" name="song" @blur="blurHandle" @focus="focusHandle" placeholder="搜索歌曲、歌单、专辑"/>
        <input type="button" value="取消" id="submit" @click="sendData"/>
      </form>
      <div id="hotKey">
        <h3>热门搜索</h3>
        <router-link v-for="item in data.hotKeys" :to="{path:item.href}" tag="a">{{item.title}}</router-link>
      </div>
      <history></history>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import history from './history.vue';
export default {
  components:{
    history
  },
 	data(){
 		return{
      data:{
        hotKeys:[{
          title:"梦想的声音第二季",
          href:"https://y.qq.com/m/act/voiceofdreams2/v3/index.html?ADTAG=myqq"
        },{
          title:"DJ舞曲(华语)系列5 DJ ",
          href:"https://y.qq.com/m/act/voiceofdreams2/v3/index.html?ADTAG=myqq"
        },{
          title:"紫",
          href:"https://y.qq.com/m/act/voiceofdreams2/v3/index.html?ADTAG=myqq"
        },{
          title:"野子",
          href:"https://y.qq.com/m/act/voiceofdreams2/v3/index.html?ADTAG=myqq"
        },{
          title:"男人不该让女人流泪",
          href:"https://y.qq.com/m/act/voiceofdreams2/v3/index.html?ADTAG=myqq"
        },{
          title:"DJ",
          href:"https://y.qq.com/m/act/voiceofdreams2/v3/index.html?ADTAG=myqq"
        }]
      }
 		};
 	},
  methods:{
    sendData(event){
      event.target.style.display="none";
    },
    focusHandle(event){
      document.getElementById('submit').style.display="inline-block";
      document.getElementById('hotKey').style.display="none";
      document.getElementsByClassName('history')[0].style.display="block";
    },
    blurHandle(){
      document.getElementById('hotKey').style.display="block";
      document.getElementsByClassName('history')[0].style.display="none";
      document.getElementById('submit').style.display="none";
    }
  }
}
</script>

<style>
body{
  margin:0;
  overflow: hidden;
}
#searchWord{
  width: 96%;
  height: 50px;
  padding: 2%;
  background-color: #f4f4f4;
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
</style>
