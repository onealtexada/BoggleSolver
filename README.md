# Boggle Solver Web Application (Angular 1.x)

http://localhost:8080/BoggleSolver/

This is a simple Angular 1.x application that is easily run within the Eclipse IDE. It uses a Tomcat server to run the application.

This application is a 4x4 Boogle Board. When submitted, it will hit the Boggle_Solver Rest API (https://github.com/onealtexada/Boggle_Solver). Both applications must be running at same time.

# To run this application
Download this project into your Eclipse IDE
* Note: If an error is received, add a src folder to the Java Resources folder
Add the application to the embedded Tomcat Server located in your IDE
Start your embedded Tomcat Server
The application will run at http://localhost:8080/BoggleSolver/
Fully complete the Boggle Board with letters and hit 'Submit Board'
Once this is completed, the available words, scores, and total words / points information will be displayed.

## Caveats
* This is a very simple web design, as most focus was placed on Rest API codebase
* This project has been designed to support happy path processing. Additional  updates can be made to enforce improved error handling
* This application runs on port 8080, as the Rest API to support this project will run on port 8090

#Resources
Angular 1.x was used to create this simple front-end for development speed / simplicity

Eclipse Oxygen IDE used during development of application