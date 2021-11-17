"use strict";
import gulp from "gulp";
import plumber from "gulp-plumber";
import browserSync from "browser-sync";
import imageMin from "gulp-imagemin";

import {
  DISTRIBUTION_FOLDERS,
  INPUT_FOLDERS,
  BROSWER_SYNC_NAME,
  TASKS,
} from "./config.js";

const browser = browserSync.has(BROSWER_SYNC_NAME)
  ? browserSync.get(BROSWER_SYNC_NAME)
  : browserSync.create(BROSWER_SYNC_NAME);

const minifierConfig = {
  progressive: true,
  interlaced: true,
  pngquant: true,
  verbose: true,
};

gulp.task(TASKS.IMAGES, function () {
  return gulp
    .src([`${INPUT_FOLDERS.IMAGES}/**/*.+(png|jpg|jpeg|gif|svg|ico)`])
    .pipe(plumber())
    .pipe(imageMin(minifierConfig))
    .pipe(
      gulp.dest(`./${DISTRIBUTION_FOLDERS.ROOT}/${DISTRIBUTION_FOLDERS.IMAGES}`)
    )
    .pipe(browser.stream());
});
