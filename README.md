### 木易的博客
    开始搭建自己的web 网站了，菜鸟要开始飞了



######2017-2-22
初始化项目，厘订工程结构，以便后期开发；
开发目录为 src
使用 gulp 编译后将路由，模版分别打包到相应的文件夹中;

安装 forever, 便于开发
`npm install forever -g`
然后更改 package.json 中的 `node ./bin/www` 为 `forever ./bin/www`;

使用 `router(app)` 进行路由统一管理
```javascript
// app.js
app.use(cookieParser());
router(app); // 路由统一管理
app.use(express.static(path.join(__dirname, 'res')));
```

#######2017-2-23
配置 livereload
```
//app.js
// 该段代码需加载在 bodyparser() 之前
app.use(require('connect-livereload')({
    port: 35729
}));

// build/task.js
gulp.task('watch', function () {
    livereload.listen({port: 35729})
});

// build/dev-basis.js

    destMap[fileType] &&  gulp.src(file, {base: './src/modules'})
        .pipe(livereload()) // 重新加载相应的文件
        .pipe(gulp.dest(destMap[fileType]));

```
