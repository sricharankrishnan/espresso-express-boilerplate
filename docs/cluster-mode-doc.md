# Espresso Uses NodeJS Cluster Module
Espresso uses the nodejs cluster module, due to the fact that by default NodeJS runs on a single thread. Although this may be sufficient, there are cases where up scaling your application's performance by using the cluster module can help. This is a simple but and effective way by which your application can use all the available processors in your host environment/server.
<br/><br/>

## What's Inside
Please note that the cluster module becomes active only on production mode. It has been intentionally done this way to keep the terminal logs user friendly during development. Otherwise you many need to sift through piles of logs when you spend time developing your application or making changes. The cluster module along with the OS module are initially imported in the ```server.js``` file:
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
<br/>Yup as simple as that!

## Conclusion
There are quite a few articles on the internet that I have come across that have help me understand this. But I think [Node.js Cluster and Express @ Rowan Manning](https://rowanmanning.com/posts/node-cluster-and-express/) does a pretty good job of explaining this. I would also recommend that you take a look at [NodeJS Cluster Events](https://nodejs.org/api/cluster.html) for more information. Cheers.
