var gulp = require("gulp");
var browserSync = require("browser-sync");
var sass = require("gulp-sass");
var prefix = require("gulp-autoprefixer");
var cp = require("child_process");
var sourcemaps = require("gulp-sourcemaps");
var plumber = require("gulp-plumber");
var imagemin = require("gulp-imagemin");
var deleteUnusedImages = require("gulp-delete-unused-images");

var jekyll = process.platform === "win32" ? "jekyll.bat" : "jekyll";
var messages = {
	jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task("jekyll-build", function(done) {
	browserSync.notify(messages.jekyllBuild);
	return cp.spawn(jekyll, ["build"], { stdio: "inherit" }).on("close", done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task("jekyll-rebuild", ["jekyll-build"], function() {
	browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task("browser-sync", ["sass", "jekyll-build"], function() {
	browserSync({
		server: {
			baseDir: "_site"
		}
	});
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task("sass", function() {
	return gulp
		.src("_scss/main.scss")
		.pipe(sourcemaps.init())
		.pipe(plumber())
		.pipe(
			sass({
                includePaths: ["scss"],
                outputStyle: 'compressed',
				onError: browserSync.notify
			})
		)
		.pipe(
			prefix(["last 15 versions", "> 1%", "ie 8", "ie 7"], { cascade: true })
		)
		.pipe(sourcemaps.write())
		.pipe(gulp.dest("_site/css"))
		.pipe(browserSync.reload({ stream: true }))
		.pipe(gulp.dest("css"));
});

/**
 * Optimize Images
 */
gulp.task("image-optimize", function() {
	gulp
		.src("./assets/img/**/*")
		.pipe(imagemin())
		.pipe(gulp.dest("./_site/assets/img/"));
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task("watch", function() {
	gulp.watch("_scss/**/*.scss", ["sass"]);
	gulp.watch(
		[
			"*.html",
			"_layouts/*.html",
			"_posts/*",
			"_includes/*.html",
			"pages/en/*.html",
			"pages/fr/*.html"
		],
		["jekyll-rebuild"]
	);
	gulp.watch(["assets/js/scripts.js"], ["jekyll-rebuild"]);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task("default", ["browser-sync", "watch"]);
