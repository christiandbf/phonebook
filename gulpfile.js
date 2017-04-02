const gulp = require('gulp'),
      babel = require('gulp-babel');

gulp.task('build', () => {
    return gulp.src('./src/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./public/js/'))
});

gulp.task('watch', () => {
    return gulp.watch('./src/*.js', ['build']);
});

gulp.task('default', ['watch']);