01. Add or Subtract
This function changes the value of odd and even numbers in an array of numbers. If the number is even - add to its value its index 
position. If the number is odd - subtract to its value its index position.

02. Common Elements
This function prints common elements in two string arrays on separate lines. 

03. Merge Arrays
This function receives two string arrays and merges them into a third array. If the index of the element is even, it adds into the third
array the sum of both elements at that index. If the index of the element is odd, add the concatenation of both elements at that index.
 
04. Array Rotation
This function receives an array and number of rotations you have to perform (first element goes at the end). 

05. Max Number
This function finds all the top integers in an array. A top integer is an integer which is bigger than all the elements to its right. 

06. Equal Sums
This function determines if there exists an element in the array of numbers such that the sum of the elements on its left is equal to 
the sum of the elements on its right. The function prints the index that satisfies the required condition or "no" if there is no such 
index.

07. Max Sequence of Equal Elements
This function finds the longest sequence of equal elements in an array of numbers. If several longest sequences exist, print 
the leftmost one.

08. Magic Sum
This function prints all unique pairs in an array of integers whose sum is equal to a given number. 

09. Dungeonest Dark
You have initial health 100 and initial coins 0. You will be given a string, representing the dungeons rooms. Each room is separated 
with '|' (vertical bar): "room1|room2|room3…". Each room contains item or a monster and a number, separated by space:
"item/monster number". If the first part is "potion": you are healed with the number in the second part. But your health cannot exceed 
your initial health (100). Print: "You healed for {0} hp.". After that, print your current health: "Current health: {0} hp.".
If the first part is "chest": You've found some coins, the number in the second part. Print: "You found {0} coins." . •	In any other case 
you are facing a monster, you are going to fight. The second part of the room, contains the attack of the monster. You should remove the 
monster's attack from your health. If you are not dead (health <= 0) you've slain the monster, and you should print ("You slayed {monster}.").
If you've died, print "You died! Killed by {monster}." and your quest is over. Print the best room you`ve manage to reach: "Best room: {room}".
If you managed to go through all the rooms in the dungeon, print on the next three lines: 
"You've made it!", "Coins: {coins}", "Health: {health}".

10. Ladybugs
You are given a field size and the indexes of ladybugs inside the field. A ladybug changes its position either to its left or to its
right by a given fly length. A command to a ladybug looks like this: "0 right 1". This means that the little insect placed on index 0 
should fly one index to its right. If the ladybug lands on a fellow ladybug, it continues to fly in the same direction by the same fly 
length. If the ladybug flies out of the field, it is gone. If you are given ladybug index that does not have ladybug there, nothing 
happens. If you are given ladybug index that is outside the field, nothing happens. 
Your job is to create the program, simulating the ladybugs flying around doing nothing. At the end, print all cells in the field separated by 
blank spaces. For each cell that has a ladybug on it print '1' and for each empty cells print '0'.








