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

05. Inventory
Create a function which creates a register for heroes, with their names, level, and items (if they have such). 
The input comes as array of strings. Each element holds data for a hero, in the following format:
“{heroName} / {heroLevel} / {item1}, {item2}, {item3}...” 
You must store the data about every hero. The name is a string, the level is a number and the items are all strings.
The output is all of the data for all the heroes you’ve stored sorted ascending by level and the items are sorted alphabetically. 
The data must be in the following format for each hero:
Hero: 
{heroName}
level => {heroLevel}
Items => {item1}, {item2}, {item3}

06. Make a Dictionary
You will receive an array with strings in the form of JSON's. 
You have to parse these strings and combine them into one object. Every string from the array will hold terms and a description. If you 
receive the same term twice replace it with the new definition.
Print every term and definition in that dictionary on new line in format:
Term: ${term} => Definition: ${definition}
Don't forget to sort the dictionary alphabetically by the terms as in real dictionaries.

07. Class Vehicle
Create a class with name Vehicle that has the following properties:
• type – a string
• model – a string
• parts – an object that contains:
	engine – number (quality of the engine)
	power – number
	quality – engine * power
• fuel – a number
• drive – a function that receives fuel loss and decreases the fuel of the vehicle by that number
The constructor should receive the type, the model, the parts as an object and the fuel



