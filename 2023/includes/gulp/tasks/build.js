module.exports = {
    task: (gulp, { build: buildTasks }, registry) => {
        function runParallel(tasks) {
            if (!Array.isArray(tasks) || tasks.length === 0) {
                return [];
            }
            return [gulp.parallel(...tasks)];
        }

        const buildSeries = [...runParallel(buildTasks)];

        const build = gulp.series(...buildSeries);
        return build;
    },
    config: {
        build: ["styles", "scripts"],
    },
    dependencies: ({ build }) => {
        const tasks = new Set([...build]);
        return Array.from(tasks);
    },
};
