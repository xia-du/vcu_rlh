'use strict';

import path from 'path';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;
  let dest = path.join(taskTarget, dirs.scripts.replace(/^_/, ''), 'vendor/');

  // Copy
  gulp.task('vendor-scripts', () => {
    return gulp.src(path.join(dirs.source, dirs.scripts, 'vendor/*.js'))
    .pipe(gulp.dest(dest));
  });
}
