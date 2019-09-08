'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const rename = require('gulp-rename');

// deletes the dist folder
gulp.task('clean', require('del').bind(null, ['dist']));

// build css
gulp.task('styles', function () {
    return gulp.src(['./src/**/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('style.min.css'))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('dist'));
});
gulp.task('html', function () {
    return gulp.src(['./src/**/*.html'])
        .pipe(gulp.dest('dist'));
});

// Create a new build in dist folder
gulp.task('build', gulp.series(
    'clean',
    gulp.parallel('styles', 'html')
));

// Watch for changes.
gulp.task('watch', () => gulp.watch(['./src/*/*.scss', './src/**/*.html'], gulp.parallel('styles', 'html')));