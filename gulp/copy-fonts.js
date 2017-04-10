'use strict';

import path from 'path';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;
  let dest = path.join(taskTarget, dirs.fonts.replace(/^_/, ''));

  // Copy
  gulp.task('copy-fonts', () => {
    return gulp.src(path.join(dirs.source, dirs.fonts, '**/*.{eot,svg,ttf,woff,woff2}'))
    .pipe(gulp.dest(dest));
  });
}
