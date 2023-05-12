In order to install the project, it is recommended to install it in a test environment with a node js version >= 18
In the root of the project, execute the "npm install" command to be able to install the necessary dependencies for the program to run..

After that you have to enter the folder called Insomnia-Sql where there are 2 files, the first one is the json schema to import it into insomnia and thus access the API methods and the second file is the database-backup. sql which is the sql backup of the database used for the program (made in postgresql).

After that change the name of the .env.example file to ".env" and change the credentials to be able to connect to the database and change the ip to the ip of the machine where the tests will be done

With that the program should be working, to see the API documentation you can enter the ip and port defined in the ".env" file and add "/docs" to the end of the url to access the documentation with swagger .

In the same way, a folder called "screenshots" was created where screenshots of the operation of the API go.
