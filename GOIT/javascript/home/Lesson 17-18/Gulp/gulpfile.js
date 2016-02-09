'use strict';


	var gulp = require('gulp'),
	concatCss = require('gulp-concat-css');
	minifyCss = require('gulp-minify-css');

gulp.task('concat-css', function() {
    return gulp.src(['css/carousel.css','css/style.css'])
    .pipe(concatCss("total.css"))
    .pipe(gulp.dest('build/css/'));
});

gulp.task('minify-css', function() {
    return gulp.src('build/css/total.css')
    .pipe(concatCss("total_min.css"))
    .pipe(gulp.dest('build/css/'));
});

gulp.task('default', ['concatCss', 'minifyCss']);