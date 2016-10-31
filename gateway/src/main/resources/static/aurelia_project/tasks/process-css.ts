import * as gulp from 'gulp';
import * as changedInPlace from 'gulp-changed-in-place';
import * as sourcemaps from 'gulp-sourcemaps';
import * as postcss from 'gulp-postcss';
import * as project from '../aurelia.json';
import {build} from 'aurelia-cli';
import * as cssnext from 'postcss-cssnext';
import * as postcssmodules from 'postcss-modules';

export default function processCSS() {
  let processors = [
  cssnext({ browsers: ['last 1 version'] }),
  postcssmodules({
      generateScopedName: '[name]__[local]',
  })
];

  return gulp.src(project.cssProcessor.source)
    .pipe(changedInPlace({firstPass:true}))
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(build.bundle());
};
