const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');


//compile sass
gulp.task('sass', function(){
  return gulp.src(['src/sass/style.scss'])
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream())
});

//watch and serve
gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: './src'
  });

  gulp.watch(['src/sass/*.scss'], ['sass']);
  gulp.watch(['src/*.html']).on('change', browserSync.reload);
});

//default
gulp.task('default', ['serve']);