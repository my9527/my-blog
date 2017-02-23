/**
 * Created by my on 17/2/23.
 */

var gulp = require('gulp');
var config = gulp.config;
var runInSequence = require('gulp-sequence');
var del = require('del');
var shelljs = require('shelljs');
var devBasis = require('./dev-basis');
var path = require('path');
var livereload = require('gulp-livereload');
var exec = require('child_process').exec

gulp.task('copy-routes', function () {
    return devBasis.devJs();
});

gulp.task('copy-tmp', function () {
    return devBasis.devHtml();
});

gulp.task('clean', function () {
   return del(['./views/**/*.*', './routes/**/*.*']);
});

gulp.task('server', function () {
    exec('npm start');
    // shelljs.exec('npm start')
});

gulp.task('watch:modules', function () {
    gulp.watch("src/modules/**", function (e) {
        var fileType = path.extname(e.path) || "";
        var _module = path.relative('./src/modules', e.path);
        var module = _module.split("\\")[0] || "";
        if(!fileType || !module){
            return console.log("Not found the module");
        }
        return devBasis.devFile(e.path, fileType);
    })
        // .pipe(livereload());
});

gulp.task('watch', function () {
    livereload.listen({port: 35729})
});

gulp.task('reload', function () {
    gulp.watch(['./views/**/*', './routes/**/*.*', './routes/*.*'], function (e) {
        gulp.src(e.path)
            .pipe(livereload())
    })

})

gulp.task('dev', runInSequence('clean', 'copy-tmp', 'copy-routes', 'server','watch', 'watch:modules', 'reload'))