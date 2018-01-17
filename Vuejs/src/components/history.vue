<template>
    <div class="history">
      <ul>
        <li v-for="item in historyArr" @click="addToInput">
          <router-link :to="{path:''}">
            <span class="found"></span>
            <span class="historyName">{{item}}</span>
            <span class="del">+</span>
          </router-link>
        </li>
      </ul>
      <div id="clearHistory" @click="clearHistory">
        <p>清除所有记录</p>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props:["word"],
    data(){
      return {
        historyArr:[]
      };
    },
    created() {
      //do something after creating vue instance
      this.historyArr.push(this.word);
    },
    methods:{
      clearHistory(){
        this.historyArr=[];
        this.hide();
      },
      hide(){
        document.getElementsByClassName('history')[0].style.display="none";
      },
      addToInput(event){
        document.getElementById('keyWord').value=event.target.innerText;
        this.hide();
      },

    }
  }
</script>
<style scoped>
  .history{
    position:absolute;
    z-index:98;
    width: 100%;
    height: auto;
    display: none;
  }
  .history ul{
    width: 100%;
    height: auto;
    padding-left: 0;
  }
  .history li{
    list-style: none;
    height: 44px;
  }
  .history li a{
    display: flex;
    width:100%;
    height: 28px;
    color: #000;
    text-decoration: none;
  }
  .history .found{
    flex: 2;
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url('../../static/images/clock_ic.png') no-repeat;
    background-position: left center;
    background-size: 20px 20px;
  }
  .historyName{
    pading-left:3%;
    flex: 4;
  }
  .del{
    text-align: right;
    font-size: 1.2em;
    -webkit-transform: rotate(45deg);
  }
  #clearHistory p{
    color: #31c27c;
    text-align: center;
  }
</style>
