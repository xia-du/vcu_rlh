'use strict';

import path from 'path';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;
  let dest = path.join(taskTarget, dirs.styles.replace(/^_/, ''), 'vendor/');

  // Copy
  gulp.task('vendor-styles', () => {
    return gulp.src(path.join(dirs.source, dirs.styles, 'vendor/*.css'))
    .pipe(gulp.dest(dest));
  });
}
