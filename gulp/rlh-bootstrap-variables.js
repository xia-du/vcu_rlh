'use strict';

export default function(gulp, browserSync) {

  let src = 'src/_styles/partials/bootstrap/_variables.scss';
  let dest = 'bower_components/bootstrap-sass/assets/stylesheets/bootstrap/';

  // Copy
  gulp.task('rlh-bootstrap-variables', () => {
    return gulp.src(src)
    .pipe(gulp.dest(dest, {overwrite: true}));
  });
}
