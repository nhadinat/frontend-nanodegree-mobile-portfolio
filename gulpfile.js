var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    concatCss = require('gulp-concat-css'),
    minifyCSS = require('gulp-minify-css'),
    minifyHTML = require('gulp-minify-html');

// Minify HTML
gulp.task('html', function() {
    var opts = {
        conditionals: true,
        spare:true
    };

    return gulp.src(['*.html', 'view/.html'])
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('dist/'));
});

// Concatenate And Minify JavaScript
gulp.task('scripts', function(){
    gulp.src(['js/*.js', 'view/js/*.js'])
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'));
});

// Concatenate And Minify CSS
gulp.task('styles', function(){
    gulp.src(['css/*.css', 'view/css/*.css'])
        .pipe(concatCss('style.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('default', ['html', 'scripts', 'styles']);