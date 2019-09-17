## QQMusicPlayer(搭建的高仿QQ音乐移动端)
[![Build Status](https://travis-ci.com/Harhao/QQMusicPlayerWebApp.svg?branch=V2)](https://travis-ci.com/Harhao/QQMusicPlayerWebApp)
[![](https://img.shields.io/badge/vue-2.5.2-brightgreen)](https://img.shields.io/badge/vue-2.5.2-brightgreen)
[![](https://img.shields.io/badge/vuex-v3.0.1-brightgreen)](https://img.shields.io/badge/vuex-v3.0.1-brightgreen)
[![](https://img.shields.io/badge/vue--router-v3.0.1-brightgreen)](https://img.shields.io/badge/vue--router-v3.0.1-brightgreen)
### 使用方法：
- 通过git的方式下载源码，git地址如下所示:
```
git@github.com:laternkiwis/QQMusicPlayer.git
```
- 然后在根目录下的client下，运行以下命令安装依赖项目文件:
```
npm install
```
- 项目歌曲解析是用Nodejs的Express框架提供的API接口，可以直接在server目录下运行以下命令，启动服务
```
npm start
```
- 启动项目：
```
npm run dev
```
- 运行效果如下所示:
- ![index](https://github.com/laternkiwis/QQMusicPlayerWebApp/blob/master/Vuejs/screenshot/1.gif)
- 运行如出现异常原因:
> 无法点击tab选项，主要是采用的是用数组模拟播放队列，audio加载的一直都是数组的首个元素；而QQ音乐的媒体音乐v_key值是有时间限制的，一段时间过后就会失效，所以如果出现异常，自己可以上QQ音乐查看一首歌的媒体media文件路径并填充在store.js文件的相应字段里面(v_key和songSrc的最新值)，如果发现异常就请求真实QQ音乐平台上的V_key值进行填充。
如果出现添加歌曲到播放列表，然后点击下一首，一直报出错误。原因是同上面一样，V_key值失效了。所以可以更新store.js的Mkey值。然后就可以成功运行。
## License
[MIT](http://opensource.org/licenses/MIT)
