/**
 * Master Cluster: set of events that would help trigger various actions in the system based on the
 * cluster that is being created
 */

const consoleLogger = require("./logger");

module.exports = (cluster) => {
  consoleLogger("Master Cluster is Active....");

  /* on forking */
  cluster.on("fork", (worker) => {
    const message = `Master Cluster: forked new worker (Worker ID: ${worker.id})`;
    consoleLogger(message, true);
  });

  /* on online */
  cluster.on("online", (worker) => {
    const message = `Master Cluster: new worker online (Worker ID: ${worker.id})`;
    consoleLogger(message, true);
  });

  /* on disconnect */
  cluster.on("disconnect", (worker) => {
    const message = `Master Cluster: worker disconnected (Worder ID: ${worker.id})`;
    consoleLogger(message, true);
  });

  /* on exit - worker dies, prints the details and creates a new worker */
  cluster.on("exit", (worker, code, signal) => {
    let message = `Master Cluster: worker has died. (Worker Id: ${worker.id})`;
    message += "\n";
    message += `${code}\n`;
    message += signal;
    consoleLogger(message, true);

    /* create new */
    cluster.fork();
  });
};
