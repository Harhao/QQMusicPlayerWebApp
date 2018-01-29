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
      songSrc:"http://dl.stream.qqmusic.qq.com/C400002ZKnKQ34rbZu.m4a?guid=9476304470&vkey=F875439BBA95881DDEFDAAF6F95FC9C14521AB486636391F54DE5F20C250AD94AAA60C8900566C32DEDF039B0D33A6A890F891D79E3B24F5&uin=0&fromtag=999"
    }],
    prevPlayList:[],
    searchHistory:[],
    Mkey:"guid=9476304470&vkey=F875439BBA95881DDEFDAAF6F95FC9C14521AB486636391F54DE5F20C250AD94AAA60C8900566C32DEDF039B0D33A6A890F891D79E3B24F5&uin=0&fromtag=999"
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
