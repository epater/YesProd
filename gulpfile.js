"use-strict";
const gulp = require("gulp"),
      sass = require('gulp-sass'),
      sassPaths = [
        'bower_components/normalize.scss/sass',
        'bower_components/foundation-sites/scss',
        'bower_components/motion-ui/src'
      ];

// Compile SASS
gulp.task("sass", function () {
  return gulp.src("./development/sass/style.scss")
    .pipe(sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    }).on("error", sass.logError))
    .pipe(gulp.dest("./"));
});
 
gulp.task("sass:watch", function () {
  gulp.watch("./sass/**/*.scss", ["sass"]);
});

gulp.task("default", ["sass"]);
