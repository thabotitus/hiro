"use strict";
import gulp from "gulp";
import sass from "sass";
import gulpSass from "gulp-sass";
import plumber from "gulp-plumber";
import sourcemaps from "gulp-sourcemaps";
import sassGlob from "gulp-sass-glob";
import cleanCSS from "gulp-clean-css";
import autoprefixer from "gulp-autoprefixer";
import notify from "gulp-notify";
import browserSync from "browser-sync";
import concat from "gulp-concat";
import {
  DISTRIBUTION_FOLDERS,
  INPUT_FOLDERS,
  TASKS,
  BROSWER_SYNC_NAME,
  STYLES_OUTPUT_NAME,
} from "./config.js";

const gSass = gulpSass(sass);

const browser = browserSync.has(BROSWER_SYNC_NAME)
  ? browserSync.get(BROSWER_SYNC_NAME)
  : browserSync.create(BROSWER_SYNC_NAME);

gulp.task(TASKS.STYLES, function () {
  return gulp
    .src([`${INPUT_FOLDERS.CSS}/**/*.scss`])
    .pipe(
      plumber({
        errorHandler: notify.onError("Error: <%= error.message %>"),
      })
    )
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(
      gSass({
        style: "compressed",
        errLogToConsole: false,
        onError: function (error_message) {
          return notify().write(error_message);
        },
      })
    )
    .pipe(autoprefixer())
    .pipe(
      cleanCSS({
        compatibility: "ie9",
        level: {
          1: {
            specialComments: "all",
          },
        },
      })
    )
    .pipe(sourcemaps.write())
    .pipe(concat(STYLES_OUTPUT_NAME))
    .pipe(
      gulp.dest(`./${DISTRIBUTION_FOLDERS.ROOT}/${DISTRIBUTION_FOLDERS.CSS}`)
    )
    .pipe(browser.stream());
});
