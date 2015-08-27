var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    concatCss = require('gulp-concat-css'),
    minifyCSS = require('gulp-minify-css'),
    minifyHTML = require('gulp-minify-html'),
    rename = require("gulp-rename");

// Minify HTML
gulp.task('html', function() {
    var opts = {
        conditionals: true,
        spare:true
    };

    return gulp.src(['*.html', 'views/.html'])
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('dist/'));
});

// Concatenate And Minify JavaScript
gulp.task('scripts', function(){
    gulp.src('js/perfmatters.js')
        .pipe(rename('perfmatters.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'));
    gulp.src('views/js/main.js')
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'));
});

// Concatenate And Minify CSS
gulp.task('styles', function(){
    gulp.src('css/style.css')
        .pipe(rename('style.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css/'));
    gulp.src('css/print.css')
        .pipe(rename('print.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css/'));
    gulp.src(['views/css/*.css'])
        .pipe(concatCss('pizza.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('default', ['html', 'scripts', 'styles']);