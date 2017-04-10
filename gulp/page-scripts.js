'use strict';

import path from 'path';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;
  let dest = path.join(taskTarget, dirs.scripts.replace(/^_/, ''), 'pages/');

  // Copy
  gulp.task('page-scripts', () => {
    return gulp.src(path.join(dirs.source, dirs.scripts, 'pages/*.js'))
    .pipe(gulp.dest(dest));
  });
}
