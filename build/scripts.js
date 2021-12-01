"use strict";
import gulp from "gulp";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import browserSync from "browser-sync";
import { DISTRIBUTION_FOLDERS, BROSWER_SYNC_NAME, TASKS, INPUT_FOLDERS } from "./config.js";
import gulpEsbuild from "gulp-esbuild";

const browser = browserSync.has(BROSWER_SYNC_NAME)
  ? browserSync.get(BROSWER_SYNC_NAME)
  : browserSync.create(BROSWER_SYNC_NAME);

gulp.task(TASKS.JS, function () {
  return gulp
    .src(`${INPUT_FOLDERS.JS}/app.js`)
    .pipe(
      plumber({
        errorHandler: notify.onError("Error: <%= error.message %>"),
      })
    )
    .pipe(gulpEsbuild({
      outfile: 'app.min.js',
      bundle: true,
      minify: true,
      sourcemap: false,
      metafile: true,
      banner: {
        js: '// Copyright © HIRO 2021'
      }
    }))
    .pipe(gulp.dest(`${DISTRIBUTION_FOLDERS.ROOT}/${DISTRIBUTION_FOLDERS.JS}`))
    .pipe(browser.stream());
});
