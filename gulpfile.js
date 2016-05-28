// http://babeljs.io/docs/usage/polyfill/
// To include the babel polyfill you need to require it at the top of the entry point to your application.
require("babel-polyfill");

var gulp = require('gulp');
var ts = require('gulp-typescript');
var babel = require('gulp-babel');
var filter = require('gulp-filter');
var mocha = require('gulp-mocha');
var util = require('gulp-util');
var clear = require('clear');
var del = require('del');

// Subtasks
function cleanDist() {
    return del(['dist/**', '!dist']);
};
function cleanBuild() {
    return del(['build/**', '!build']);
};
function clearScreen(done) {
    clear();
    done();
}
function buildJs() {
    var tsProject = ts.createProject('tsconfig.json');
    var tsResult = tsProject.src() // instead of gulp.src(...)
        .pipe(ts(tsProject))
        .pipe(babel({
            presets: ['es2015', 'es2016']
        }))
        .pipe(gulp.dest('build'));

    return tsResult;
};
function copyTestData() {
    return gulp.src('./src/test/**/*.json', { base: './src' })
        .pipe(gulp.dest('./build'));
};
function runMocha() {
    return gulp.src(['build/test/**/*.spec.js'])
        .pipe(mocha({ reporter: 'nyan' }))
        .on('error', util.log);
};

// Tasks
var build = gulp.series(clearScreen, gulp.parallel(cleanDist, cleanBuild), buildJs);
var test = gulp.series(build, copyTestData, runMocha);

function runTDD() {
    gulp.watch(['src/**/*.ts', 'src/test/**/*.json'], {
        ignoreInitial: false
    }, gulp.series(build, copyTestData, runMocha));
}

// Expose
gulp.task('test', test);
gulp.task('tdd', runTDD);
gulp.task('default', build);