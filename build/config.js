const DISTRIBUTION_FOLDERS = {
  CSS: "css",
  IMAGES: "images",
  ROOT: "docs",
  JS: "js",
  DATA: "data",
  PAGES: "pages",
};

const INPUT_FOLDERS = {
  IMAGES: "./src/images",
  JS: "./src/js",
  CSS: "./src/styles",
  ROOT: "./src",
  DATA: "./src/data",
};

const TASKS = {
  BUILD: "default",
  SERVE: "serve",
  CLEAN: "build:clean",
  JS: "build:javascript",
  STYLES: "build:styles",
  IMAGES: "build:images",
  HTML_INDEX: "build:html_index",
  HTML_PAGES: "build:html_pages",
  COPY_DATA: "build:copy_data",
  PACKAGE: "buil:package",
  DEPLOY: "surge:deploy",
};

const APP_ROOT = "./";
const BROWSER_PORT = 3000;
const BROSWER_SYNC_NAME = "tts-web-starter-kit";
const VERSION_SOURCES = [
  "./version.json",
  "./package.json",
  "./package-lock.json",
];

const DOWNLOADS_FOLDER = "./downloads/";
const NUNJUCKS_TEMPLATES_PATH = "src/templates";
const STYLES_OUTPUT_NAME = "app.min.css";
const SURGE_DOMAIN = null;

export {
  APP_ROOT,
  BROWSER_PORT,
  BROSWER_SYNC_NAME,
  DISTRIBUTION_FOLDERS,
  DOWNLOADS_FOLDER,
  INPUT_FOLDERS,
  NUNJUCKS_TEMPLATES_PATH,
  STYLES_OUTPUT_NAME,
  SURGE_DOMAIN,
  TASKS,
  VERSION_SOURCES,
};
