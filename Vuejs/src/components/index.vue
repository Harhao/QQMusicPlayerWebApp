<template>
	<div class="wrapper">
		<swiper :options="swiperOption" ref="mySwiperA">
			<swiper-slide v-for="item in imgArray">
				<img class="player" v-bind:src="item.source"/>
			</swiper-slide>
		</swiper>
		<div class="lists" v-for="item in musicMenu">
			<div class="title">{{item.title}}</div>
			<div class="listItem">
				<div class="itemContainer" v-for="music in item.musicItem">
            <a :href="music.href">
              <div class="displayImg">
                <img v-bind:src="music.img"/>
                <span class="icon"></span>
              </div>
              <div class="content">{{music.desc}}</div>
            </a>
				</div>
			</div>
		</div>
		<Mfooter></Mfooter>
	</div>
</template>
<script type="text/ecmascript-6">
	import 'swiper/dist/css/swiper.css'
	import {swiper,swiperSlide} from "vue-awesome-swiper"
	import Mfooter from '@/components/my-footer'
	export default{
		components: {
            	swiper,
            	swiperSlide,
            	Mfooter
        },
		data(){
			return {
        swiperOption: {
				// 所有配置均为可选（同Swiper配置）
					//direction: 'vertical',
    				loop: true,
    				autoplay:2000,
				},
				imgArray:[{
					source:"https://y.gtimg.cn/music/photo_new/T003R720x288M000002n6Zxs2rVEHO.jpg?max_age=2592000"
				},{
					source:"https://y.gtimg.cn/music/photo_new/T003R720x288M000002mHeKg3VEVvq.jpg?max_age=2592000"
				},{
					source:"https://y.gtimg.cn/music/photo_new/T003R720x288M000003sAJCh1ynM0x.jpg?max_age=2592000"
				},{
					source:"https://y.gtimg.cn/music/photo_new/T003R720x288M000000B8wHB1Si6Iz.jpg?max_age=2592000"
				},{
					source:"https://y.gtimg.cn/music/photo_new/T003R720x288M000002ZjiJg0jKc1w.jpg?max_age=2592000"
				}],
				musicMenu:[{
					"title":"电台",
					"musicItem":[{
						"img":"https://y.gtimg.cn/music/photo/radio/track_radio_199_13_1.jpg?max_age=2592000",
						"desc":"热歌",
            "href":"http://localhost:8080/player"
					},{
						"img":"https://y.gtimg.cn/music/photo/radio/track_radio_199_13_1.jpg?max_age=2592000",
						"desc":"热歌",
            "href":""
					}]
				},{
					"title":"热门歌单",
					"musicItem":[{
						"img":"https://y.gtimg.cn/music/photo_new/T006R300x300M00000333So02drvak.jpg?max_age=2592000",
						"desc":"催泪大杀器！盘点演唱会经典万人大合唱",
            "href":"https://y.qq.com/w/taoge.html?ADTAG=myqq&from=myqq&channel=10007100&id=2646688496"
					},{
						"img":"https://y.gtimg.cn/music/photo_new/T006R300x300M0000013j8zs1jRnLQ.jpg?max_age=2592000",
						"desc":"纳尼？这些华语歌手竟然会唱日语歌！",
            "href":"https://y.qq.com/w/taoge.html?ADTAG=myqq&from=myqq&channel=10007100&id=1144416825"
					}]
				},{
					"title":"动听音乐",
					"musicItem":[{
						"img":"https://y.gtimg.cn/music/photo_new/T006R300x300M000004bFmjW2PXSqF.jpg?max_age=2592000",
						"desc":"精选内地十大民谣歌手代表作",
            "href":"https://y.qq.com/w/taoge.html?ADTAG=myqq&from=myqq&channel=10007100&id=2043041547"
					},{
						"img":"https://y.gtimg.cn/music/photo_new/T006R300x300M0000032Ubid2ses0e.jpg?max_age=2592000",
						"desc":"2016Billboard嘻哈榜精选",
            "href":"https://y.qq.com/w/taoge.html?ADTAG=myqq&from=myqq&channel=10007100&id=2040362185"
					}]
				},{
					"title":"动漫",
					"musicItem":[{
						"img":"https://y.gtimg.cn/music/photo_new/T006R300x300M000000xFtbN1l8ye8.jpg?max_age=2592000",
						"desc":"浮光掠影：ACG纯音乐赏析合辑",
            "href":"https:////y.qq.com/w/taoge.html?ADTAG=myqq&from=myqq&channel=10007100&id=1723063372"
					},{
						"img":"https://y.gtimg.cn/music/photo_new/T006R300x300M000000xFtbN1l8ye8.jpg?max_age=2592000",
						"desc":"trip-hop单曲大推荐",
            "href":"https://y.qq.com/w/taoge.html?ADTAG=myqq&from=myqq&channel=10007100&id=3482605622"
					}]
				}]
            }
		}
	}
</script>
<style >
  body{
    padding: 0;
    margin: 0;
  }
	.wrapper{
		margin-top:2px;
	}
	.player{
		width:100%;
		height:auto;
	}
	.lists{
		display:flex;
		flex-direction:column;
		margin-top:-2px;
		background-color:#ddd;
	}
	.title{
		font-size: 16px;
	    color: #000;
	    padding:10px;
	    font-weight: normal;
	}
	.listItem{
		display:flex;
		flex-direction:row;
		flex:1;
		padding-bottom:8px;
	}
	.itemContainer{
		position:relative;
		padding:0 10px;
    width:100%;
	}
	.icon{
		position:absolute;
		bottom:55px;
		right:15px;
		display:inline-block;
		width:24px;
		height:24px;
		background:url('../../static/images/list_sprite.png') no-repeat;
		background-size: 24px 60px;
	}
	.displayImg{
		width:100%;
	}
	.displayImg>img{
		width:100%;
		height:auto;
	}
	.content{
		background-color:#fff;
		font-family:"微软雅黑";
		font-size:14px;
		padding:5px;
		height:36px;
	}
	#footer{

		width:100%;
		height:200px !important;
		background-color:#ddd;
	}
	#footer{
		display:flex;
		flex-direction:column;
		justify-content:center;
	}
	#footer div{
		align-self:center;
		justify-content:center;
		margin-top:15px;
	}

	#PCWeb a{
		color:#000;
	}
	#logo a{
		display:inline-block;
		width:86px;
		height:24px;
		background:url('../../static/images/logo.png') no-repeat;
		background-size: cover;
	}
	#copyright a,#contact a{
		font-size:10px;
	}
	a{
		/*color:#555;*/
		text-decoration:none;
		/*border-bottom:none !important;*/
    /*造成导航栏消失的元凶*/
		/*text-indent: -9999px;*/
	}
</style>
