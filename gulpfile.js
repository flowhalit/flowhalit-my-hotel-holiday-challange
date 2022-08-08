var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass')(require('sass')),
    cleanCSS = require('gulp-clean-css');

gulp.task('css', () => {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('./public/assets/css/'))
        .pipe(concat('app.bundle.css'))
        .pipe(gulp.dest('./public/assets/css/'));

});
gulp.task('scripts', function () {
    return gulp.src('./src/js/*.js')
        .pipe(concat('app.bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./public/assets/js/'));
});

gulp.task('watch', () => {
    gulp.watch('src/sass/**/*.scss', (done) => {
        gulp.series(['css'])(done);
    });
    gulp.watch('src/js/**/*.js', (done) => {
        gulp.series(['scripts'])(done);
    });
});

gulp.task('run', gulp.series(['watch', 'css', 'scripts']));