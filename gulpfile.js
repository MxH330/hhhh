// task   创建一个任务
// src   获取文件
// watch  监听文件
// dest  输出文件

// 引入gulp模块
const gulp = require('gulp'),
htmlmin = require('gulp-htmlmin'),
uglify = require('gulp-uglify'),
connect = require('gulp-connect'),
cssmin = require('gulp-cssmin'),
imagemin = require('gulp-imagemin'),
babel = require('gulp-babel');
//压缩 html文件
gulp.task('html',function(){
    var options = {
        collapseWhitespace: true, //清除空格，压缩文件
        removeComments:true, // 清除所有得注释
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src('huaweiStore/shop_list.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist'));
})
//压缩css
gulp.task('css', function () {
    gulp.src('huaweiStore/**/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('dist'));
});
//压缩js
gulp.task('js',function(){
    gulp.src('huaweiStore/**/*.js')
    .pipe(babel({
        presets:['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
})
// 压缩图片
gulp.task('images', () =>
    gulp.src('huaweiStore/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);
// 同时执行多个任务

gulp.task('watch', function() {
    // 监听app下面所有的html文件, 如果文件修改就执行html任务
    gulp.watch("huaweiStore/**/*.html", ['html']);
    gulp.watch("huaweiStore/**/*.js", ['js']);
})

// 执行静态文件的压缩和编译
gulp.task('build', ['html', 'js','css','images']);

// 开启本地服务器
gulp.task('connect', function() {
    connect.server({
        root: 'dist',
        port: 8888,
        livereload: true // 开启页面刷新
    });
});

gulp.task('default', ['build', 'connect', 'watch']);