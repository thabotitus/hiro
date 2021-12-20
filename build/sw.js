"use strict";
import gulp from "gulp";

import {
  DISTRIBUTION_FOLDERS,
  INPUT_FOLDERS,
  TASKS,
} from "./config.js";


gulp.task(TASKS.SW, () => {
  return gulp
    .src([
      `${INPUT_FOLDERS.ROOT}/manifest.json`,
      `${INPUT_FOLDERS.ROOT}/service-worker.js`,
      `${INPUT_FOLDERS.ROOT}/favicon.ico`,
      `${INPUT_FOLDERS.ROOT}/CNAME`
    ])
    .pipe(
      gulp.dest(`./${DISTRIBUTION_FOLDERS.ROOT}`)
    );
});
