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
      songSrc:"http://dl.stream.qqmusic.qq.com/C400002ZKnKQ34rbZu.m4a?guid=957707267&vkey=A31FA931F2D4AE48FC9262A169955162673D2882402CF3D4E5FE40F32CD0035C97A18C3BEEA3AE0864D62ED9A8E0DDDC0853D532C1B055AB&uin=&fromtag=999"
    }],
    prevPlayList:[],
    searchHistory:[],
    Mkey:"guid=957707267&vkey=5C23405C26338354E28E61E4679EFE31BCE634C3BC1F4141131DA3C42E45F9C2F20CEA658F41B279C328AA7EB7219CB2B889FCC73918580D&uin=&fromtag=999"
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
