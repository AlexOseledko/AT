import webpack from 'webpack-stream'

export const js = () => {
  return app.gulp.src(app.path.src.js, { sourcemaps: app.isDev })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'JS',
        message: 'Error: <%= error.message %>',
      })
    ))
    .pipe(webpack({
      mode: app.isBuild ? 'production' : 'development',
      entry: {
        // Main chunks:
        app:        app.path.src.js + 'app.js',
        analitics:  app.path.src.js + 'analitics.js',
        // End main chunks
      },
        output: { filename: '[name].min.js' }
      }))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browserSync.stream())
}