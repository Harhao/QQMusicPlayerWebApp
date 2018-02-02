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
      songSrc:"http://dl.stream.qqmusic.qq.com/C400002ZKnKQ34rbZu.m4a?guid=9476304470&vkey=C7A5ED5AF0F47987EE2E416D2E13972853EF63C7F563D2A830BF72F7BBF327FA4B0F685D4984E615850E81F7742F8023FCEF4E3AF2F59E75&uin=0&fromtag=999"
    }],
    prevPlayList:[],
    searchHistory:[],
    Mkey:"guid=9476304470&vkey=C7A5ED5AF0F47987EE2E416D2E13972853EF63C7F563D2A830BF72F7BBF327FA4B0F685D4984E615850E81F7742F8023FCEF4E3AF2F59E75&uin=0&fromtag=999"
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
