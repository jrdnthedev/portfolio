const { src, dest, watch, series } = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

browserSync.init({
    injectChanges: true,
    server: "./"
});

function compileSass(cb) {
 return src('sass/main.scss')
 .pipe(sass({}))
 .pipe(autoprefixer())
 .pipe(dest('css'))
 .pipe(browserSync.stream());
 cb();
}

function watchHtml(cb) {
  return src('**/*.html')
  .pipe(browserSync.stream());
  cb();
}

function reload(cb){
  return browserSync.stream();
  cb();
}


exports.default = function(){
  //compile and watch
  watch('sass/**/*.scss',compileSass);
  watch('**/*.html',watchHtml);
  // watch('js/**/*.js',reload);
};
