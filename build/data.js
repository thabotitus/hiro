"use strict";
import gulp from "gulp";
import { DISTRIBUTION_FOLDERS, TASKS, INPUT_FOLDERS } from "./config.js";

gulp.task(TASKS.COPY_DATA, () => {
  return gulp
    .src(`${INPUT_FOLDERS.DATA}/**/*`)
    .pipe(
      gulp.dest(`./${DISTRIBUTION_FOLDERS.ROOT}/${DISTRIBUTION_FOLDERS.DATA}`)
    );
});
