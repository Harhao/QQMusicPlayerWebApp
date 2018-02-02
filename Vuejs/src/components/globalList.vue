<template>
    <div id="globalList">
      <ul>
        <li  v-for="(item,index) in songLists" @click="addToPlay" v-bind:Key="index" >{{item.songName}}-{{item.singer}}<i></i></li>
      </ul>
    </div>
</template>
<script type="text/ecmascript-6">
    import operateFunctions from '../common/musicOperate';
    export default{
        components: {},
        data(){
          return{

          };

        },
        computed:{
          songLists(){
            return this.$store.state.songPlayList;
          }
        },
        methods: {
          addToPlay(event){
            var index=event.target.getAttribute('key');
            this.$store.commit('changeList',index);
            this.play();
          },
          ...operateFunctions
        }
    }
</script>
<style scoped>
  .hide{
    display: none;
  }
  .show{
    display: block;
  }
  #globalList{
    width: 100%;
    height: 0px;
    position: absolute;
    bottom: 0;
    background-color: #080708;
    opacity: 0.8;
    overflow-y: scroll;
    overflow-x: hidden;
    z-index: 999;
  }
  #globalList ul{
    padding: 0;
    margin: 0;
  }
 #globalList li{
    position: relative;
    list-style: none;
    color: #fff;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    box-sizing:border-box;
    padding:5px 15px 5px 25px;
    white-space:nowrap;
    text-overflow:ellipsis;
    font-family: "微软雅黑";
  }
  #globalList li:first-child{
    color: #31c37c;
  }
  #globalList li i{
    position: absolute;
    display: inline-block;
    width: 40px;
    height: 40px;
    background: url("../../static/images/search_sprite.png") no-repeat;
    background-position: center center;
    background-size: contain;
    transform:scale(0.5);
    right: 0;
    top:0;
  }
</style>
