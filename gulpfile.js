// include gulp
var gulp = require("gulp");

// include plug-ins
var jshint = require("gulp-jshint");
var stripDebug = require("gulp-strip-debug");
var uglify = require("gulp-uglify");
var karma = require("karma").server;
var requireJs = require("gulp-requirejs");

// JS hint task
gulp.task("jshint", function()
{
    gulp.src("./src/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});

// JS concat, strip debugging and minify
gulp.task("optimize", function ()
{
    requireJs({
        baseUrl: "src",
        name: "geometrix",
        out: "geometrix.js"
    })  .pipe(stripDebug())
        .pipe(uglify())
        .pipe(gulp.dest("./build"));
});

// Run tests
gulp.task("tdd", function (done)
{
    karma.start({
        configFile: __dirname + "/karma.conf.js",
        singleRun: false,
        autoWatch: true
    }, done);
});

gulp.task("test", function (done)
{
    karma.start({
        configFile: __dirname + "/karma.conf.js",
        singleRun: true,
        autoWatch: false
    }, done);
});

gulp.task("default", ["jshint", "scripts"], function () {});