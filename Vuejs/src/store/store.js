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
      mid:'123',
      singerAvartar:"https://y.gtimg.cn/music/photo_new/T002R300x300M000001qYTzY2oyDyZ.jpg?max_age=2592000",
      songName:"说散就散",
      singer:"袁娅维",
      songSrc:"http://dl.stream.qqmusic.qq.com/C400003vUjJp3QwFcd.m4a?vkey=E2CA0056E83D3A0CFDD4E8BE4473F04AAF84379942CD59CF26C3A6B951617517B5CBAC55C03BE694082A2894F5957DF7E54AFB7F82BE7572&guid=895385890&uin=0&fromtag=66"
    },{
      mid:'124',
      singerAvartar:"https://y.gtimg.cn/music/photo_new/T002R300x300M000001qYTzY2oyDyZ.jpg?max_age=2592000",
      songName:"体面",
      singer:"袁娅维",
      songSrc:"http://dl.stream.qqmusic.qq.com/C400000Md1wq0vnwzE.m4a?fromtag=38&vkey=ECC40B2D3B466C8785BDAD4BF3CA27DC51A04CDFCA0C73ADE9B5DFC99BCE4C43412D4FAD0FF0C8BB6843D663037758642B661D129A8BB76E&guid=895385890"
    },{
      mid:'123',
      singerAvartar:"https://y.gtimg.cn/music/photo_new/T002R300x300M000001qYTzY2oyDyZ.jpg?max_age=2592000",
      songName:"说散就散",
      singer:"袁娅维",
      songSrc:"http://dl.stream.qqmusic.qq.com/C400003vUjJp3QwFcd.m4a?vkey=E2CA0056E83D3A0CFDD4E8BE4473F04AAF84379942CD59CF26C3A6B951617517B5CBAC55C03BE694082A2894F5957DF7E54AFB7F82BE7572&guid=895385890&uin=0&fromtag=66"
    },{
      mid:'124',
      singerAvartar:"https://y.gtimg.cn/music/photo_new/T002R300x300M000001qYTzY2oyDyZ.jpg?max_age=2592000",
      songName:"体面",
      singer:"袁娅维",
      songSrc:"http://dl.stream.qqmusic.qq.com/C400000Md1wq0vnwzE.m4a?fromtag=38&vkey=ECC40B2D3B466C8785BDAD4BF3CA27DC51A04CDFCA0C73ADE9B5DFC99BCE4C43412D4FAD0FF0C8BB6843D663037758642B661D129A8BB76E&guid=895385890"
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
