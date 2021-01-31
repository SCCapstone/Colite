# Colite Technology README File

## APP DESCRIPTION:
Our project is centered around working with Colite Technologies, a company helping businesses switch to renewable energy sources that promote sustainable business and energy resilience. Some of the features we will implement will be:

- Red flags to show batteries' deep discharge, and other abnormalities
- Develop a database and web application that will let users view visualizations of the data the system receives from Colites systems
- Handle data from poles that generate more than 20 data points each from PV panels, wind turbines, batteries, etc. at a 2 second interval (mock data will be used in the current execution)

The main technologies being used will be Amazon Web Services, MYSQL, and HTML/Vue.js, as well as Python for testing features. We will be communicating with Colite Technologies, and the USC electrical engineering capstone team throughout the project to ensure successful coordination and completion.

## Running the Application (Open 2 Terminal Windows)

### 1st Window

#### Install NPM from nodejs.org
```
npm install
```

#### cd into nodejs-express-sequelize-mysql folder
```
cd Colite/nodejs-express-sequelize-mysql
```
#### Install dependent libraries
```
npm install
```

#### Run API
```
node server.js
```

### 2nd Window

#### cd into frontend directory
```
cd Colite/frontend
```

#### Install Vue.JS
```
npm install -g@vue/cli
```
#### Install Express
```
npm install express
```

#### Install Sequalize
```
npm install sequelize
```

#### (Optional) The user can also install vue devtools to be able to format and view changes easier. 
```
This can be installed through the google chrome store. 
```

#### Install Axios/Ajax
```
npm install axios
```

#### Install Bootstrap
```
npm install vue bootstrap-vue bootstrap
```

### Production Use

#### Compiles and minifies for production
```
npm run build
```
#### To view application go to
```
localhost:8080
```
### Development Use

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Lints and fixes files
```
npm run lint
```
## Requirements

#### Backend SQL Requirements
- The user will need to have MySQL installed.
- The user will need to have MySQL workbench installed.
- The user will need to have security credentials to access the database.
- The user will need to have the IP for the database.

###
- To install express and node.js for the backend run the following:
```
npm install express sequelize mysql2 body-parser cors --save
```

### Requirements to Run
- npm
- vue.js
- axios
- postscribe
- bootstrap
- sequelize
- express

### Deployment

- The application will be hosted on an AWS server
- The MySQL Database will be hosted on AWS


#### Testing

- The unit tests will be located in frontend/tests/units
- The behavioral tests will be located in frontend/tests/behavioral
- BEHAIVORAL TESTING:
The behaivoral tests will be run using the Selenium IDE which lets us automate web browing.

*Prerequisites:
> brew install node
> npm install -g selenium-side-runner

*Installing Browser Drivers:
Chrome:
> npm install -g chromedriver
Edge:
> npm install -g edgedriver
Internet Explorer:
> npm install -g iedriver

*Launching the Runner:
> selenium-side-runner /frontend/tests/behavioral/behavior-tests.side

*TO RUN THE BEHAVIORAL TEST
- The command below worked for me on my terminal, I was in C:Users\haywa and then ran the commands:
> npm install -g selenium-side-runner
> npm install -g chromedriver
OR Install 88.0.4324.27 from:
http://chromedriver.storage.googleapis.com/index.html?path=88.0.4324.27/
THEN run the command: (replace ronro with your username or adjust path as intended)
>  selenium-side-runner C:\Users\ronro\Documents\GitHub\Colite\frontend\tests\behavior\behavior-test.side

## Authors

- Matthew Hayward mhayward@email.sc.edu
- Andrew Denman adenman@email.sc.edu
- Simon Benzer sbenzer@email.sc.edu
- Kundana Narla knarla@email.sc.edu

#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
