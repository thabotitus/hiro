"use strict";
import gulp from "gulp";
import bump from "gulp-bump";
import { VERSION_SOURCES, APP_ROOT } from "./config.js";

gulp.task("bump:major", function () {
  return gulp
    .src(VERSION_SOURCES)
    .pipe(bump({ type: "major" }))
    .pipe(gulp.dest(APP_ROOT));
});

gulp.task("bump:minor", function () {
  return gulp
    .src(VERSION_SOURCES)
    .pipe(bump({ type: "minor" }))
    .pipe(gulp.dest(APP_ROOT));
});

gulp.task("bump:patch", function () {
  return gulp
    .src(VERSION_SOURCES)
    .pipe(bump({ type: "patch" }))
    .pipe(gulp.dest(APP_ROOT));
});
