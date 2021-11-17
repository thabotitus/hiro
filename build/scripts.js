"use strict";
import gulp from "gulp";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import webpack from "webpack-stream";
import { WEBPACK_CONFIG } from "../webpack.config.js";
import browserSync from "browser-sync";
import { DISTRIBUTION_FOLDERS } from "./config.js";

const browser = browserSync.has("tts-web-starter-kit")
  ? browserSync.get("tts-web-starter-kit")
  : browserSync.create("tts-web-starter-kit");

gulp.task("build:javascript", function () {
  return gulp
    .src("/")
    .pipe(
      plumber({
        errorHandler: notify.onError("Error: <%= error.message %>"),
      })
    )
    .pipe(webpack(WEBPACK_CONFIG), webpack)
    .pipe(gulp.dest(`${DISTRIBUTION_FOLDERS.ROOT}/${DISTRIBUTION_FOLDERS.JS}`))
    .pipe(browser.stream());
});
