"use strict";
import gulp         from "gulp";
import plumber      from "gulp-plumber";
import notify       from "gulp-notify";
import browserSync  from "browser-sync";
import gulpEsbuild  from "gulp-esbuild";

import { DISTRIBUTION_FOLDERS, BROSWER_SYNC_NAME, TASKS, INPUT_FOLDERS, COPYRIGHT_NOTICE } from "./config.js";

const browser = browserSync.has(BROSWER_SYNC_NAME)
  ? browserSync.get(BROSWER_SYNC_NAME)
  : browserSync.create(BROSWER_SYNC_NAME);

gulp.task(TASKS.JS, function () {
  return gulp
    .src([`${INPUT_FOLDERS.JS}/app.js`])
    .pipe(
      plumber({
        errorHandler: notify.onError("Error: <%= error.message %>"),
      })
    )
    .pipe(gulpEsbuild({
      outdir: `./`,
      entryNames: './[name].min',
      bundle:     true,
      minify:     true,
      sourcemap:  false,
      metafile:   true,
      banner: {
        js: COPYRIGHT_NOTICE
      }
    }))
    .pipe(gulp.dest(`${DISTRIBUTION_FOLDERS.ROOT}/${DISTRIBUTION_FOLDERS.JS}`))
    .pipe(browser.stream());
});
