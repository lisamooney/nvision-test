const notify = require( 'gulp-notify' );
const plumber = require("gulp-plumber");
const { sync: glob } = require("glob");
const { basename, resolve } = require("path");
const { cwd } = require("process");

const plumberHandler = (task) => {
    return plumber({
        errorHandler: function (err) {
            consoleErr = err;
            if (err?.plugin && err?.name && err?.message) {
                consoleErr = `${err.name} in plugin ${err.plugin}.\n${err.message}`;
            }

            notify.onError({
                title: `Error in ${task} task`,
                sound: process.env.NOTIFY || true,
            })(err);

            this.emit("end");
        },
    });
};

plumberHandler.stop = () => {
    return plumber.stop();
};

const loadTasks = (dirPath) => {
    if (typeof dirPath !== "string") {
        throw new Error("No path");
    }

    const taskFiles = glob("*.js", { cwd: dirPath });
    if (taskFiles.length === 0) {
        return {};
    }

    return taskFiles.reduce((acc, file) => {
        const taskName = basename(file, ".js");
        const taskInfo = require(resolve(dirPath, taskName));
        if (taskInfo.hasOwnProperty("task")) {
            acc[taskName] = taskInfo;
        } else {
            throw new Error(`Debug: ${taskName} does not have ${taskInfo}`);
        }

        return acc;
    }, {});
};

module.exports = {
    plumberHandler,
    loadTasks,
};
