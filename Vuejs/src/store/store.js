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
      singerAvartar:"https://y.gtimg.cn/music/photo_new/T002R150x150M000001vVSiX0qzGgo.jpg?max_age=2592000",
      songName:"风继续吹",
      singer:"伊正",
      songSrc:"http://dl.stream.qqmusic.qq.com/C400000ImWRb0lodP3.m4a?fromtag=38&vkey=5469A1BAFBF593A94FB797C1A43C0446BF385F26BEDF826789D62A4A5A8E7D0E0489297F782D1B701D731353678D308ED74C4C600CF68293&guid=895385890"
    },{
      mid:'125',
      singerAvartar:"https://y.gtimg.cn/music/photo_new/T006R300x300M00000333So02drvak.jpg?max_age=2592000",
      songName:"七里香",
      singer:"周杰伦",
      songSrc:"http://dl.stream.qqmusic.qq.com/C400002ZKnKQ34rbZu.m4a?guid=1337312690&vkey=EA9B0A5F2CC4FE2C7783C3EC67939EAF1779EB438BD5B16049A5E5FE36E2D65B1B819F2BC994F9D64E109887B42002FF9BC692F6A685CA03&uin=&fromtag=999"
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
      songSrc:"http://dl.stream.qqmusic.qq.com/C400000Md1wq0vnwzE.m4a?guid=895385890&vkey=3BD08405049D36780D42D093F8535D3C922DFBC149F0B4FD3581C9AB3646C89E959B983E075D4F72AEBABD3EEE826E9EF22FCA0D8BD40452&uin=&fromtag=999"
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
