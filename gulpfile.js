import gulp from "gulp";
import clean from "gulp-clean";
import browserSync from "browser-sync";

const browser = browserSync.has("tts-web-starter-kit")
  ? browserSync.get("tts-web-starter-kit")
  : browserSync.create("tts-web-starter-kit");

import "./build/scripts.js";
import "./build/styles.js";
import "./build/images.js";
import "./build/html.js";
import "./build/data.js";
import "./build/bump.js";
import "./build/package.js";

import { DISTRIBUTION_FOLDERS, INPUT_FOLDERS, TASKS } from "./build/config.js";

const BROWSER_PORT = 3000;

gulp.task(TASKS.CLEAN, function () {
  return gulp
    .src([`${DISTRIBUTION_FOLDERS.ROOT}/*`, "./dist"], {
      read: false,
      allowEmpty: true,
    })
    .pipe(clean());
});

gulp.task(
  TASKS.BUILD,
  gulp.series([
    TASKS.CLEAN,
    TASKS.JS,
    TASKS.STYLES,
    TASKS.IMAGES,
    TASKS.HTML_PAGES,
    TASKS.HTML_INDEX,
    TASKS.COPY_DATA,
  ])
);

gulp.task(TASKS.SERVE, function () {
  browser.init({
    server: `./${DISTRIBUTION_FOLDERS.ROOT}`,
    port: BROWSER_PORT,
    open: true,
  });
  gulp.watch(`${INPUT_FOLDERS.JS}/**/*.js`, gulp.series([TASKS.JS]));
  gulp.watch(
    `${INPUT_FOLDERS.CSS}/**/*.+(scss|css)`,
    gulp.series([TASKS.STYLES])
  );
  gulp.watch(
    `${INPUT_FOLDERS.IMAGES}/**/*.+(png|jpg|jpeg|gif|svg|ico)`,
    gulp.series([TASKS.IMAGES])
  );
  gulp.watch(
    `${INPUT_FOLDERS.ROOT}/**/*.njk`,
    gulp.series([TASKS.HTML_INDEX, TASKS.HTML_PAGES])
  );
});
