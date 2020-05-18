# jaroopAssessment

Run npm install on terminal to install all the dependencies, then run npm tests to check all tests are passing. 
Run npm start to open up the project.

1. npm install 
2. npm test
3. npm start

Main view is a dashboar with users transactions, you can toggle between Dashboard and Profile components.
You can add more transactions, click the button on Dashboard and fill out the form with the valid inputs.

The transactions box is scollable.

I used miragejs to create a fake server, all routes are in index.js. 
I used fetch, but I usually prefer axios.

Changes (updating user profile or adding transactions) will not persist on refresh because I am not usind a database.


I started the project with crete-react-app and mainly worked on creating components and not on bundling or setting up a React project from scratch.

I tryied to keep it as modular as possible.
Entry point is in App.js and from there all the rendered components are in the Components folder.
I made two diffenrent form types for user update and new transaction just for the sake of it.

I wrote few tests, they are very basic so far. 
