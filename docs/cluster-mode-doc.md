# Espresso Uses NodeJS Cluster Module
Espresso uses the node.js cluster module since node.js runs on a single thread. The node.js Cluster module is a simple yet effective way to help improve the performance of your application. Through this module, your application will be able to maximize on utilizing the number of CPU processors of your host environment.
<br/><br/>

## What's Inside
The cluster module becomes active only when the application NODE_ENV is set to "production". The intention behind this is to keep terminal logs minimal and user friendly during development. The cluster module along with the OS module are initially imported in the ```server.js``` file:
```js
let cluster = require("cluster");
let os = require("os");
```
<br/>A conditional statement checks the state of the cluster and if its the Master Cluster (along with the NODE_ENV being 'production'), then workers are forked and spawned into your server:
```js
appClustering() {
  let $this = this;

  /* Espresso targets all possible processors on a server, since node js is single threaded. 
     Maximizing efficiency with Node Js Cluster Module [Works on production mode to keep the logging simple and easy] */
  if (cluster.isMaster && process.env.NODE_ENV === "production") {
    $this.master();
  }
  else {
    $this.worker();
  }
}

/* initializes all workers based on the number of processors */
master() {
  let $this = this;

  os.cpus().forEach((item) => {
    cluster.fork();
  });
}

/* the worker that gets created by the master */
worker() {
  let $this = this;

  /* start the server */
  $this.app.listen(PORT, function() {
    consoleLogger("App running @ http://localhost:" + PORT + ". Press CTRL + C to Terminate.");
  });
}
```

<br/>The application also ensures to make log entries for the cluster (applicable only if the cluster is in the 'Master State' - although if you know your way around the application, you could add events for the workers too!). The file located at ```./utils/cluster-handler.js``` is responsible for this. Should you wish to not have these log outputs and prevent them from being created in the log files simply comment out this function in the ```server.js``` file:
```js
  /* ok here we go! */
  init() {
    let $this = this;

    $this.appClustering();
    
    /* this will disable the event based logging for clusters module */
    /* clusterHandler(cluster); */
  }
```
<br/>With this, you can help provide a boost to your application performance. Consider stress testing this to check the difference between applications that do and do not use cluster module.

## Conclusion
[Node.js Cluster and Express @ Rowan Manning](https://rowanmanning.com/posts/node-cluster-and-express/) is a good reference available to understand how to use the NodeJS Cluster module. Also, [NodeJS Cluster Events](https://nodejs.org/api/cluster.html) provides more information that can be useful.
