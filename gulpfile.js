'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

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
// build js
gulp.task('scripts', function () {
    return gulp.src(['./src/**/*.js', './src/**/**/*.js'])
        .pipe(concat('script.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});
// build html
gulp.task('html', function () {
    return gulp.src(['./src/**/*.html'])
        .pipe(gulp.dest('dist'));
});

// Create a new build in dist folder
gulp.task('build', gulp.series(
    'clean',
    gulp.parallel('styles', 'html', 'scripts')
));

// Watch for changes.
gulp.task('watch', () => gulp.watch(['./src/*.scss', './src/*/*.scss', './src/**/*.html'], gulp.parallel('styles', 'html')));