"use strict";
import gulp from "gulp";
import surge from "gulp-surge";

import {
  SURGE_DOMAIN,
  TASKS,
  APP_ROOT,
  DISTRIBUTION_FOLDERS,
} from "./config.js";

gulp.task(TASKS.DEPLOY, function () {
  return surge({
    project: `${APP_ROOT}/${DISTRIBUTION_FOLDERS.ROOT}`,
    domain: SURGE_DOMAIN,
  });
});
