# QQMusicPlayer是基于Vuejs全家桶vue、vue-router、vuex、axios搭建的高仿QQ音乐移动端
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
    - 项目是用Nodejs的Express框架提供的API接口，在仓库里面有个项目是api的可以直接下载，也可以自行模拟虚拟假数据,git地址是git@github.com:laternkiwis/api.git
    - 运行没有打包版本命令,然后在浏览器地址栏中输入http://localhost:8080/：
    ```
    npm run dev
    ```
    - 如果需要运行打包过的版本直接运行以下命令，这个命令会在根目录生成一个dist的目录，该目录就是打包好的项目文件:
    ```
    npm run build
    ```
- 运行效果如下所示:
    - 运行效果:
        - ![index](https://github.com/laternkiwis/QQMusicPlayerWebApp/blob/master/Vuejs/screenshot/1.gif)
    - detail页面运行效果:
        - ![detail](https://github.com/laternkiwis/QQMusicPlayerWebApp/blob/master/Vuejs/screenshot/1.PNG) ![rotate](https://github.com/laternkiwis/QQMusicPlayerWebApp/blob/master/Vuejs/screenshot/2.PNG)
        - ![global](https://github.com/laternkiwis/QQMusicPlayerWebApp/blob/master/Vuejs/screenshot/3.PNG) ![store](https://github.com/laternkiwis/QQMusicPlayerWebApp/blob/master/Vuejs/screenshot/4.PNG)
        - ![toplist](https://github.com/laternkiwis/QQMusicPlayerWebApp/blob/master/Vuejs/screenshot/5.jpg) ![list](https://github.com/laternkiwis/QQMusicPlayerWebApp/blob/master/Vuejs/screenshot/6.jpg)
        - ![history](https://github.com/laternkiwis/QQMusicPlayerWebApp/blob/master/Vuejs/screenshot/7.jpg) ![search](https://github.com/laternkiwis/QQMusicPlayerWebApp/blob/master/Vuejs/screenshot/5.PNG)
- 运行如出现异常，可能是一下原因:
    - 1.无法点击tab选项，主要是采用的是用数组模拟播放队列，audio加载的一直都是数组的首个元素；而QQ音乐的媒体音乐v_key值是有时间限制的，一段时间过后就会失效，所以如果出现异常，自己可以上QQ音乐查看一首歌的媒体文件路径并填充在store.js文件的相应数组里面或者写一个中间代理请求，如果发现异常就请求真实QQ音乐平台上的V_key值进行填充。
    - 2.如果出现添加歌曲到播放列表，然后点击下一首，一直报出错误。原因是同上面一样，V_key值失效了。所以可以更新store.js的Mkey值。然后就可以成功运行。
> 开发过程中，可以了解很多Vuejs学习文档之中不太了解的知识点，例如，使用ref避免了我们直接通过DOM进行操作。还有vuejs的transition过度组件的使用实际意义，在web开发过程之中，想display：none这样突发性的转换会破坏CSS3的动画效果。所以采用官方的transition动画可以很好解决问题。vuex全局状态管理器可以为我们提供一个比较方便访问的类似database。在使用router-view进行路由匹配的时候不要在外面加<keep-alive>，这样会自动缓存数据，无法根据传入的数据对模板自动重载；在使用vuejs的列表渲染的时候，加上Key(K大写)可以使列表顺序改变，模板会自动重新渲染，否则，不会出现改变的效果。对于音乐上的歌词解释感觉费力，请求的歌词接口，返回的数据需要正则进行处理才可以真正使用在项目之中。其实比较纠结的是vuejs开发的路由加载问题，一直在想，vuejs开发单页应用，在一个页面里面动态加载其他的组件页面，会不会对页面造成很大的负载。对项目使用fastclick模块，可以避免移动端的点击延迟300ms效果；其次就是使用vuejs的懒加载模块，懒加载图片，提高用户体验，不会出现加载过程之中的空白情况。

