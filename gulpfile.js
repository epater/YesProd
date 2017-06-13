const gulp = require("gulp"),
      sass = require('gulp-sass');

// Compile SASS
gulp.task("sass", function () {
  return gulp.src("./dev/sass/style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./"));
});
gulp.task("sass:watch", function () {
  gulp.watch("./dev/sass/style.scss", ["sass"]);
});

gulp.task("default", ["sass"]);