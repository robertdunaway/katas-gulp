var gulp = require('gulp')
    , runSequence = require('run-sequence')
    , rename = require('gulp-rename')
    , sourcemaps = require('gulp-sourcemaps')
    , sass = require('gulp-sass')
    , autoprefixer = require('gulp-autoprefixer')
    ;

gulp.task('copy-to-wwwroot', function () {
    return gulp.src(['src/**/*'])
    .pipe(gulp.dest('wwwroot'));
});

gulp.task('sass-transpile', function () {
    return gulp.src(['wwwroot/**/*.scss'], { base: 'wwwroot/./' })
     .pipe(sourcemaps.init())
     .pipe(sass().on('error', sass.logError))
     .pipe(sourcemaps.write('./'))
     .pipe(gulp.dest('wwwroot/./'));
});

gulp.task('default', function () {
    runSequence('copy-to-wwwroot', 'sass-transpile');
});