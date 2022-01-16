# SRC Directory
<br/>
The src directory is the heart of an Espresso Application. This is the place you will spend a majority of your time when you are building your web application using Espresso. There are various sub directories, each of them have their own purpose. You  can initialize a new Route, create a new Middleware, writing business logic for a Route Handler, this directory serves such a purpose.<br/><br/>

Rather than having all of its content and directories being placed in the root level of the application, the SRC directory was considered as a suitable alternative. It is meant to provide a slightly more appealing directory interface for developers as it encapsulates the heart of the application and its files. Developers can benefit from a good directory structure within an application, clearly understand what was meant to be where.
<br/><br/>

## Whats Inside
<strong>Loaders</strong> - applications require some level of initial configuration to help them perform various tasks. The Loaders directory contains various files that help contribute to the start up and initial configuration of the application. NPM packages that are downloaded and built into a system, will often require some level of configuration. This is the ideal directory to initialze any NPM package that you would be installing as a part of your project requirements. If there are any other files that require an initialization that is unique to your application, this is the place to save them. Files placed in this directory should follow the pattern ```${filename}.loader.js``` and following are the pre-built files:

+ <b><em>index.loader.js:</em></b> - is connected to all the loader files in the directory. This is imported into the main server.js file and is executed, which in turn executes the other loaders in the application. So if you have a new loader file that you wish to add, start from here and require it as per the file path
+ <b><em>app.loader.js:</em></b> - various configurations for the application in terms of the directory for static assets etc.
+ <b><em>app-templating-engine.loader.js:</em></b> - the file that initializes the templating engine. Espresso uses EJS but feel free to make changes to which ever templating engine that you're comfortable with. Please note that the application comes with certain Demo HTML files, if things break when you change the templating engine, it probably means that you need to fix the UI as well or build one yourself
+ <b><em>body-parser.loader.js:</em></b> - refers to the loader file for [NPM Body Parser](https://www.npmjs.com/package/body-parser). Refer to the body parser documentation for more info incase you wish to understand how this works.
+ <b><em>compression.loader.js:</em></b> - a loader file from [NPM Compression](https://www.npmjs.com/package/compression). There are sufficient example available on the internet that discuss the advantages of having some form of compression. Very helpful for websites. Take a look at the conditional statement wrriten for <em>'x-no-compression'</em> request header which will then skip the compression process.
+ <b><em>cookie-parser.loader.js</em></b> - the [NPM Cookie Parser](https://www.npmjs.com/package/cookie-parser) package is initialized in this file. The cookie parser is responsible for collecting and placing cookie data as either regular cookies (which can be accessed @ req.cookies) or special signed cookies (these are accessed @ req.signedCookies). The cookie parser apart from other functionalities can take a string value which can be used as the <em>Secret</em> for signed cookies. [Refer Express JS Docs](https://expressjs.com/en/4x/api.html#res.cookie).
+ <b><em>helmet.loader.js:</em></b> - every web application must have basic security directive and policies in place to create a safe environment for your users. [NPM Helmet](https://www.npmjs.com/package/helmet) is an extremely useful package designed to configure various HTTP response headers for improving application security. Espresso covers as many features as possible that is offered by Helmet. Take a look at this file and make changes as needed for your project.
+ <b><em>ignore-default-favicon.loader.js:</em></b> - although this is not an NPM Package, this is being placed to help prevent that pesky favicon route not found error in your express application. Try disabling this and see what I mean.
+ <b><em>morgan-request-logger.loader.js:</em></b> - [NPM Morgan](https://www.npmjs.com/package/morgan) is an HTTP request logger middleware for node.js that you can use in your application to see how requests are coming in and their respective status. In this application, morgan outputs are not only being placed on the console for you to see but also, placed in the log files as a record of what requests have come in. If you wish to disable this, you can comment out Morgan in the index.loader.js file
+ <b><em>response-time.loader.js:</em></b> - [NPM Response Time](https://www.npmjs.com/package/response-time) is a package that serves as a middleware, that helps provide the response time for requests to HTTP servers. The package adds a <u>X-Response-Time</u> header to responses. A small but easy to integrate package, perhaps it would be useful in some way or the other.
+ <b><em>rfs.loader.js:</em></b> - a brilliant NPM package to have in your web server/application especially when it comes to controlling log files and writing information to them. [NPM Rotating File Stream](https://www.npmjs.com/package/rotating-file-stream) is a package worth learning and you should know your way around this package if you need to make changes to log files that are suitable for your project requirements.
<br/><br/>

<strong>Middleware</strong> - following the principles of middleware in ExpressJS, any portion of your application that needs to be handled before reaching your routes (either in the beginning like authentation checks) needs to be placed in this directory. Files placed in this directory should ideally be named in the pattern ```${filename}.middleware.js```. It is advised to follow the prescribed naming convention to help you understand the type of file that you would be working with. The internal structure of this directory can be chanegd as per your liking.
<br/><br/>

<strong>Models</strong> - files placed in the models directory should ideally be named in the pattern ```${filename}.model.js```, also, this could also be the perfect place to store view objects for your front end HTML files. The model component in MVC mostly stores data and all its relevant logic. If you plan out your project well, things could shape up in a good way for you when using this directory.
<br/><br/>

<strong>Routes</strong> - having a seperate directory for storing your routes is an effective way to build large applications. Every possible route that your application needs to have must fall into this directory. Make that a standard. The entry point to this directory is the ```index.route.js``` file. All files in this directory should follow the pattern ```${filename}.route.js```.
<br/><br/>

<strong>Controllers</strong> - every route in your application will require a route handler. All route handlers receiving the ```Request``` and ```Response``` object shall be placed here. These files shall then be imported into the Routes directory. It is adviceable to name a route handler file in the pattern ```${filename}.handler.js```. You can choose to adopt the directory structure built into this section or choose to build your own.
<br/><br/>

<strong>Public</strong> - after you've downloaded the application and completed installation, goto http://localhost:4500/notes.txt and you will notice that the notes.txt file comes from the public folder. The purpose of this folder is providing something that should be publicly available (like some simple txt files and even sitemaps for seo requirements), place them here and you should be able to access them directly. The configuration for this directory is at ./src/loaders/app.loader.js file. This is also a good place to save Sitemap XML files for your application.
<br/><br/>

<strong>Static</strong> - good place to keep all your frontend static assets. Goto the ./src/loaders/app.loader.js file and you will see the configurations for these static files. There are currently 4 top level directories each with their own purpose - <b>views</b> is where all your html files go, <b>scripts</b> is where all your javascript files go, <b>css</b> is for your stylesheets and <b>assets</b> is for images, icons and videos. HTML files are built using [EJS Templating Engine](https://ejs.co/) and if you study the HTML file layouts, you'll get to understand how this all comes together. You can choose to adopt the given directory structure or create your own.
<br/><br/>

## Conclusion
Here are the key takeways from this directory for you:
+ Files in the src directory will follow a certain naming pattern.
+ Follow a structured approach to developing your application in the best way that you can.
+ Avoid problems and issues with On boarding and Knowledge Sharing with good directory structure and proper file naming conventions.
+ Take charge of developing your own directory structure if you wish to beyond the main listed directories.
