const { relative, resolve, dirname, parse } = require("path");
const del = require("del");

module.exports = {
    task: (gulp, { tasks }, registry) => {
        const mirrorDelete = (task, mirrorDeletion) => {
            const taskConfig = registry.config.tasks[task];

            return (filepath) => {
                const relPath = relative(
                    resolve(taskConfig.srcBase || taskConfig.src),
                    resolve(dirname(filepath), `${parse(filepath).name}`)
                );

                const destPath = resolve(taskConfig.dest, relPath);
                const delFiles = Array.isArray(mirrorDeletion)
                    ? mirrorDeletion.map((ext) => `${destPath}${ext}`)
                    : `${destPath}${mirrorDeletion}`;
                del(delFiles).then((paths) => {});
            };
        };

        return function watch() {
            for (let task of tasks) {
                let mirrorDeletion = false;

                if (typeof task === "object" && task.hasOwnProperty("task")) {
                    mirrorDeletion = task.mirrorDeletion || mirrorDeletion;
                    task = task.task;
                }
                const taskConfig = registry.config.tasks[task];
                const watcher = gulp.watch(
                    taskConfig.watch || taskConfig.src,
                    {
                        cwd: "./",
                        ignored: (path) => path.includes("node_modules"),
                    },
                    registry.get(task)
                );

                if (mirrorDeletion) {
                    watcher.on("unlink", mirrorDelete(task, mirrorDeletion));
                }
            }
        };
    },
    config: {
        tasks: [
            {
                task: "styles",
                mirrorDeletion: [".css", ".css.map"],
            },
            {
                task: "scripts",
                mirrorDeletion: [".js", ".js.map"],
            },
        ],
    },
    dependencies: ({ tasks }) => {
        return tasks.map((task) =>
            typeof task === "string" ? task : task.task
        );
    },
};
