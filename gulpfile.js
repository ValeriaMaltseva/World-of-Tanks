'use strict';

var gulp = require('gulp'),
    rename = require("gulp-rename"),
    minifyCSS = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('css', function () {
    return gulp.src('./src/css/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 22 versions', 'ie 8', 'ie 9'],
            cascade: false
        }))
        .pipe(minifyCSS())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('images', function () {
    return gulp.src('./src/image/**/*')
        .pipe(gulp.dest('dist/image'));
});

gulp.task('default', ['css', 'images'], function () {
    gulp.watch('./src/css/**/*.css', ['css']);
    gulp.watch('./src/image/**/*', ['images']);
});








