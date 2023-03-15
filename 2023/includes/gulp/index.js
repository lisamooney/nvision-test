const env = require("dotenv").config();
const { resolve } = require("path");
const { loadTasks } = require("./helpers");
const GulpRegistry = require("./registry");

function init(gulp, config = {}) {
    const localTasks = loadTasks(resolve(__dirname, "tasks"));
    const tasks = Object.assign({}, localTasks);
    const NGRID = new GulpRegistry(gulp, tasks, config);

    config.env = {
        ...env.parsed,
    };

    gulp.registry(NGRID);

    return NGRID;
}

module.exports = init;
