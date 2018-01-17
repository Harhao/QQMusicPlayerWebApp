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
      mid:'125',
      singerAvartar:"https://y.gtimg.cn/music/photo_new/T006R300x300M00000333So02drvak.jpg?max_age=2592000",
      songName:"七里香",
      singer:"周杰伦",
      songSrc:"http://dl.stream.qqmusic.qq.com/C400004Z8Ihr0JIu5s.m4a?guid=1337312690&vkey=9A3459C34A4593DEAB41065A61CFDE41BE5BED695D059D199783F316F62B7414B57C1C9E8B2F9E181E284D87B9E3C2014E14DB35655A3162&uin=&fromtag=999"
    },{
      mid:'124',
      singerAvartar:"https://y.gtimg.cn/music/photo_new/T002R300x300M000001qYTzY2oyDyZ.jpg?max_age=2592000",
      songName:"体面",
      singer:"袁娅维",
      songSrc:"http://dl.stream.qqmusic.qq.com/C400000Md1wq0vnwzE.m4a?fromtag=38&vkey=35A6DEE575B9FAD8EFF4578571A12927AE5AE91EA2CBC89E75D2E5FE63C18BA902FF716AB2A43548D96319B263B2E4087250E40FE6D79B12&guid=1337312690"
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
