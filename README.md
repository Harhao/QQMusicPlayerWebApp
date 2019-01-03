# QQMusicPlayer是基于Vuejs全家桶vue、vue-router、vuex、axios、express 搭建的高仿QQ音乐移动端
- 使用方法：
    - 通过git的方式下载源码，git地址如下所示:
    ```
    git@github.com:laternkiwis/QQMusicPlayer.git
    ```
    - 或者直接使用下载zip包的方式进行下载
    - 然后在文件的根目录下，即是vuejs的文件夹下，运行以下命令:
    ```
     npm install
    ```
    - 项目是用Nodejs的Express框架提供的API接口，可以直接在·server目录下运行以下命令，启动服务
    ```
     npm start
    ```
    - 运行vue单页应用,然后在浏览器地址栏中输入http://localhost:8080/：
    ```
    npm run dev
    ```
    - 如果需要运行打包过的版本直接运行以下命令，这个命令会在根目录生成一个dist的目录，该目录就是打包好的项目文件:
    ```
    npm run build
    ```
- 运行效果如下所示:
    - 运行效果:
        - ![index](https://github.com/laternkiwis/QQMusicPlayerWebApp/blob/master/Vuejs/screenshot/1.gif) ![index](https://github.com/laternkiwis/QQMusicPlayerWebApp/blob/master/Vuejs/screenshot/index.PNG)
    - detail页面运行效果:
        - ![detail](https://github.com/laternkiwis/QQMusicPlayerWebApp/blob/master/Vuejs/screenshot/1.PNG) ![rotate](https://github.com/laternkiwis/QQMusicPlayerWebApp/blob/master/Vuejs/screenshot/2.PNG)
        - ![global](https://github.com/laternkiwis/QQMusicPlayerWebApp/blob/master/Vuejs/screenshot/3.PNG) ![store](https://github.com/laternkiwis/QQMusicPlayerWebApp/blob/master/Vuejs/screenshot/4.PNG)
        - ![toplist](https://github.com/laternkiwis/QQMusicPlayerWebApp/blob/master/Vuejs/screenshot/5.jpg) ![list](https://github.com/laternkiwis/QQMusicPlayerWebApp/blob/master/Vuejs/screenshot/6.jpg)
        - ![history](https://github.com/laternkiwis/QQMusicPlayerWebApp/blob/master/Vuejs/screenshot/7.jpg) ![search](https://github.com/laternkiwis/QQMusicPlayerWebApp/blob/master/Vuejs/screenshot/5.PNG)
- 运行如出现异常，可能是一下原因:
    - 1.无法点击tab选项，主要是采用的是用数组模拟播放队列，audio加载的一直都是数组的首个元素；而QQ音乐的媒体音乐v_key值是有时间限制的，一段时间过后就会失效，所以如果出现异常，自己可以上QQ音乐查看一首歌的媒体media文件路径并填充在store.js文件的相应字段里面(v_key和songSrc的最新值)，如果发现异常就请求真实QQ音乐平台上的V_key值进行填充。
    - 2.如果出现添加歌曲到播放列表，然后点击下一首，一直报出错误。原因是同上面一样，V_key值失效了。所以可以更新store.js的Mkey值。然后就可以成功运行。
> QQ音乐首页出现更新，已经把QQ音乐状态更新到最新。
## License
[MIT](http://opensource.org/licenses/MIT)
