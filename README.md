# Practise

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

	Setup required for developing angular project
1.	Please install nodejs:
https://nodejs.org/en/download/

2.	Please install vscode
https://code.visualstudio.com/download

3.	Please install angular CLI 
npm install -g @angular/cli

	Creating angular project
ng new SampleProgram


 
	Important app file configuration in angular project:
.
•	Src folder: It is the folder which contains the main code files related to our angular application
•	app folder: It contains the files which we have created for app components.
•	app.component.css: The file contains the CSS(cascading style sheets) code in our app component.
•	app.component.html: The file contains the HTML file related to its app component. Itis the template file which is specially used by angular to the data binding.
•	app.component.ts: It is the essential typescript file which includes the view logic beyond the component.
•	app.module.ts: It is also a typescript file which consists of all dependencies for the website. The data is used to define the needed modules has been imported, the components to be declared, and the main element to be bootstrapped.

package.json: It is the npm configuration file. It includes details of our website’s and package dependencies with more information about our site being a package itself.
Index.html: It is the entry file which holds the high-level container for the angular application.
main.ts: This is the main ts file that will run; first,  It is mainly used to define the global configurations.
tsconfig.json:  This is a typescript compiler of the configuration file.

	Now run ng serve
It helps us to build an app and serve it locally, the server automatically rebuilds the app and reloads the page when you change any of the source files.

Run ng serve for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

	Project description :
	I have created 1 component under Component folder named: WeatherForecastComponent.

WeatherForecastComponent .ts  file in order to share logical and  functional structure of our requirements.
WeatherForecastComponent .html : template file to display the ideas and concept in visual form on our browser.
WeatherForecastComponent .css : style sheet if we want to add some styling particular to this component and also that styling is not part of Global styling.

	I have created 1 service file: DesignUtilityService under Service folder:
•	I am using this DesignUtilityService service file to establish the communication between component and server containing API. Here we are bringing data from our API through this service file.
•	Using HttpClient module, we are accessing get() to get the response from server.

WeatherForecastComponent .ts: In this file, we are subscribing the observable to get the response.

	I have added Bootstrap CDN link to use different classes of Bootstrap to make UI more user friendly.
	Added Font Awesome JS file in src folder to use few glyphicons





