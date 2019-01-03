var express = require('express');
var router = express.Router();
var request=require('request');
/* GET home page. */
router.get('/list', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  var date=Date.now();
  request.get("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_="+date,(err,response,body)=>{
      res.json(JSON.parse(response.body));
  });
});
router.get("/toplist",(req,res,next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  var date=Date.now();
  var id=req.query.id;
  request.get("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid="+id+"&_="+date,(err,response,body)=>{
    res.json(JSON.parse(response.body));
  });
});
router.get("/indexlist",(req,res,next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  var date=Date.now();
  var id=req.query.id;
  if(req.query.curIndex){
    var curIndex=req.query.curIndex;
    var opts={
      url:"https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&new_format=1&pic=500&disstid="+id+"&type=1&json=1&utf8=1&onlysong=0&nosign=1&song_begin="+curIndex+"&song_num=15&_="+date,
      headers: {
          "referer":"https://m.y.qq.com/",
          "user-agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",
      }
    };
  }else{
    var opts={
      url:"https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&new_format=1&pic=500&disstid="+id+"&type=1&json=1&utf8=1&onlysong=0&picmid=1&nosign=1&song_begin=0&song_num=15&_="+date,
      headers: {
          "referer":"https://m.y.qq.com/",
          "user-agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",
      }
    };
  }

  request.get(opts,(err,response,body)=>{
    res.json(JSON.parse(response.body));
  });
});


router.get("/home",(req,res,next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  var date=Date.now();
  request.get("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_="+date,(err,response,body)=>{
    res.json(JSON.parse(response.body));
  });
});
router.get("/lyrics",(req,res,next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  var date=Date.now();
  var id=req.query.id;
  var opts={
    url:"https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric.fcg?nobase64=1&musicid="+id+"&songtype=0&callback=jsonp1",
    headers: {
        "referer":"https://m.y.qq.com/",
        "user-agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",
    }
  };
  request.get(opts,(err,response,body)=>{
    var str=response.body.toString();
    str=str.replace(/(^jsonp1\()|(\)$)/g,'');
    res.json(JSON.parse(str));
  });
});
router.get("/hotkey",(req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    var date=Date.now();
    request.get("https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_="+date,(err,response,body)=>{
      res.json(JSON.parse(response.body));
    });
});
router.get("/search",(req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    var date=Date.now();
    var keyword=req.query.keyword;
    keyword=encodeURIComponent(keyword.split("&")[0]);
    request.get("https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w="+keyword+"&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&p=1&remoteplace=txt.mqq.all&_="+date,(err,response,body)=>{
      res.json(JSON.parse(response.body));
    });
});
module.exports = router;
