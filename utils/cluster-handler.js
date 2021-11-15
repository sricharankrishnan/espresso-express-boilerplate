const __base = global.approot;
const consoleLogger = require(__base + "/utils/logger.js");

const masterEvents = (cluster) => {
  consoleLogger("Master Cluster is Active....");

  /* on forking */
  cluster.on("fork", (worker) => {
    let message = `Master Cluster: forked new worker (Worker ID: ${worker.id})`;
    consoleLogger(message, true);
  });

  /* on online */
  cluster.on("online", (worker) => {
    let message = `Master Cluster: new worker online (Worker ID: ${worker.id})`;
    consoleLogger(message, true);
  });

  /* on disconnect */
  cluster.on("disconnect", (worker) => {
    let message = `Master Cluster: worker disconnected (Worder ID: ${worker.id})`;
    consoleLogger(message, true);
  });

  /* on exit - worker dies, prints the details and creates a new worker */
  cluster.on("exit", (worker, code, signal) => {
    let message = `Master Cluster: worker has died. (Worker Id: ${worker.id})`;
    message += "\n";
    message += code + "\n";
    message += signal;
    consoleLogger(message, true);
    
    /* create new */
    cluster.fork();
  });
};

module.exports = (cluster) => {
  masterEvents(cluster);
};
