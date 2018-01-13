<template>
    <div class="toplist">{{params}}</div>
</template>
<script type="text/ecmascript-6">
    export default{
        components: {},
        created(){
            this.params=this.$route.query.data;
            console.log(this.params);
        },
        data(){
          return{
            params:""
          };
        },
        computed:{
          
        }
    }
</script>
<style scoped>
.toplist{
    position:fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top:0;
    bottom: 0;
    right: 0;
    z-index:999;
    overflow: hidden;
    background-color:#fff;
  }

  
</style>
