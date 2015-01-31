// include gulp
var gulp = require("gulp");

// include plug-ins
var jshint = require("gulp-jshint");
var stripDebug = require("gulp-strip-debug");
var uglify = require("gulp-uglify");
var karma = require("karma").server;
var requireJs = require("gulp-requirejs");
var jsdoc = require("gulp-jsdoc");
var install = require("gulp-install");

// install npm packages
gulp.task("install", function()
{
    gulp.src(["./package.json"])
        .pipe(install());
});

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
        name: "index",
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
        autoWatch: true,
        coverageReporter: {
            type: "html",
            dir: "build/coverage/"
        }
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

gulp.task("doc", function ()
{
    gulp.src(["./src/*.js"])
        .pipe(jsdoc("./doc", {
            path: "ink-docstrap",
            systemName      : "Geometrix",
            footer          : "footer",
            copyright       : "copyright",
            navType         : "vertical",
            theme           : "journal",
            linenums        : false,
            collapseSymbols : false,
            inverseNav      : true,
            syntaxTheme     : "dark"
        }, {
            name: "Geometrix",
            version: "0.0.0",
            licenses: ["MIT"],
            description: "abctest"
        }));
});

gulp.task("default", ["jshint"], function () {});

gulp.task("ci", ["install", "jshint", "optimize", "test", "doc"], function () {});