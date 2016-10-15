var gulp = require("gulp");
var sass = require("gulp-sass");
var spawn = require("child_process").spawn;
var isThere = require("is-there");
var chalk = require("chalk");

// Define the tasks

/**
 * Task which watches our SCSS files and compiles them to CSS.
 */
var scssTask = function() {
    console.log("[* bonsly] --> Compiling scss...");
    gulp.src("bonsly/static/scss/**/*.scss")
        .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
        .pipe(gulp.dest("bonsly/static/build/css/"));
};

/**
 * Task which watches our SCSS files for changes, compiling on save.
 */
var scssWatchTask = function(done) {
    console.log("[* bonsly] --> Watching bonsly/static/scss/* for changes...");
    scssTask();
    return gulp.watch("bonsly/static/scss/**/*.scss", ["scss"]).on("end", done);
};

/**
 * Task which runs the webpack configuration as a subprocess. Because of
 * webpack.config.js, this will compile, then watch our JSX files and compile
 * them again on save.
 */
var webpack = function(watch, done) {
    if (!isThere("node_modules/.bin/webpack")) {
        console.log(chalk.red("[* bonsly] --> No webpack found found. You might need to `npm install`."));
        return;
    }
    console.log("[* bonsly] --> Running webpack...");
    if (watch) {
        console.log("[* bonsly] --> (watching bonsly/static/js/*.jsx for changes)...");
    }
    var args = [];
    if (watch) {
        args.push("--watch");
    }
    args.push("--display-error-details");
    var webpack = spawn("node_modules/.bin/webpack", args, { stdio: "inherit" })
    webpack.on("close", function(code) {
        if (code !== 0) {
            console.log(chalk.red("[* bonsly] --> webpack exited with code " + code));
        } else {
            console.log("[* bonsly] --> webpack stopped.");
        }
        done();
    });
    return webpack;
}

var webpackWatchTask = function(done) {
    return webpack(true, done);
};

var webpackTask = function(done) {
    return webpack(false, done);
}

/**
 * Run SCSS watch, JSX watch, and django server at the same time.
 */
var defaultTask = function(callback) {
    console.log("[* bonsly] --> Starting up Django, Webpack, and SCSS watch tasks. This could take a few seconds. Wait until you see the Django and webpack system checks.");
    gulp.start("scss:watch", "webpack:watch");
};

// Register the tasks

gulp.task("scss", scssTask);
gulp.task("scss:watch", scssWatchTask);
gulp.task("webpack", webpackTask);
gulp.task("webpack:watch", webpackWatchTask);
gulp.task("default", defaultTask);
