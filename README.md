# dashboard-assessment

This document provides step-by-step instructions on how to set up and run the app. The app consists of a client-side React application and a server-side Node.js application connected to a MongoDB database.

Server Setup
Change directory to the ‘server’ folder - cd server
Run ‘npm install’ to install the dependencies
Run ‘npm start’ to start up the server

Client Setup
Change directory to the client folder - cd client
Run ‘npm install’ to install the dependencies
Run ‘npm start’ to start up the react app
To run tests on the App.tsx file, run "npm run test"

Note
You will notice that the server.js file in the server directory has some code commented out. These are functions meant to add data to the Mongodb database.
If you wish to try adding data to the database, you could uncomment out the code and also uncomment the “await insertSalesData()” in the startServer function.
