/**
 * Created by my on 17/2/23.
 */

var gulp = require('gulp');
var config = gulp.config;
var livereload = require('gulp-livereload');

function devJs() {
    return gulp.src([config.modules+'/**/route.js', config.modules+'/index.js'])
        .pipe(gulp.dest('./routes'))
}

function devHtml() {
    return gulp.src([config.modules+'/**/*.html'])
        .pipe(gulp.dest('./views'));
}

function devLess() {

}

function devRes() {
    return gulp.src(config.res)
        .pipe()
}

function devFile(file, fileType) {
    var destMap = {
        '.html': './views',
        '.js': './routes'
    };

    destMap[fileType] &&  gulp.src(file, {base: './src/modules'})

        .pipe(gulp.dest(destMap[fileType]))

    ;
}

function devCommon() {
    return gulp.src('./src/common/**/*.js')
        .pipe(gulp.dest('./res'))
}

module.exports = {
    devJs: devJs,
    devHtml: devHtml,
    devLess: devLess,
    devRes: devRes,
    devFile: devFile
};