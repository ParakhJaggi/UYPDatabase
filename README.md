User Manual
How to run
1.	We recommend running this program in IntelliJ, as that’s the IDE that we are using without any problems. We use a gradle build, with a node package manager, RESTful API, React frontend, JDBC database hosted locally, and a Spring framework for the project. 
2.	Go to “edit run configurations” and type “-Dspring.profiles.active=development” into the VM options. Make sure you are using a local or gradle wrapper and have Java 10.
3.	Go to your MySQL server and verify that you have an account with username: “root” and a password “test1234”. Run the SQL command that’s in the file “SQLCommand.txt” we provided, to create the schema and tables required.
4.	Type “npm install” into the terminal to install the node modules and package
5.	Run the program using the run configuration we edited in step 2.
6.	Type “npm run dev” into the terminal for the front end to start
7.	The program should run without issues at this point
8.	The website is hosted locally on port 8080, we suggest opening Google Chrome and typing in http://localhost:8080 into the address field.
9.	We provided an admin for the website by default, the login credential for this account is username: “admin” with password: “admin123”. Use this account to accept the applicants and other admin features.
10.	If you run into any problems check out the section below!

Error Fixes & Known Issues:
•	We have an issue loading components with React, as we just started learning the language, so if you have any issues on a page, just refresh the page and it will load the components correctly the second time.

•	Any node module error: Delete the “node_modules” and “package-lock.json” file and run the command “npm install” in the terminal.

 
