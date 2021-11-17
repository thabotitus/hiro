"use strict";
import gulp from "gulp";
import browserSync from "browser-sync";
import nunjucksRender from "gulp-nunjucks-render";

import {
  DISTRIBUTION_FOLDERS,
  BROSWER_SYNC_NAME,
  NUNJUCKS_TEMPLATES_PATH,
  TASKS,
} from "./config.js";

const browser = browserSync.has(BROSWER_SYNC_NAME)
  ? browserSync.get(BROSWER_SYNC_NAME)
  : browserSync.create(BROSWER_SYNC_NAME);

gulp.task(TASKS.HTML_PAGES, function () {
  return gulp
    .src(["src/pages/**/*.njk"], { allowEmtpy: true })
    .pipe(
      nunjucksRender({
        path: [NUNJUCKS_TEMPLATES_PATH],
      })
    )
    .pipe(
      gulp.dest(`${DISTRIBUTION_FOLDERS.ROOT}/${DISTRIBUTION_FOLDERS.PAGES}`)
    )
    .pipe(browserSync.stream());
});

gulp.task(TASKS.HTML_INDEX, function () {
  return gulp
    .src(["src/index.njk"], { allowEmtpy: true })
    .pipe(
      nunjucksRender({
        path: [NUNJUCKS_TEMPLATES_PATH],
      })
    )
    .pipe(gulp.dest(`${DISTRIBUTION_FOLDERS.ROOT}`))
    .pipe(browser.stream());
});
