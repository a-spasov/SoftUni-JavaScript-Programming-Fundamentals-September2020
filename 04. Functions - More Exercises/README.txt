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

04. Radio Crystals 
You need to write a JS program that monitors the current thickness of the crystal and recommends the next procedure that will bring it 
closer to the desired frequency. To reduce waste and the time it takes to make each crystal your program needs to complete the process 
with the least number of operations. Each operation takes the same amount of time, but since they are done at different parts of the 
factory, the crystals have to be transported and thoroughly washed every time an operation different from the previous must be 
performed, so this must also be taken into account. When determining the order, always attempt to start from the operation that removes 
the largest amount of material. The different operations you can perform are the following: Cut – cuts the crystal in 4; Lap – removes 
20% of the crystal’s thickness; Grind – removes 20 microns of thickness; Etch – removes 2 microns of thickness; X-ray – increases the 
thickness of the crystal by 1 micron, this operation can only be done once! Transporting and washing – removes any imperfections smaller
than 1 micron (round down the number); do this after every batch of operations that remove material.
At the beginning of your program, you will receive a number representing the desired final thickness and a series of numbers, 
representing the thickness of crystal ore in microns. Process each chunk and print to the console the order of operations and number of
times they need to be repeated to bring them to the desired thickness.
The input comes as a numeric array with a variable number of elements. The first number is the target thickness and all following numbers are the thickness of different chunks of quartz ore.
The output is the order of operation and how many times they are repeated, every operation on a new line. See the examples for more information.

