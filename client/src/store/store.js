/**
 * Created by Administrator on 2017/12/18 0018.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store =new Vuex.Store({

  //定义状态
  state:{
    toggle:false,
    songPlayList:[{
      mid:'4962990',
      singerAvartar:"https://y.gtimg.cn/music/photo_new/T006R300x300M00000333So02drvak.jpg?max_age=2592000",
      songName:"七里香",
      singer:"周杰伦",
      songSrc:"http://183.60.131.50/amobile.music.tc.qq.com/C400002ZKnKQ34rbZu.m4a?guid=5203810144&vkey=9F8BF54F9AC3168931D5979B9107A5D2F93073D065BFAD2DAB0463CC6723ED9C2ABAE752EE4CA0B3F8CCD96AF90B6127E90609C425B25E2D&uin=0&fromtag=38"
    }],
    prevPlayList:[],
    searchHistory:[],
    Mkey:"guid=5203810144&vkey=9F8BF54F9AC3168931D5979B9107A5D2F93073D065BFAD2DAB0463CC6723ED9C2ABAE752EE4CA0B3F8CCD96AF90B6127E90609C425B25E2D&uin=0&fromtag=38"
  },
  mutations:{
    addSearchWord(state,word){
      state.searchHistory.push(word);
    },
    clearHistory(state){
      for(var i=0;i<state.searchHistory.length;i++){
        state.searchHistory.pop();
      }
    },
    changeTog(state,toggle){
      state.toggle=toggle;
    },
    nextSong(state,num){
      var prevSong=state.songPlayList.shift();
      state.prevPlayList.push(prevSong);
    },
    prevSong(state,num){

      var stackTop=state.prevPlayList.pop();
      state.songPlayList.unshift(stackTop);
    },
    changeList(state,index){

      var song=state.songPlayList.splice(index,1);
      state.songPlayList.unshift(song[0]);
    },
    addSong(state,data){
      for(var i=0;i<data.length;i++){
        var singleSong={
          singerAvartar:data[i].singerAvartar,
          songName:data[i].title,
          singer:data[i].singer,
          songSrc:data[i].songSrc,
          mid:data[i].mid
        };
        state.songPlayList.push(singleSong);
      }
    }
  }
})
export default store
