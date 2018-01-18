<template>
    <div class="toplist" ref="toplist" @scroll="scrollFixed">
        <div id="listHeader">
            <div id="bg">
              <img v-if="data.topinfo['pic']"  v-lazy="data.topinfo['pic']"/>
              <img v-else  v-lazy="data.topinfo['pic_album']"/>
            </div>
            <div id="albumMask"></div>
            <div class="topHeader">
                <div class="musicLogo"></div>
                <div class="tipTitle">
                  <span>QQ音乐</span>
                  <span>打开APP收藏、下载</span>
                </div>
                <div id="open">打开</div>
            </div>
            <div class="albumSection">
              <div class="albumImg">
                <img v-lazy="data.topinfo['pic_album']"/>
              </div>
              <div id="albumContent">
                <h3>{{data.topinfo.ListName}}</h3>
                <p>第一周</p>
                <p>{{data["update_time"]}}</p>
              </div>
            </div>
            <div class="bottomHeader">
              <div id="allPlay"><button id="getAll"  @click="addAllSong">全部播放</button></div>
            </div>
        </div>
        <div class="listData" >
            <h3>排行榜共{{data["total_song_num"]}}首</h3>
            <ul>
              <li v-for="(item,index) in songlist">
                <span class="index">{{index+1}}</span>
                <div class="songList">
                  <div>
                    <span :data-index="index"  @click="addSong">{{item.data.songname}}-{{item.data.singer[0].name}}</span>
                  </div>
                </div>
              </li>
            </ul>
        </div>
        <div id="tips" ref="tips" class="hide">
          <span><i>已经添加到播放列表</i></span>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default{
        components: {},
        data(){
          return{
            id:"",
            data:'',
            startY:'',
            songlist:[],
          };
        },
        created(){
            this.id=this.$route.query.id;
            this.$http.get("http://localhost:3000/toplist?id="+this.id).then((response)=>{
              this.data=response.data;
              this.songlist=response.data.songlist;
            }).catch((err) => {
              console.log(err);
            });

        },
        methods:{
          scrollFixed(e){
            // console.log(e.target.scrollTop);
          },
          addSong(e) {
            this.$refs.tips.classList.remove('hide');
            const clickIndex=e.target.getAttribute("data-index");
            const list=this.songlist[clickIndex];
            let data=[];
            const dataItem={
              singerAvartar:this.data.topinfo['pic_album'],
              title:list.data.songname,
              singer:list.data.singer[0].name,
              mid:list.data.songid,
              songSrc:"http://dl.stream.qqmusic.qq.com/C400"+list.data.songmid+".m4a?"+this.$store.state.Mkey
            };
            data.push(dataItem);
            this.$store.commit("addSong",data);
            setTimeout(()=>{
              this.$refs.tips.classList.add('hide');
            },1000);
          },
          addAllSong(){
            this.$refs.tips.classList.remove('hide');
            let data=[];
            for (let i=0;i<this.songlist.length;i++){
              const dataItem={
                singerAvartar:this.data.topinfo['pic_album'],
                title:this.songlist[i].data.songname,
                singer:this.songlist[i].data.singer[0].name,
                mid:this.songlist[i].data.songid,
                songSrc:"http://dl.stream.qqmusic.qq.com/C400"+this.songlist[i].data.songmid+".m4a?"+this.$store.state.Mkey
              };
              data.push(dataItem);
            }
            this.$store.commit("addSong",data);
            setTimeout(()=>{
              this.$refs.tips.classList.add('hide');
            },1000);
          }
        },
        computed:{

        }
    }
</script>
<style scoped>
.toplist{
    position:fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top:0;
    bottom: 0;
    right: 0;
    z-index:999;
    overflow-y: scroll;
    overflow-x: hidden;
    background-color:#fff;
  }
#listHeader{
    width:100%;
    height:auto;
    position:relative;
}
#bg{
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -2;
  filter: blur(5px);

}
#bg img{
  display: inline-block;
  width: 100%;
  height: 100%;

}
#albumMask{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index:-1;
  background-color: #000;
  opacity: 0.8;

}
.topHeader{
    display:flex;
    width:100%;
    height:48px;
    background:rgba(0,0,0,.2);
    /*background-color: none;*/
    color:#fff;
}
  .musicLogo{
    display: inline-block;
    width:72px;
    height: 70px;
    margin-right: 3px;
    background-image:url('../../static/images/sprite_play.png');
    background-repeat: no-repeat;
    background-position: 0 -600px;
    -webkit-transform: scale(0.5);
    align-self: center;
  }
.tipTitle{
  flex: 1;
  display: flex;
  flex-direction:column;
  font-size: 14px;
  align-self: center;
  margin-left: -8px;
}
#open{
  width: 54px;
  height: 24px;
  border: 1px solid #fff;
  text-align: center;
  align-self: center;
  border-radius: 28%;
  margin: 0 15px;
}
  .albumSection{
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top:17px;
    padding: 0 16px;
    overflow: hidden;
  }
  .albumImg{
    position: relative;
    width: 125px;
    height: 125px;
    margin-right: 10px;
    overflow: hidden;
  }
  .albumImg img{
    position: absolute;
    display: inline-block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  #albumContent{
    flex: 1;
    height: 100%;
    color: #fff;
  }
  .listData h3{
    font-size: 16px;
    font-weight: normal;
    color: #777;
    padding:15px;
    margin: 0 5px;

  }
  .bottomHeader{

    width: 100%;
    height: 84px;
  }
  #allPlay{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
  #getAll{
    width: 170px;
    height: 40px;
    overflow: hidden;
    text-align: left;
    font-size: 16px;
    color: #fff;
    border-radius: 20px;
    background: #31c27c;
    border: none;
    outline: none;
    align-self: center;
  }
  #getAll:before{
    content: "";
    display: block;
    height: 0;
    width: 0;
    margin-right: -3px;
    border-color: transparent transparent transparent #fff;
    border-width: 7px 11px;
    border-style: solid;
    border-radius: 2px;
    float: left;
    margin-top: 3px;
    margin-left: 40px;
  }
  .listData ul{
    width: 100%;
    padding: 0;
    margin: 0;

  }
  .listData li:nth-child(1) .index,.listData li:nth-child(2) .index,.listData li:nth-child(3) .index{
    color: #FF400B;
  }
  .listData li{
    width: 100%;
    height: 60px;
    display: flex;
    flex: column;
    list-style: none;
  }
  .songList div{
    width: 100%;
    line-height: 60px;
    display: flex;
    flex-direction: column;
    align-self: center;
    color: # #2c2c35;
    overflow: hidden;
  }
  .songList{
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  .index{
    width: 45px;
    text-align: center;
    align-self: center;
  }
  .listData{
    -webkit-transition: transform 0.6 ease-in-out;
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
