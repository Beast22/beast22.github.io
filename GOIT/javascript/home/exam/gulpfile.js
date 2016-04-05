
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var imagemin = require('gulp-imagemin');
var autoprefixer = require('gulp-autoprefixer');
var merge = require('merge-stream');
var order = require("gulp-order");


gulp.task('sass', function() {

	return gulp.src('src/css/sass/*.scss')
	.pipe(sass())
	.pipe(autoprefixer({
		browsers: ['last 10 versions', '> 2%'],
		cascade: false
	}))
	.pipe(gulp.dest('dist/css'));
});

gulp.task('concat-css', function(){
	 return gulp.src('src/css/*.css')
    .pipe(concatCss("default.css"))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('images', function() {
	return gulp.src('src/img/*.*')
	.pipe(imagemin({
		progressive: true
	}))
	.pipe(gulp.dest('dist/img'));
});


gulp.task('scripts', function() {
	return gulp.src('src/js/*.*')
	.pipe(concat('all.js'))
	.pipe(gulp.dest('dist/js'));
});

gulp.task('watch', function() {
	gulp.watch('src/css/sass/*.scss', ['sass']);
	gulp.watch('src/css/*.css', ['concat-css']);
});

gulp.task('default', ['sass', 'watch', 'concat-css']);