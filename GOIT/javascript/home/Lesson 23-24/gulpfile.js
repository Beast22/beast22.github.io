var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');

gulp.task('sass', function() {

	return gulp.src('src/sass/*.scss')
	.pipe(sass())
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))
	.pipe(gulp.dest('dist/css'));
});


gulp.task('watch', function() {
	return gulp.watch('src/sass/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);