var gulp = require('gulp'),
  del = require('del'),
  merge = require('merge-stream'),
  imageminPngquant = require('imagemin-pngquant'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  concatCss = require('gulp-concat-css'),
  minifyCSS = require('gulp-minify-css'),
  rename = require("gulp-rename"),
  inlinesource = require('gulp-inline-source'),
  minifyHTML = require('gulp-minify-html'),
  ghPages = require('gulp-gh-pages');

// Move JPGs Into Dist
gulp.task('images', function() {
  var portfolio = gulp.src('./src/img/*.jpg')
    .pipe(gulp.dest('./dist/img'));
  var pizza = gulp.src('./src/views/images/*.jpg')
    .pipe(gulp.dest('./dist/views/images'));

  return merge(portfolio, pizza);
});

// Optimize PNGs
gulp.task('pngs', function () {
  var portfolio = gulp.src('./src/img/*.png')
    .pipe(imageminPngquant({quality: '65-80', speed: 4})())
    .pipe(gulp.dest('./dist/img'));
  var pizza = gulp.src('./src/views/images/*.png')
    .pipe(imageminPngquant({quality: '65-80', speed: 4})())
    .pipe(gulp.dest('./dist/views/images'));

  return merge(portfolio, pizza);
});

// Concatenate And Minify JavaScript
gulp.task('scripts', function(){
  var portfolio = gulp.src('./src/js/perfmatters.js')
    .pipe(rename('perfmatters.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
  var pizza = gulp.src('./src/views/js/main.js')
    .pipe(rename('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/views/js'));

  return merge(portfolio, pizza);
});

// Concatenate And Minify CSS
gulp.task('styles', function(){
  var style = gulp.src('./src/css/style.css')
    .pipe(rename('style.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist/css'));
  var print = gulp.src('./src/css/print.css')
    .pipe(rename('print.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist/css'));
  var pizzastyle = gulp.src('./src/views/css/*.css')
    .pipe(concatCss('pizza.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist/views/css'));

  return merge(style, print, pizzastyle);
});

// Minify HTML
gulp.task('html', function() {
  var opts = {
    conditionals: true,
    spare:true
  };

  var portfolio = gulp.src('./src/*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('dist'));
  var pizza = gulp.src('./src/views/pizza.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./dist/views'));

  return merge(portfolio, pizza);
});

// Inline Sources in HTML
gulp.task('inline', ['build'], function() {
  var portfolio = gulp.src('./dist/*.html')
    .pipe(inlinesource())
    .pipe(gulp.dest('dist'));
  var pizza = gulp.src('./dist/views/pizza.html')
    .pipe(inlinesource())
    .pipe(gulp.dest('./dist/views'));

  return merge(portfolio, pizza);
});

// Combine into Build Task
gulp.task('build', [
  'images',
  'pngs',
  'scripts',
  'styles',
  'html'
  ]);

// DEFAULT: Build then Inline
gulp.task('default', [
  'build',
  'inline'
  ]);

// Publish to gh-pages
gulp.task('deploy', function() {
  return gulp.src('./dist/**/**/*')
  .pipe(ghPages());
});

// Clean Dist Folder
gulp.task('clean', function (cb) {
  del(['./dist/**/**/*'], cb);
});