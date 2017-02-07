var Fontmin = require('fontmin'),
    gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    jade = require('gulp-jade'),
    data = require('gulp-data'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    image = require('gulp-image'),
    rigger = require('gulp-rigger'),

//svgSprite = require('gulp-svg-sprites'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    replace = require('gulp-replace');


/*============= rigger templates  =============*/
var htmlTemplates = [
    'src/templates/*'
];
var htmlPages = [
    'src/*.html'
];
gulp.task('htmlTemplates', function () {
    gulp.src(htmlTemplates) //Выберем файлы по нужному пути
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(rigger()) //Прогоним через rigger
        .pipe(notify("jade templates success!"))
        .pipe(gulp.dest('builds/development/templates'));
});
gulp.task('htmlPages', function () {
    gulp.src(htmlPages) //Выберем файлы по нужному пути
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(rigger()) //Прогоним через rigger
        .pipe(notify("jade templates success!"))
        .pipe(gulp.dest('builds/development/'));
});

/*============= images compress --> min images  =============*/
var images = [
    'src/images/*'
];
gulp.task('image', function () {
    gulp.src(images)
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            advpng: true,
            jpegRecompress: false,
            jpegoptim: true,
            mozjpeg: true,
            gifsicle: true,
            svgo: true
        }))
        .pipe(gulp.dest('builds/development/images'));
});

/*============= images favicon --> development images =============*/
var favicon = [
    'src/images/favicon/*.png',
    'src/images/favicon/*.xml',
    'src/images/favicon/*.json',
    'src/images/favicon/*.ico'
];
gulp.task('favicon', function () {
    gulp.src(favicon)
        .pipe(gulp.dest('builds/development/images/favicon'))
});

/*============= jade templates --> html files =============*/
var templates = [
    'src/templates/*.jade'
];

var jadedata = [
    'src/data/data.json'
];

//jade task
gulp.task('jade', function () {
    return gulp.src(templates)
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(jade({
            pretty: '\t'
        }))
        .pipe(notify("jade templates success!"))
        .pipe(gulp.dest('builds/development'));
});
/*============= fonts resourses --> development package =============*/
var sfuifonts = [
    'src/fonts/sfui/*.ttf'
];

var fontmin = new Fontmin()
    .src(sfuifonts)
    .use(Fontmin.ttf2eot())
    .use(Fontmin.ttf2woff({deflate: true}))
    .dest('builds/development/fonts/sfui');

fontmin.run(function (err, files) {
    if (err) {
        throw err;
    }
    console.log(files[0]);
    // => { contents: <Buffer 00 01 00 ...> }
});

/*============= style.scss --> style.css =============*/
var stylescss = [
    'src/scss/style.scss',
    'src/scss/setings/*.scss',
    'src/scss/components/*.scss'
];
//scss task
gulp.task('sass', function () {
    gulp.src(stylescss)
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(sass())
        // .pipe(minifyCss())
        .pipe(rename('styles.css'))
        .pipe(autoprefixer({
            browsers: ['> 1%', 'last 15 versions'],
            cascade: false
        }))
        .pipe(plumber.stop())
        .pipe(notify("style_css success!"))
        .pipe(gulp.dest('builds/development/css'));
});



var rd_navbar = [
    'src/scss/rd-navbar/**/*.scss'
];
//scss navbar task
gulp.task('navbar', function () {
    gulp.src(rd_navbar)
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['> 1%', 'last 15 versions'],
            cascade: false
        }))
        .pipe(plumber.stop())
        .pipe(notify("navbar success!"))
        .pipe(gulp.dest('builds/development/css'));
});

/*============= JS files --> dev version js =============*/
//core js
var core = [
    'src/js/core/modernizr.js',
    'src/js/core/jquery.js'
];
gulp.task('js-core', function () {
    gulp.src(core)
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(uglify())
        .pipe(concat('core.js'))
        .pipe(plumber.stop())
        .pipe(notify("js-core success!"))
        .pipe(gulp.dest('builds/development/js/'));
});

//components js
var components = [
    'src/js/components/*.js'
    //'src/js/components/jquery-ui.js',
    //'src/js/components/jquery-formstyler.js',
    //'src/js/components/mCustomScrollbar.js',
    //'src/js/components/ion.rangeSlider.js'
];
gulp.task('js-components', function () {
    gulp.src(components)
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(uglify())
        .pipe(concat('components.js'))
        .pipe(plumber.stop())
        .pipe(notify("js-components success!"))
        .pipe(gulp.dest('builds/development/js/'));
});

var initscript = ['src/js/script.js'];
gulp.task('js-initscript', function () {
    gulp.src(initscript)
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(plumber.stop())
        .pipe(notify("js-initscript success!"))
        .pipe(gulp.dest('builds/development/js/'));
});

/*============= watch task =============*/
gulp.task('watch', function () {
    //gulp.watch(templates, ['jade']);
    gulp.watch(htmlTemplates, ['htmlTemplates']);
    gulp.watch(htmlPages, ['htmlPages']);
    gulp.watch(stylescss, ['sass']);
    gulp.watch(rd_navbar, ['navbar']);
    gulp.watch(core, ['js-core']);
    gulp.watch(components, ['js-components']);
    gulp.watch(initscript, ['js-initscript']);
    gulp.watch(images, ['image']);

});

/*============= default task =============*/
gulp.task('default', ['watch']);
