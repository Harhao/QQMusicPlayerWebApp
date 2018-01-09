
<template>
  <div id="tabContent">
    <ul>
      <li v-for="item in lists" @click="redirect(item.src)">
            <div class="image">
              <img v-bind:src="item.source"/>
              <span class="erMai">{{item.count}}</span>
            </div>
            <div class="content1">
              <h3>{{item.title}}</h3>
              <div v-for="(songItem,index) in item.famous"><span class="index">{{index+1}}</span> {{songItem.songName}}-{{songItem.author}}</div>
            </div>
            <div class="icon1">
              <span></span>
            </div>
      </li>
    </ul>
  </div>
</template>

<script  type="text/ecmascript-6">
export default {
  data(){
    return {
      lists:[{
        "source":"https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_4_300_212449089.jpg?max_age=2592000",
        "title":"安利XS·巅峰榜·流行指数",
        "count":"2000万",
        "src":"https://y.qq.com/w/toplist.html?ADTAG=myqq&from=myqq&channel=10007100&id=4&type=top",
        "famous":[{
          "songName":"凤凰于飞 (Live)",
          "author":"林俊杰"
        },{
          "songName":"躲猫猫",
          "author":"TF-BOY"
        },{
          "songName":"一人饮酒醉 (Live)",
          "author":"华晨宇"
        }]

      },{
        "source":"https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_26_300_212444165.jpg?max_age=2592000",
        "title":"安利XS·巅峰榜·流行指数",
        "count":"2000万",
        "src":"/#/comment",
        "famous":[{
          "songName":"凤凰于飞 (Live)",
          "author":"林俊杰"
        },{
          "songName":"躲猫猫",
          "author":"TF-BOY"
        },{
          "songName":"一人饮酒醉 (Live)",
          "author":"华晨宇"
        }]

      },{
        "source":"https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_27_300_212656017.jpg?max_age=2592000",
        "title":"安利XS·巅峰榜·流行指数",
        "count":"2000万",
        "src":"/#/comment",
        "famous":[{
          "songName":"凤凰于飞 (Live)",
          "author":"林俊杰"
        },{
          "songName":"躲猫猫",
          "author":"TF-BOY"
        },{
          "songName":"一人饮酒醉 (Live)",
          "author":"华晨宇"
        }]

      },{
        "source":"https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_30_300_212634056.jpg?max_age=2592000",
        "title":"安利XS·巅峰榜·流行指数",
        "count":"2000万",
        "src":"/#/comment",
        "famous":[{
          "songName":"凤凰于飞 (Live)",
          "author":"林俊杰"
        },{
          "songName":"躲猫猫",
          "author":"TF-BOY"
        },{
          "songName":"一人饮酒醉 (Live)",
          "author":"华晨宇"
        }]

      },{
        "source":"https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_30_300_212634056.jpg?max_age=2592000",
        "title":"安利XS·巅峰榜·流行指数",
        "count":"2000万",
        "src":"/#/comment",
        "famous":[{
          "songName":"凤凰于飞 (Live)",
          "author":"林俊杰"
        },{
          "songName":"躲猫猫",
          "author":"TF-BOY"
        },{
          "songName":"一人饮酒醉 (Live)",
          "author":"华晨宇"
        }]

      },{
        "source":"https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_30_300_212634056.jpg?max_age=2592000",
        "title":"安利XS·巅峰榜·流行指数",
        "count":"2000万",
        "src":"/#/comment",
        "famous":[{
          "songName":"凤凰于飞 (Live)",
          "author":"林俊杰"
        },{
          "songName":"躲猫猫",
          "author":"TF-BOY"
        },{
          "songName":"一人饮酒醉 (Live)",
          "author":"华晨宇"
        }]

      },{
        "source":"https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_30_300_212634056.jpg?max_age=2592000",
        "title":"安利XS·巅峰榜·流行指数",
        "count":"2000万",
        "src":"/#/comment",
        "famous":[{
          "songName":"凤凰于飞 (Live)",
          "author":"林俊杰"
        },{
          "songName":"躲猫猫",
          "author":"TF-BOY"
        },{
          "songName":"一人饮酒醉 (Live)",
          "author":"华晨宇"
        }]

      },{
        "source":"https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_30_300_212634056.jpg?max_age=2592000",
        "title":"安利XS·巅峰榜·流行指数",
        "count":"2000万",
        "src":"/#/comment",
        "famous":[{
          "songName":"凤凰于飞 (Live)",
          "author":"林俊杰"
        },{
          "songName":"躲猫猫",
          "author":"TF-BOY"
        },{
          "songName":"一人饮酒醉 (Live)",
          "author":"华晨宇"
        }]

      },{
        "source":"https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_30_300_212634056.jpg?max_age=2592000",
        "title":"安利XS·巅峰榜·流行指数",
        "count":"2000万",
        "src":"/#/comment",
        "famous":[{
          "songName":"凤凰于飞 (Live)",
          "author":"林俊杰"
        },{
          "songName":"躲猫猫",
          "author":"TF-BOY"
        },{
          "songName":"一人饮酒醉 (Live)",
          "author":"华晨宇"
        }]

      }]
    }

  },
  methods:{
    redirect(src){
      window.location.href=src;
    }
  }
}
</script>

<style scoped>
body{
  margin:0;
}
@media (min-width:320px)and (max-width: 360px) {
  .icon1 span{
    display: none !important;
  }
  #tabContent {
    width: 100%;
    display: flex;
    height: auto;
    flex-direction: column;
    background: #ddd;
  }
  #tabContent ul {
    width: 100%;
    height: auto;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  .image {
    display: flex;
    flex: 3;
    position: relative;
  }

  .image span {
    position: absolute;
    color: #fff;
    box-sizing: border-box;
    font-size: 0.6rem;
    width: 97px;
    height: 24px;
    line-height: 24px;
    bottom: 0;
    left: 0;
    margin-left: 3px;
    margin-bottom: -3px;
    padding-left: 26px;
    background-size: 24px 60px;
    background: url('../../static/images/list_sprite.png') no-repeat;
    background-position: 0 -100px;
  }

  .content1 {
    display: flex;
    flex: 6;
    flex-direction: column;
    padding: 2%;
  }

  .content1 h3 {
    font-size: 1em;
    font-weight: normal;
    padding: 0;
    margin: 0;
    height: 24px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .content1 div {
    color: #000;
    font-size: 0.5rem;
    height: 21px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .image img {
    /*width: 100px;*/
    /*height: 100px;*/
    width: 100%;
    height: auto;
  }

  #tabContent li {
    width: 98%;
    height: 100px;
    padding: 0;
    display: flex;
    flex-direction: row;
    margin: 2% 1% 0 1%;
    background: #fff;
  }

  .icon1 {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }

  .icon1 span {
    display: inline-block;
    width: 6px;
    height: 6px;
    border-right: 1px solid #000;
    border-top: 1px solid #000;
    border-left: none;
    border-bottom: none;
    -webkkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
}
@media (min-width:361px) {
  .icon1 span{
    display: block;
  }
  #tabContent {
    width: 100%;
    display: flex;
    height: auto;
    flex-direction: column;
    background: #ddd;
  }

  #tabContent ul {
    width: 100%;
    height: auto;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  .image {
    display: flex;
    flex: 3;
    position: relative;
  }

  .image span {
    position: absolute;
    color: #fff;
    box-sizing: border-box;
    font-size: 0.6rem;
    width: 97px;
    height: 24px;
    line-height: 24px;
    bottom: 0;
    left: 0;
    margin-left: 3px;
    margin-bottom: -3px;
    padding-left: 26px;
    background-size: 24px 60px;
    background: url('../../static/images/list_sprite.png') no-repeat;
    background-position: 0 -100px;
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }

  .content1 {
    display: flex;
    flex: 6;
    flex-direction: column;
    padding: 2%;
  }

  .content1 h3 {
    font-size: 1em;
    font-weight: normal;
    padding: 0;
    margin: 0;
    height: 24px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .content1 div {
    color: #000;
    font-size: 0.5rem;
    height: 21px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .image img {
    /*width: 100px;*/
    /*height: 100px;*/
    width: 100%;
    height: auto;
  }

  #tabContent li {
    width: 98%;
    height: 100px;
    padding: 0;
    display: flex;
    flex-direction: row;
    margin: 2% 1% 0 1%;
    background: #fff;
  }

  .icon1 {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }

  .icon1 span {
    display: inline-block;
    width: 6px;
    height: 6px;
    border-right: 1px solid #000;
    border-top: 1px solid #000;
    border-left: none;
    border-bottom: none;
    -webkkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
}

</style>
