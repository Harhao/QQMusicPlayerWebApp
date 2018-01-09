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
      songSrc:"http://dl.stream.qqmusic.qq.com/C400003vUjJp3QwFcd.m4a?guid=1337312690&vkey=41E1C2A7593054D6AE053B6DEEBB1AF35C40509EDE5D3625684A85656FDCC7F4C0E203FB08298C886C25E60030188D3CD7D7586371BDF001&uin=&fromtag=999"
    },{
      singerAvartar:"https://y.gtimg.cn/music/photo_new/T002R300x300M000001qYTzY2oyDyZ.jpg?max_age=2592000",
      songName:"说散就散",
      singer:"袁娅维",
      songSrc:"http://dl.stream.qqmusic.qq.com/C400003vUjJp3QwFcd.m4a?guid=1337312690&vkey=41E1C2A7593054D6AE053B6DEEBB1AF35C40509EDE5D3625684A85656FDCC7F4C0E203FB08298C886C25E60030188D3CD7D7586371BDF001&uin=&fromtag=999"
    },{
      singerAvartar:"https://y.gtimg.cn/music/photo_new/T002R300x300M000001qYTzY2oyDyZ.jpg?max_age=2592000",
      songName:"说散就散",
      singer:"袁娅维",
      songSrc:"http://dl.stream.qqmusic.qq.com/C400003vUjJp3QwFcd.m4a?guid=1337312690&vkey=41E1C2A7593054D6AE053B6DEEBB1AF35C40509EDE5D3625684A85656FDCC7F4C0E203FB08298C886C25E60030188D3CD7D7586371BDF001&uin=&fromtag=999"
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
      state.songPlayList.unshift(song);
      console.log(state.songPlayList);
    }
  }
})
export default store
