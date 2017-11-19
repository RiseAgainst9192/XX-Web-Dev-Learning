'use strict';
var gulp = require('gulp');
var pug = require('gulp-pug');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

gulp.task('pug', function() {
    return gulp.src('./views/*.pug')
        .pipe(pug({
	    pretty:true
	}))
        .pipe(gulp.dest('./'));
});

gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("*.html").on("change", reload);
});
