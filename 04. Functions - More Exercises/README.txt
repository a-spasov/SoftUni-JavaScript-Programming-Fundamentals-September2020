01. Car Wash
This function receives some commands. Depending on the command it adds a percentage of how much the car is cleaned. Start from 0. The 
first command will always be 'soap'.

02. Number Modification
Write a JS program that modifies a number until the average value of all its digits is higher than 5. To modify the number, your program
should append a 9 to the end of the number, when the average value of all its digits is higher than 5 the program should stop appending. 
If the number’s average value of all its digits is already higher than 5, no appending should be done.

03.	Points Validation
Write a JS program that receives two points in the format [x1, y1, x2, y2] and checks if the distances between each point and the start
of the cartesian coordinate system (0, 0) and between the points themselves is valid. A distance between two points is considered valid,
if it is an integer value. In case a distance is valid write "{x1, y1} to {x2, y2} is valid", in case the distance is invalid write 
"{x1, y1} to {x2, y2} is invalid". 
The order of comparisons should always be first {x1, y1} to {0, 0}, then {x2, y2} to {0, 0} and finally {x1, y1} to {x2, y2}. 
The input consists of two points given as an array of numbers.
