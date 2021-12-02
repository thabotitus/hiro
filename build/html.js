"use strict";
import gulp from "gulp";
import data from "gulp-data";
import browserSync from "browser-sync";
import nunjucksRender from "gulp-nunjucks-render";

import { tableData } from "../src/data/table.js";

import {
  DISTRIBUTION_FOLDERS,
  BROSWER_SYNC_NAME,
  NUNJUCKS_TEMPLATES_PATH,
  TASKS,
  INPUT_FOLDERS,
} from "./config.js";

const browser = browserSync.has(BROSWER_SYNC_NAME)
  ? browserSync.get(BROSWER_SYNC_NAME)
  : browserSync.create(BROSWER_SYNC_NAME);

gulp.task(TASKS.HTML_PAGES, function () {
  return gulp
    .src(["src/pages/**/*.njk"], { allowEmtpy: true })
    .pipe(data(() => {
      return JSON.parse(JSON.stringify({table_data: tableData}));
    }))
    .pipe(
      nunjucksRender({
        path: [NUNJUCKS_TEMPLATES_PATH]
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
