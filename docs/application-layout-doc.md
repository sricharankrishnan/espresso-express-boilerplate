# Application Layout and File Naming Conventions
The espresso scaffold follows an opiniated approach to building web applications with node.js. Following a meaningful folder structure and file naming convention helps standardize application builds and promotes easy knowledge transfer. Details of the application folder structure and file naming convetions are given below:

### server.js file
The root file of the application. When executing the command ```sh server.js```, the nodemon package targets this specific file. The file also contains the code for initializing the node.js clusters.

### ./src/controllers
Consists of two-level of directories and manages programs that handle the HTTP-Request & HTTP-Response objects. The following are the details of the sub-directories and the files in them:
  + ```./src/controllers/<project-name>/handlers```: files follow the ```[file-name].handler.js``` naming convention. Handles programs that manage HTTP-Request and HTTP-Response Objects.
  + ```./src/controllers/<project-name>/service```: files follow the ```[file-name].service.js``` naming convention. Usually contains programs that can be imported through the module.exports system or similar. Meant for programs that have business logic. (eg. data validation, creating a api request object etc...)
  + ```./src/controllers/<project-name>/data```: no specific file naming convention. Directory is useful for storing json file and any other data file or text files that are related to a parent project name.
  + ```./src/controllers/<project-name>/api```: files follow the ```[file-name].api.js``` naming convention. Programs in this directory help perform api requests to third party servers and return the data to the application that can be used for further processing.
  + ```./src/controllers/<project-name>/models```: files follow the ```[file-name].model.js``` naming convention. Useful for storing standardized api responses

### ./src/loaders
Files in this directory follow the ```[file-name].loader.js``` naming convention. The purpose of this directory is to contain programs that help initialize npm packages or provide a place for setting up configurations. Refer to some of the files in this directory to know more.

### ./src/logs
Files in this directory follow the ```app-log-[YYYY-MM-DD]-file.log``` naming convention. Comprises of all log files for the applications. Developers are expected to further build other infrastructure to cater to project specific log retention and deletion requirements.

### ./src/middleware
Files in this directory follow the ```[file-name].middleware.js``` naming convention. The directory contains all programs that act as middleware for varoious routes in the web application. There are no specific folder structures in this directory, developers can build upon this space as per project requirements.

### ./src/public
Files that need to be publicly accessible are stored in this directory. Example are sitemap files for e-commerce websites.

### ./src/routes
Files in this directory follow the ```[file-name].route.js``` naming convention. The directory contains all programs that help manage the various routes of the web application. There are no specific standards for folder structures in this directory however, you can refer to the example structure proposed in the scaffold at [this place](https://github.com/sricharankrishnan/espresso-express-boilerplate/tree/master/src/routes).

### ./src/static
This directory houses all frontend related assets for the web application. [EJS](https://ejs.co/) is the templating engine that espresso uses and the folder structured offered in the static directory is an example of how frontend related assets can be organized for a node.js web application. You can view the static directory for the scaffold [here](https://github.com/sricharankrishnan/espresso-express-boilerplate/tree/master/src/static). Furthermore, you an re-arrange the directory structure as per project requirements if this layout is not suitable.

### ./src/utils
Files in the utils directory do not follow any specific file naming convention. Any program that is meant to be globally imported in the form of a convenient functional interface can be placed here. For example, to create web cookies, you can import the ```./src/utils/app-cookie-builder.js``` file and pass in arguments as required to create cookies. Sample applies for the ```./src/utils/logger.js``` file.
