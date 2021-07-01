01. Train
You will be given an array of strings.
The first element will be a string containing wagons (numbers). Each number inside the string represents the number of passengers that 
are currently in a wagon. The second element in the array will be the max capacity of each wagon (single number). The rest of the 
elements will be commands in the following format:
•	Add {passengers} – add a wagon to the end with the given number of passengers.
•	{passengers} -  find an existing wagon to fit all the passengers (starting from the first wagon)
At the end print the final state of the train (all the wagons separated by a space)

02. Distinct Array
You will be given an array of integer numbers on the first line of the input (space-separated). Remove all repeating elements from the 
array. Print the result elements separated by single space.

03. House Party
Write a function that keeps track of guests that are going to a house party.
You will be given an array of strings. Each string will be one of the following:
-	"{name} is going!"
-	"{name} is not going!"
If you receive the first type of input, you have to add the person if he/she is not in the list (If he/she is in the list print: 
"{name} is already in the list!").
If you receive the second type of input, you have to remove the person if he/she is in the list (if not print: "{name} is not in the 
list!"). At the end print all the guests each on a separate line.

04. Sorting
Write a function that sorts an array of numbers so that the first element is the biggest one, the second is the smallest one, the third
is the second biggest one, the fourth is the second smallest one and so on. 
Print the elements on one row, separated by single space.

05. Sort an Array by 2 Criteria
Write a function that orders an array of strings, by their length in ascending order as primary criteria, and by alphabetical value in a
scending order as second criteria. The comparison should be case-insensitive. The input comes as array of strings. The output is the 
ordered array of strings.

06. Bomb Numbers
Write a function that receives two parameters: sequence of numbers and special bomb number with a certain power. 
Your task is to detonate every occurrence of the special bomb number and according to its power his neighbors from left and right. 
Detonations are performed from left to right and all detonated numbers disappear. The input contains two arrays of numbers. The first 
contains the initial sequence and the second contains the special bomb number and it's power. The output is the sum of the remaining 
elements in the sequence.

07. Search for a Number
You will receive two arrays of integers. The second array is contains exactly three numbers. First number represents the number of 
elements you have to take from the first array (starting from the first one). Second number represents the number of elements you have 
to delete from the numbers you took (starting from the first one). Third number is the number we search in our collection after the 
manipulations. As output print how many times that number occurs in our array in the following format: 
"Number {number} occurs {count} times."

08. Array Manipulator
Write a function that receives an array of integers and array of string commands and executes them over the array. The commands are as 
follows: add <index> <element> – adds element at the specified index (elements right from this position inclusively are shifted to the 
right); addMany <index><element 1> <element 2> … <element n> – adds a set of elements at the specified index; contains <element> – 
prints the index of the first occurrence of the specified element (if exists) in the array or -1 if the element is not found; 
remove <index> – removes the element at the specified index; shift <positions> – shifts every element of the array the number of 
positions to the left (with rotation); sumPairs – sums the elements in the array by pairs (first + second, third + fourth, …);
print – stop receiving more commands and print the last state of the array.

09. Gladiator Inventory
As a gladiator, Peter has cool Inventory. He loves to buy new equipment. You are given Peter’s inventory with all of his equipment -> 
strings, separated by whitespace. You may receive the following commands: Buy {equipment}; Trash {equipment}; Repair {equipment}; 
Upgrade {equipment}-{upgrade}. If you receive Buy command, you should add the equipment at last position in the inventory, but only if 
it isn't bought already. If you receive Trash command, delete the equipment if it exists. If you receive Repair command, you should 
repair the equipment if it exists and place it on last position. If you receive Upgrade command, you should check if the equipment 
exists and insert after it the upgrade in the following format: "{equipment}:{upgrade}";

10. Build a Wall 
Write a program that keeps track of the construction of a 30-foot wall. You will be given an array of strings that must be parsed as 
numbers, representing the initial height of mile-long sections of the wall, in feet. Each section has its own construction crew that 
can add 1 foot of height per day by using 195 cubic yards of concrete. All crews work simultaneously (see examples), meaning all 
sections that aren't completed (are less than 30 feet high) grow by 1 foot every day. When a section of the wall is complete, its crew 
is relieved. 
Your program needs to keep track of how much concrete is used daily until the completion of the entire wall. At the end, print on a single line, separated by comma and space, the amount of concrete used each day, and on a second line, the final cost of the wall. One cubic yard of concrete costs 1900 pesos. 







