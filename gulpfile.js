var gulp = require('gulp');
var less = require('gulp-less');
var bs = require('browser-sync');
gulp.task('less', function () {
  return gulp.src('./less/main.less')
    .pipe(less())
    .pipe(gulp.dest('./example-less/css'))
    .pipe(bs.reload({stream:true}));
});
gulp.task('bs', ['less'], function(){
   bs({
      ui: false,
      server: {
        baseDir: './'
      },
      startPath: './example-less',
      port: 9000
    });
});
gulp.task('watch', ['bs'], function(){
  gulp.watch('./less/**/*.less', ['less']);
  gulp.watch('./example-less/index.html', function(){
    return bs.reload();
  });
});
