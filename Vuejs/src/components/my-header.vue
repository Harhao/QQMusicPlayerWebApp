
<template>
 <div id="nav">
  <div id="header">
    <i class="musicLogo">QQ音乐</i>
    <router-link :to="{path:'/download',}" class="downloadApp">下载APP</router-link>
 </div>
 <div class="tabMenu">
      <router-link class="menu" :to="{path:'/recomment'}">推荐</router-link>
      <router-link class="menu " :to="{path:'/list'}">排行榜</router-link>
      <router-link class="menu " :to="{path:'/search'}">搜索</router-link>

  </div>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
  data:function(){
    return {

    }
  },
  methods:{
    addActive:function(){
    }
  }

}
</script>

<style scoped>
#header{
  position:relative;
  width:100%;
  height:44px;
  background-color:#31c27c;
  padding:0;
  margin:0;
  font-family:"微软雅黑";
}
.musicLogo{
  display:inline-block;
  width:90px;
  height:25px;
  color:#fff;
  margin:9px 0 0 10px;
  font-style:normal;
  background-image:url("https://y.gtimg.cn/mediastyle/mobile/yqq_v5/img/logo.png?max_age=19830212&d=20151105145423");
  background-size: 90px 25px;
  background-repeat:no-repeat;
  text-indent: -9999px;
}
.downloadApp{
  position:absolute;
  right:10px;
  top:8px;
  font-size:14px;
  font-style:normal;
  color:#fff;
  height:28px;
  padding:0 12px;
  text-decoration:none;
  background-color:#149c5a;
  border-radius:99px;
  line-height:28px;
}
.tabMenu{
  display:flex;
  flex-direction:row;
  height:40px;
  align-items:center;
  justify-content:center;
}
.tabMenu .menu{
  display:flex;
  color:#222123;
  align-items:center;
  justify-content:center;
  text-decoration:none;
  height:40px;
  flex:1;
}
.router-link-exact-active{
  color:#31c27c !important;
  border-bottom: 2px solid #31c27c;
}
</style>
