const cleanCSS = require("gulp-clean-css");
const filter = require("gulp-filter");
const sass = require("gulp-sass")(require("sass"));
const sassGlob = require("gulp-sass-glob-use-forward");
const sassGlobLegacy = require("gulp-sass-glob");
const { plumberHandler } = require("../helpers");

module.exports = {
    task: (gulp, { src, dest }) => {
        return function styles(done) {
            const sassFilter = filter("*.s[a|c]ss", { restore: true });
            return gulp
                .src(src, {
                    sourcemaps: true,
                })
                .pipe(plumberHandler("styles"))
                .pipe(sassGlobLegacy())
                .pipe(sassGlob())
                .pipe(sassFilter)
                .pipe(
                    sass
                        .sync({
                            indentType: "tab",
                            outputStype: "expanded",
                        })
                        .on("error", done)
                )
                .pipe(sassFilter.restore)
                .pipe(cleanCSS({ level: 2 }))
                .pipe(gulp.dest(dest, { sourcemaps: "." }));
        };
    },
    config: {
        src: "styles/app.scss",
        watch: ["styles/**/*.*"],
        dest: "build",
    },
};
