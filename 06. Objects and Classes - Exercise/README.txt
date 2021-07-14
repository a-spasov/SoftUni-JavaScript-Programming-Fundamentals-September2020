01. Employees
You're tasked to create a list of employees and their personal numbers. You will receive an array of strings. Each string is an 
employee name and to assign them a personal number you have to find the length of the name (whitespace included). Try to use an object.
At the end print all the list employees in the following format: "Name: {employeeName} -- Personal Number: {personalNum}" .

02. Towns
You’re tasked to create and print objects from a text table. You will receive input as an array of strings, where each string represents
a row of a table, with values on the row separated by pipes "|" and spaces. The table will consist of exactly 3 columns "Town", 
"Latitude" and "Longitude". The latitude and longitude columns will always contain valid numbers. The output should be objects. Latitude
and longitude must be parsed to numbers and formatted to the second decimal point!

03. Store Provision
You will receive two arrays. The first array represents a current stock of the local store. The second array will contain products 
which the store has ordered for delivery. Every even index will hold the name of the product and on every odd index will hold the 
quantity of that product. The second array could contain products that are already in the local store. If that happens increase the 
quantity for the given product .You should store them into an object, and print them in the following format: (product -> quantity) .
All of the arrays values will be strings.

04. Movies
Write a function that stores information about movies. The info will be name, director, date. You can receive several types on input:
•"addMovie {movie name}" – add the movie;
•"{movie name} directedBy {director}" – check if the movie exists and then add the director;
•"{movie name} onDate {date}" – check if the movie exists and then add the date;6
At the end print all the movies that have all the info (if the movie has no director, name or date, don’t print it) in JSON format.


