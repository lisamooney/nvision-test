const UndertakerRegistry = require("undertaker-registry");
const merge = require("deepmerge");

const overwriteArrayMerge = (destinationArray, sourceArray, options) =>
    sourceArray;
const { DepGraph } = require("dependency-graph");

class GulpRegistry extends UndertakerRegistry {
    constructor(gulp, tasks = {}, config = {}) {
        super();
        this.gulp = gulp;
        this.taskData = tasks;
        this.config = config;
    }

    init({ task }) {
        const { gulp, taskData, config } = this;
        config.tasks = config.tasks || {};
        const graph = new DepGraph();

        for (const [taskName, taskInfo] of Object.entries(taskData)) {
            graph.addNode(taskName);
            const taskConfig = (config.tasks[taskName] = merge(
                taskInfo?.config || {},
                config.tasks[taskName] || {},
                {
                    arrayMerge: overwriteArrayMerge,
                }
            ));

            const { dependencies = [] } = taskInfo;
            const deps =
                typeof dependencies === "function"
                    ? dependencies(taskConfig)
                    : dependencies;
            if (Array.isArray(deps) && deps.length) {
                for (const dep of deps) {
                    graph.addNode(dep);
                    graph.addDependency(taskName, dep);
                }
            }
        }

        const taskOrder = graph.overallOrder();

        for (const taskName of taskOrder) {
            if (!taskData.hasOwnProperty(taskName)) {
                throw new Error(
                    `Task ${taskName} does not exist deps: ${graph.dependantsOf(
                        taskName
                    )}`
                );
            }

            const taskConfig = config.tasks[taskName];

            const { task: taskFn } = taskData[taskName];
            task(taskName, taskFn(gulp, taskConfig, this));
        }

        task("default", this.get("dev"));
    }
}

module.exports = GulpRegistry;
