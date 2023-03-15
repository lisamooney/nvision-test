const bs = require("browser-sync").create("NGRID");

module.exports = {
    task: (gulp, {}, registry) => {
        const {
            env: { DEV_URL },
            tasks: { styles, scripts },
        } = registry.config;

        const { hostname } = new URL(DEV_URL);

        const bsConfig = {
            host: hostname,
            proxy: DEV_URL,
            files: [
                "**/*.php",
                `${styles.dest}/**/*.css`,
                `${scripts.dest}/**/*.js`,
            ],
            ignore: ["node_modules/**/*"],
        };

        return function serve(done) {
            bs.init(bsConfig, done);
        };
    },
    dependencies: ["styles", "scripts"],
};
