<template>
    <div class="mask" :class="{hidden:finished}">
      <div class="loading" >
        <img src="../../static/images/loading.png"/>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default{
        components: {},
        props:["finish"],
        data(){
          return{};
        },
        computed:{
          finished(){
            console.log(this.finish);
            return this.finish;
          }
        }
    }
</script>
<style scoped>
  .mask{
    position: absolute;
    top:0;
    left:0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    display: flex !important;
    justify-content: center;
    background-color: #fff;
    opacity: 0.9;
    margin:0;
    padding:0;
  }
  .hidden{
    display: none !important;
  }
  .loading{
    width: 50px;
    height: 50px;
    display: flex;
    align-self: center;
    justify-content: center;
    -webkit-animation: rotate 1s linear infinite;

  }
  @keyframes rotate {
    from {-webkit-transform: rotate(0deg);}
    to {-webkit-transform: rotate(360deg);}
  }
</style>
