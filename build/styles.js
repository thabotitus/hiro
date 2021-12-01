"use strict";
import gulp           from "gulp";
import plumber        from "gulp-plumber";
import notify         from "gulp-notify";
import browserSync    from "browser-sync";
import gulpEsbuild    from "gulp-esbuild";
import { sassPlugin } from  "esbuild-sass-plugin";

import {
  DISTRIBUTION_FOLDERS,
  INPUT_FOLDERS,
  TASKS,
  BROSWER_SYNC_NAME,
  COPYRIGHT_NOTICE
} from "./config.js";

const browser = browserSync.has(BROSWER_SYNC_NAME)
  ? browserSync.get(BROSWER_SYNC_NAME)
  : browserSync.create(BROSWER_SYNC_NAME);

gulp.task(TASKS.STYLES, function () {
  return gulp
    .src([`${INPUT_FOLDERS.CSS}/app.scss`])
    .pipe(
      plumber({
        errorHandler: notify.onError("Error: <%= error.message %>"),
      })
    )  
    .pipe(gulpEsbuild({
      outfile: 'app.min.css',
      bundle: true,
      minify: true,
      sourcemap: true,
      banner: {
        css: COPYRIGHT_NOTICE
      },
      plugins: [sassPlugin({
        type: [["css", `${INPUT_FOLDERS.ROOT}/${INPUT_FOLDERS.STYLES}/app.scss`]]
      })]
    }))
    .pipe(
      gulp.dest(`./${DISTRIBUTION_FOLDERS.ROOT}/${DISTRIBUTION_FOLDERS.CSS}`)
    )
    .pipe(browser.stream());
});
