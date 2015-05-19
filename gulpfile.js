var gulp = require('gulp'),
    browserSync = require('browser-sync')
    reload = browserSync.reload;

gulp.task('browser-sync', function() {
    browserSync.init(['css/*.css', 'js/*.js'], {        // files to inject
        proxy: 'localhost:8888'
    });


});

gulp.task('default', ['browser-sync'], function(){
  gulp.watch('*.php').on('change', reload);
  gulp.watch('*.css').on('change', reload);
  gulp.watch('*.js').on('change', reload);
});
