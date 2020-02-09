'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var cssnano = require('cssnano');

gulp.task('default', function () {
    return gulp.watch('src/sass/**/*.scss', gulp.series('styles'));
});

gulp.task('styles', function () {
    var processors = [
        cssnano()
    ];
    return gulp.src('src/sass/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(gulp.dest('src/'));
});

