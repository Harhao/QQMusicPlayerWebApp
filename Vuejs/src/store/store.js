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
      mid:'109121301',
      singerAvartar:"https://y.gtimg.cn/music/photo_new/T002R150x150M000001vVSiX0qzGgo.jpg?max_age=2592000",
      songName:"风继续吹",
      singer:"伊正",
      songSrc:"http://dl.stream.qqmusic.qq.com/C400000ImWRb0lodP3.m4a?fromtag=38&vkey=D6E1666D14645C58E0DA5F7B45ACB7A9C37728B95E653D59BEB3D107EAAD876F0FAA3E20F3E28AFEE9190F8611A0B6F9EF53185FB483C2E0&guid=1337312690"
    },{
      mid:'4962990',
      singerAvartar:"https://y.gtimg.cn/music/photo_new/T006R300x300M00000333So02drvak.jpg?max_age=2592000",
      songName:"七里香",
      singer:"周杰伦",
      songSrc:"http://dl.stream.qqmusic.qq.com/C400002ZKnKQ34rbZu.m4a?guid=1337312690&vkey=2DCD375C091308B078852F758F4F365F7B8704A641C9EDA28F72B250A5C39D0C78B38169F3D07A5AF2AED7FDC3F1B0A104A4FF24B51B12DF&uin=&fromtag=999"
    }],
    prevPlayList:[],
  },
  mutations:{
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
