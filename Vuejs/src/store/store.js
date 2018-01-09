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
      singerAvartar:"https://y.gtimg.cn/music/photo_new/T001R150x150M000003Nz2So3XXYek.jpg?max_age=2592000",
      songName:"十年",
      singer:"陈奕迅",
      songSrc:"http://dl.stream.qqmusic.qq.com/C400001OyHbk2MSIi4.m4a?guid=895385890&vkey=CB2876985C0D31AC71753ABAF5550AC3E0CD8BC4EFD487F861C2F7E97BB8DC08D1B866DA925E3FF6A4665C3B99A56AC607B2C97BE8D87D25&uin=&fromtag=999"
    },{
      singerAvartar:"https://y.gtimg.cn/music/photo_new/T001R150x150M000003Nz2So3XXYek.jpg?max_age=2592000",
      songName:"红玫瑰",
      singer:"陈奕迅",
      songSrc:"http://dl.stream.qqmusic.qq.com/C40000481cWs2JgWe0.m4a?guid=895385890&vkey=D4FFBA9CA38755BB14EB8B3BDBF583AC1AD58CA432C1DAACAE0B2D0C48AFE8B7F440D278233D7568BBD22DA721367071C72626AC2B15F245&uin=&fromtag=999"
    },{
      singerAvartar:"https://y.gtimg.cn/music/photo_new/T001R150x150M000003Nz2So3XXYek.jpg?max_age=2592000",
      songName:"好久不见",
      singer:"陈奕迅",
      songSrc:"http://dl.stream.qqmusic.qq.com/C400004M3yRr3kOfnS.m4a?guid=895385890&vkey=4D02AD21150F3C55B1F8055BFDB831794652F37370C414D353F1C1D634718D7C6415FE8F1B688BD45405A2715B2F6CF143ADB067595BF6BA&uin=&fromtag=9"
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
