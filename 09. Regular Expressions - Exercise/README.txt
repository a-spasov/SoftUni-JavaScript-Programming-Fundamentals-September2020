01. Furniture
Write a function to calculate the total cost of different types of furniture. You will be given some lines of 
input until you receive the line "Purchase". For the line to be valid it should be in the following format:
">>{furniture name}<<{price}!{quantity}"
The price can be floating point number or whole number. Store the names of the furniture and the total price. 
At the end print the each bought furniture on separate line in the format:
"Bought furniture:
{1st name}
{2nd name}
…"
And on the last line print the following: "Total money spend: {spend money}" formatted to the second decimal point.

02. Race
Write a function that processes information about a race. On the first line you will be given list of participants
separated by ", ". On the next few lines until you receive a line "end of race" you will be given some info which 
will be some alphanumeric characters. In between them you could have some extra characters which you should ignore.
For example: "G!32e%o7r#32g$235@!2e". The letters are the name of the person and the sum of the digits is the 
distance he ran. So here we have George who ran 29 km. Store the information about the person only if the list of 
racers contains the name of the person. If you receive the same person more than once just add the distance to his 
old distance. At the end print the top 3 racers ordered by distance in descending in the format:
"1st place: {first racer}
2nd place: {second racer}
3rd place: {third racer}"

03. SoftUni Bar Income
Let`s take a break and visit the game bar at SoftUni. It is about time for the people behind the bar to go home and
you are the person who has to draw the line and calculate the money from the products that were sold throughout the
day. Until you receive a line with text "end of shift" you will be given lines of input. But before processing that
line you have to do some validations first.
Each valid order should have a customer, product, count and a price:
	- Valid customer's name should be surrounded by '%' and must start with a capital letter, followed by 
	lower-case letters;
	- Valid product contains any word character and must be surrounded by '<' and '>';
	- Valid count is an integer, surrounded by '|';
	- Valid price is any real number followed by '$';
The parts of a valid order should appear in the order given: customer, product, count and a price.
Between each part there can be other symbols, except ('|', '$', '%' and '.')
For each valid line print on the console: "{customerName}: {product} - {totalPrice}"
When you receive "end of shift" print the total amount of money for the day rounded to 2 decimal places in the 
following format: "Total income: {income}".


