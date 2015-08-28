var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    concatCss = require('gulp-concat-css'),
    minifyCSS = require('gulp-minify-css'),
    minifyHTML = require('gulp-minify-html'),
    rename = require("gulp-rename"),
    merge = require('merge-stream');

// Move Images Into Dist
gulp.task('images', function() {
    var portfolio = gulp.src('img/*')
        .pipe(gulp.dest('dist/img'));
    var pizza = gulp.src('views/images/*')
        .pipe(gulp.dest('dist/views/img'));

    return merge(portfolio, pizza);
});

// Minify HTML
gulp.task('html', function() {
    var opts = {
        conditionals: true,
        spare:true
    };

    var portfolio = gulp.src('*.html')
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('dist'));
    var pizza = gulp.src('views/pizza.html')
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('dist/views'));

    return merge(portfolio, pizza);
});

// Concatenate And Minify JavaScript
gulp.task('scripts', function(){
    var portfolio = gulp.src('js/perfmatters.js')
        .pipe(rename('perfmatters.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
    var pizza = gulp.src('views/js/main.js')
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/views/js'));

    return merge(portfolio, pizza);
});

// Concatenate And Minify CSS
gulp.task('styles', function(){
    var style = gulp.src('css/style.css')
        .pipe(rename('style.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css'));
    var print = gulp.src('css/print.css')
        .pipe(rename('print.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css'));
    var pizzastyle = gulp.src('views/css/*.css')
        .pipe(concatCss('pizza.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/views/css'));

    return merge(style, print, pizzastyle);
});

gulp.task('default', ['images', 'html', 'scripts', 'styles']);