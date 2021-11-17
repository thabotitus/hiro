const DISTRIBUTION_FOLDERS = {
  CSS: "css",
  IMAGES: "images",
  ROOT: "dist",
  JS: "js",
  DATA: "data",
  PAGES: "pages",
};

const INPUT_FOLDERS = {
  IMAGES: "./src/images",
  JS: "./src/js",
  CSS: "./src/styles",
  ROOT: "./src",
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
};

export { DISTRIBUTION_FOLDERS, INPUT_FOLDERS, TASKS };
