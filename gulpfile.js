var gulp = require('gulp');
var gutil = require('gulp-util');
var browserSync = require('browser-sync').create();
var path = require('path');
var webpack = require('webpack');
var webpackConf = require('./webpack.config');
var compiler = webpack(webpackConf);

// Static server
gulp.task('watch', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
    notify: false,
    browser: ['google chrome canary']
  });

  gulp.watch(['app/**/*.scss', 'app/**/*.js'], ['build']);
  gulp.watch('bundle/app.js').on('change', browserSync.reload);
});

// Bundle files using webpack
gulp.task('build', function() {
  compiler.run(function(err, stats) {
    if (err)
      console.error('[error]', err)
    gutil.log(gutil.colors.green('Compiled ' + (stats.endTime - stats.startTime) / 1000 + 's'));

  });
});

gulp.task('default', ['watch']);
