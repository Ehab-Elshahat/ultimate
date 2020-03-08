const gulp = require('gulp'),
	concat = require('gulp-concat'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	pug = require('gulp-pug'),
	sourcemaps = require('gulp-sourcemaps'),
	livereload = require('gulp-livereload'),
	minify = require('gulp-minify');





//	Html task
gulp.task('html', () => {
	return gulp.src('source/pug/*.pug')
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest('dist'))
		.pipe(livereload())
});

// Css task
gulp.task('css', () => {
	return gulp.src(['source/css/**/*.css', 'source/css/**/*.scss'])
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'expanded' /*nested, expanded, compact, compressed*/
		}).on('error', sass.logError))
		.pipe(autoprefixer('last 2 version'))
		.pipe(concat('main.css'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist/css'))
		.pipe(livereload())
});

// Js task
gulp.task('js', () => {
	return gulp.src('source/js/*.js')
		.pipe(concat('main.js'))
		.pipe(minify())
		.pipe(gulp.dest('dist/js'))
		.pipe(livereload())
});

// Watch Task
gulp.task('watch', () => {
	require('./server.js');
	livereload.listen();
	gulp.watch('source/pug/*.pug', gulp.series('html'))
	gulp.watch(['source/css/**/*.css', 'source/css/**/*.scss'], gulp.series('css'))
	gulp.watch('source/js/*.js', gulp.series('js'))

})