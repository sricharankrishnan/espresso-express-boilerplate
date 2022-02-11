# Features of Espresso<br/>
Espresso is equipped with the following set of programs and features designed to help developers follow an opiniated approach to building web applications. This section highlights the key features of the application for brevity sake:

### Backend Javascript Framework and Folder Structure
Espresso uses the Express.js framework. Minimalism, sufficient documentation, maturity, availability of online tutorials and other blogs are the reasons why express.js was chosen. The espresso scaffold uses a 3 level folder hierarchy structure, each meant to have relationship with its parent directory as well as sibiling directories. Efforts were taken to create an application layout to reduce time for planning and facilitate easy repeated access to files. 

### Helmet.js
In order to ensure that developers are given a scaffold that adheres to basic application security, espresso comes equipped with helmet.js, an open source npm package designed to improve web application security through HTTP headers. Developers are expected to have some working knowledge of HTTP Security headers. Suitable references for this topic are at [Mozilla Development Network](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) and [OWASP Secure Headers Project](https://owasp.org/www-project-secure-headers/). 

### Reducing OSS Vulnerabilities through Synk Integration
Open source technology serves to resolve applications requirements and improve development time. However, not all software developers who are eager to help, are aware of security issues that can be created with programming mistakes. Espresso is integrated with Snyk.io, an online developer security platform designed to detect security vulnerabilities and address them with available solutions. Checkout their website at [https://snyk.io/](https://snyk.io/)

### Logging System
The [Rotating File System](https://www.npmjs.com/package/rotating-file-stream) is the NPM package that espresso relies on to build an application logging system. Being able to set limitations on log files and manage file naming along with other customizable features were the reasons why this package was chosen. All the log files are stored at the ```./src/logs``` directory in the application.

### Handling Web Cookies
A common utility file at ```./src/utils/app-cookie-builder.js``` contains the javascript program that helps developers build web cookies for the application. Cookies are created by default with ```HTTPOnly=TRUE```, ```MaxAge=3600000 (milliseconds)```, ```Secure=TRUE```, ```Signed=FALSE``` and ```SameSite=Strict```. When importing this program into other sections of the application, the method signature is ```cookieCreator(<CookieName>, <CookieValue>, <CookieConfig>)``` where cookie config is a javascript object whose settings override the default configuration. Refer to [res.cookie(name, value [, options])](https://expressjs.com/en/4x/api.html#res.cookie) to see the possible set of values.
