var gulp = require('gulp'), 
    less = require('gulp-less'),//less编译器
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),//css压缩配置
 haml=require('gulp-haml');//haml压缩配置
 minifyhtml=require('gulp-minify-html');//html压缩配置
  prettify = require('gulp-html-prettify');
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),//js压缩配置
    imagemin = require('gulp-imagemin'),//图片压缩配置
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),//js代码检查配置
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');
	
var html_files_url="F:/html_project_release/poster/";	
var css_files_url="F:/html_project_release/poster/css/";
var img_files_url="F:/html_project_release/poster/images/";		
var js_files_url="F:/html_project_release/poster/scripts/";	

gulp.task('default',function(){
    gulp.run('html','haml','minjs','js', 'less','css','img');
});
gulp.task('html',function(){

   gulp.src(['*.html'])
   .pipe(minifyhtml())
   .pipe(gulp.dest(html_files_url));
});
gulp.task('haml',function(){

  gulp.src(['*.haml']) // Matches 'client/js/somedir/somefile.js' and resolves `base` to `client/js/`
  .pipe(haml())
  .pipe(prettify())
  .pipe(gulp.dest(html_files_url));

});
 
gulp.task('js',function(){

  gulp.src(['scripts/*.js','!scripts/*.min.js']) // Matches 'client/js/somedir/somefile.js' and resolves `base` to `client/js/`
  .pipe(uglify())
  .pipe(gulp.dest(js_files_url));

});
gulp.task('minjs',function(){

  gulp.src(['scripts/*.min.js']) // Matches 'client/js/somedir/somefile.js' and resolves `base` to `client/js/`
  .pipe(gulp.dest(js_files_url));

});
gulp.task('css',function(){
  gulp.src(['css/*.css'])
  .pipe(minifycss())
  .pipe(gulp.dest(css_files_url));
   
});
gulp.task('less',function(){
  gulp.src(['css/reset.less','css/*.less'])
  .pipe(less())
  .pipe(concat('mobile.css'))
  .pipe(minifycss())
  .pipe(gulp.dest(css_files_url));
   
});
gulp.task('img',function(){
  gulp.src(['images/*.png','images/*.gif','images/*.jpg','images/**/*.png','images/**/*.gif','images/**/*.jpg'])
  .pipe(imagemin())
  .pipe(gulp.dest(img_files_url));
   
});