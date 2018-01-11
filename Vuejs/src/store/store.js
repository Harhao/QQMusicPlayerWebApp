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
      singerAvartar:"https://y.gtimg.cn/music/photo_new/T002R300x300M000001qYTzY2oyDyZ.jpg?max_age=2592000",
      songName:"说散就散",
      singer:"袁娅维",
      songSrc:"http://dl.stream.qqmusic.qq.com/C400003vUjJp3QwFcd.m4a?guid=895385890&vkey=1C910A6B64F39DE253B5E08E9C700E6C5CBD2AE6633539EBF81DD4D49BC95D1C0D41DCB87C8C30243FCB54703C9049B7501AD7D7BEE55B99&uin=&fromtag=999"
    },{
      singerAvartar:"https://y.gtimg.cn/music/photo_new/T002R300x300M000001qYTzY2oyDyZ.jpg?max_age=2592000",
      songName:"体面",
      singer:"袁娅维",
      songSrc:"http://dl.stream.qqmusic.qq.com/C400000Md1wq0vnwzE.m4a?fromtag=38&vkey=81AEB6C6D7085AB4AA793BCF2D864A19D621D5D982A0C6F6E58BFF40553BDD711355610E02D9394EE8DC4045E29C863BBFD70B25CAD9EF05&guid=895385890"
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
          singerAvartar:"https://y.gtimg.cn/music/photo_new/T002R300x300M000001qYTzY2oyDyZ.jpg?max_age=2592000",
          songName:data[i].title,
          singer:data[i].singer[0].name,
          songSrc:data[i].url
        };
        state.songPlayList.push(singleSong);
      }
    }
  }
})
export default store
