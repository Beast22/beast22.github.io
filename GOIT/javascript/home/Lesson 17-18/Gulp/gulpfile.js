

	var gulp = require('gulp');
	concatCss = require('gulp-concat-css');
	minifyCss = require('gulp-minify-css');
	rename = require("gulp-rename");
	notify = require("gulp-notify");
	prefix = require("gulp-autoprefixer");
	concat = require('gulp-concat');
	uglify = require('gulp-uglify');
	imagemin = require('gulp-imagemin');

gulp.task('styles', function() {
    return gulp.src(['css/carousel.css','css/style.css'])
	    .pipe(concatCss("total.css"))
	    .pipe(prefix({
	    	browsers: ['last 2 versions', '> 1%', 'ie 9'],
			cascade: false
	    }))
	    .pipe(minifyCss())
	    .pipe(rename("total.min.css"))
	    .pipe(gulp.dest('build/css/'))
	    .pipe(notify('Succesfully!'));

});

gulp.task('watch', function() {
    return gulp.watch('css/*css', ['styles']);
});

gulp.task('scripts', function() {
	 return gulp.src(['js/menu.js','js/carousel.js'])
	    .pipe(concat('script.js'))
	    .pipe(uglify())
	    .pipe(rename('myscript.js'))
	    .pipe(gulp.dest('build/js/'));
});

gulp.task('img', function() {
	return gulp.src('img/*')
		.pipe(imagemin({
		progressive: true
	}))
	.pipe(gulp.dest('build/img'));
});

gulp.task('default', ['styles', 'scripts', 'img']);