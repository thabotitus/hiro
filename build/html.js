"use strict";
import gulp from "gulp";
import browserSync from "browser-sync";
import nunjucksRender from "gulp-nunjucks-render";
import { DISTRIBUTION_FOLDERS } from "./config.js";

const TEMPLATES_PATH = "src/templates";

const browser = browserSync.has("tts-web-starter-kit")
  ? browserSync.get("tts-web-starter-kit")
  : browserSync.create("tts-web-starter-kit");

gulp.task("build:html_pages", function () {
  return gulp
    .src(["src/pages/**/*.njk"], { allowEmtpy: true })
    .pipe(
      nunjucksRender({
        path: [TEMPLATES_PATH],
      })
    )
    .pipe(
      gulp.dest(`${DISTRIBUTION_FOLDERS.ROOT}/${DISTRIBUTION_FOLDERS.PAGES}`)
    )
    .pipe(browserSync.stream());
});

gulp.task("build:html_index", function () {
  return gulp
    .src(["src/index.njk"], { allowEmtpy: true })
    .pipe(
      nunjucksRender({
        path: [TEMPLATES_PATH],
      })
    )
    .pipe(gulp.dest(`${DISTRIBUTION_FOLDERS.ROOT}`))
    .pipe(browser.stream());
});
