import gulp from "gulp";
import clean from "gulp-clean";
import browserSync from "browser-sync";

import "./build/scripts.js";
import "./build/styles.js";
import "./build/images.js";
import "./build/html.js";
import "./build/data.js";
import "./build/bump.js";
import "./build/package.js";
import "./build/deploy.js";
import "./build/sw.js";

import {
  DISTRIBUTION_FOLDERS,
  INPUT_FOLDERS,
  TASKS,
  BROWSER_PORT,
  BROSWER_SYNC_NAME,
} from "./build/config.js";

const browser = browserSync.has(BROSWER_SYNC_NAME)
  ? browserSync.get(BROSWER_SYNC_NAME)
  : browserSync.create(BROSWER_SYNC_NAME);

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
    TASKS.SW
  ])
);

gulp.task(TASKS.SERVE, function () {
  browser.init({
    server: `./${DISTRIBUTION_FOLDERS.ROOT}`,
    port: BROWSER_PORT,
    open: true,
  });
  gulp.watch([
      `${INPUT_FOLDERS.JS}/**/*.js`,
      `${INPUT_FOLDERS.JS}/**/*.ts`,
      `${INPUT_FOLDERS.ROOT}/service-worker.js`
    ], gulp.series([TASKS.JS]));
  gulp.watch(
    `${INPUT_FOLDERS.CSS}/**/*.+(scss|css)`,
    gulp.series([TASKS.STYLES])
  );
  gulp.watch(
    `${INPUT_FOLDERS.IMAGES}/**/*.+(png|jpg|jpeg|gif|svg|ico)`,
    gulp.series([TASKS.IMAGES])
  );
  gulp.watch([
    `${INPUT_FOLDERS.ROOT}/**/*.njk`,
    `${INPUT_FOLDERS.ROOT}/manifest.json`
    ],
    gulp.series([TASKS.HTML_INDEX, TASKS.HTML_PAGES])
  );
});
