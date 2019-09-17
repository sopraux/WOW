var { dest, series, src, watch } = require("gulp");
var rename = require("gulp-rename");
var jasmine = require("gulp-jasmine");
var coffee = require("gulp-coffee");
const terser = require("gulp-terser");

require("coffee-register");

function minify(cb) {
  src("./dist/wow.js")
    .pipe(rename("wow.min.js"))
    .pipe(terser())
    .pipe(dest("./dist/"));
  cb();
}

function scripts(cb) {
  src("./src/**/*.coffee")
    .pipe(coffee({ bare: true }))
    .pipe(dest("./dist/"));
  cb();
}

function specs(cb) {
  src("./test/specs/**/*.spec.coffee").pipe(
    jasmine({
      verbose: true,

      src: ["spec/javascripts/libs/*.js", "dist/wow.js"],
      options: {
        specs: "spec/javascripts/**/*.js",
        helpers: "spec/javascripts/helpers/**/*.js",
      },
    })
  );
  cb();
}

exports.test = series(specs);

exports.build = series(scripts, minify);

exports.default = () => {
  watch("src/**/*.coffee", this.build);
  this.build();
};
