# CandidateSearch
An application that retrieves candidate names for an HR to filter through
This application is built using React, Asp.Net Core, and SQL Server.
After downloading the code, Visual Studio should handle downloading the packages.
You need to make sure to have the correct connection string inside appsettings.Json if your SQL Server connection is not SQL Express or if you want to use a database other than CandidateSearch.
After that, make sure to have the table in the DB set, that could be done by creating a table in the database with the correct columns as per the model in the models folder of the backend solution
Then, make sure to enter the ClientApp folder and run npm install to install any dependencies needed for react.
Then just run iisexpress from visual studio (preferably visual studio 2019 and you're set to go.
