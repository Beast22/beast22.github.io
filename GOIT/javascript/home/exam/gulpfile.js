
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var imagemin = require('gulp-imagemin');

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
	 return gulp.src('dist/css/*.css')
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


gulp.task('watch', function() {
	return gulp.watch('src/css/sass/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch', 'concat-css']);