// Require all the things
var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cssnano     = require('gulp-cssnano');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var cp          = require('child_process');
var sourcemaps  = require('gulp-sourcemaps');

var messages = {
  jekyllDev: 'Running: $ jekyll build for dev',
  jekyllProd: 'Running: $ jekyll build for prod'
};

// JEKYLL

gulp.task('jekyll-rebuild', ['jekyll-dev'], function () {
  browserSync.reload();
});


// BROWSER-SYNC

gulp.task('browser-sync', ['sass', 'scripts', 'jekyll-dev'], function() {
  browserSync.init({
    server: "_site",
    port: 1234
  });
});


// WATCH

gulp.task('watch', function () {
  gulp.watch(['_sass/**/*.scss','_sass/*.scss'], ['sass']);
  gulp.watch(['_js/**/*.js'], ['scripts']);
  gulp.watch(['index.html', '_layouts/*.html', '_posts/*', '_includes/*.html', '_drafts/*', '**/*.html'], ['jekyll-rebuild']);
});


// DEV

gulp.task('jekyll-dev', function (done) {
  browserSync.notify(messages.jekyllDev);
  return cp.spawn('jekyll', ['build', '--drafts', '--config', '_config.yml'], {stdio: 'inherit'})
 .on('close', done);
});

gulp.task('sass', function () {
  return gulp.src('_sass/main.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({
    includePaths: ['scss'],
    onError: browserSync.notify
  }))
  .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('_site/css'))
  .pipe(browserSync.reload({stream:true}))
  .pipe(gulp.dest('css'));
});

gulp.task('scripts', function() {
  return gulp.src(['_js/lib/*.js'])
  .pipe(sourcemaps.init())
  .pipe(concat('scripts.js'))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('_site/js'))
  .pipe(browserSync.reload({stream:true}))
  .pipe(gulp.dest('js'));
});


// PROD

gulp.task('jekyll-prod', function (done) {
  browserSync.notify(messages.jekyllProd);
  return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
  .on('close', done);
});

gulp.task('sass-prod', function () {
  return gulp.src('_sass/main.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({
    includePaths: ['scss'],
    onError: browserSync.notify
  }))
  .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
  .pipe(cssnano())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('_site/css'))
  .pipe(gulp.dest('css'));
});

gulp.task('scripts-prod', function() {
  return gulp.src(['_js/lib/*.js'])
  .pipe(sourcemaps.init())
  .pipe(concat('scripts.js'))
  .pipe(uglify())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('_site/js'))
  .pipe(gulp.dest('js'));
});


// MAIN TASKS

gulp.task('default', ['browser-sync', 'watch']);
gulp.task('build', ['scripts-prod', 'sass-prod', 'jekyll-prod']);