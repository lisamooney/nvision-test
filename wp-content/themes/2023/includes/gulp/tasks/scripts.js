const { createGulpEsbuild } = require("gulp-esbuild");
const gulpEsbuild = createGulpEsbuild({
    incremental: true, // enables the esbuild's incremental build
    piping: true, // enables piping
});
const { plumberHandler } = require("../helpers");

module.exports = {
    task: (gulp, { src, dest }) => {
        return function scripts(done) {
            return gulp
                .src(src)
                .pipe(
                    gulpEsbuild({
                        outfile: "app.js",
                        bundle: true,
                        // minify: true,
                        format: "iife",
                    })
                )
                .pipe(plumberHandler("scripts"))
                .pipe(gulp.dest(dest, { sourcemaps: "." }));
        };
    },
    config: {
        src: "scripts/app.js",
        watch: ["scripts/**/*.*"],
        dest: "build",
    },
};
