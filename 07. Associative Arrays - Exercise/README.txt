01. Words Tracker
Write a function that receives an array of words and finds occurrences of given words in that sentence. 
The input will come as array of strings. The first string will contain the words you will be looking for separated by a space. All 
trings after that will be the words you will be looking for. Print for each word how many times it occurs. The words should be sorted by
count in descending.

02. Odd Occurrences
Write a function that extracts all the elements of a sentence odd number of times (case-insensitive).
The input comes as a single string. The words will be separated by a single space.

03. Piccolo
Write function that:
•	Records a car number for every car that enters the  parking lot
•	Removes a car number when the car goes out
•	Input will be array of strings in format [direction, carNumber]
Print the output with all car numbers which are in the parking lot sorted in ascending by number.

04. Party Time
There is a party at SoftUni. Many guests are invited and they are two types: VIP and regular. When guests come to the party check if 
he/she exists in any of the two reservation lists. The input will come as array of strings. You will be given the list with the guests 
before you receive a command "PARTY". All reservation numbers will be with 8 chars. All VIP numbers start with digit.
When you receive the command "PARTY" the guests start coming. Output all guest, who didn't come to the party (VIP must be first).

05. Card Game
You are given a sequence of people and for every person what cards he draws from the deck. The input will be array of strings. Each 
string will be in format:  {personName}: {PT, PT, PT,… PT}.
Where P (2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A) is the power of the card and T (S, H, D, C) is the type. The name can contain any ASCII
symbol except ':'. The input will always be valid and in the format described, there is no need to check it.
A single person cannot have more than one card with the same power and type, if he draws such a card he discards it. The people are 
playing with multiple decks. Each card has a value that is calculated by the power multiplied by the type. Powers 2 to 10 have the same 
value and J to A are 11 to 14. Types are mapped to multipliers the following way (S -> 4, H-> 3, D -> 2, C -> 1).
Finally print out the total value each player has in his hand in the format:
{personName}: {value}  .

06. Travel Time
Write a function that collects and orders information about traveling destinations.
As input you will receive an array of strings.
Each string will consist of the following information with format:
"Country name > Town name > Travel cost"  .
Country name will be unique string, Town name will also be unique string, Travel cost will be a number.
If you receive the same Town name twice, you should keep the cheapest offer. Have in mind that one Country may have several Towns to 
visit. After you finish the organizational part, you need to let Steven know which destination point to visit first. The order will be 
as follows:  First sort Country names alphabetically and then sort by lowest Travel cost.

07. Company Users
Write a function which keeps information about companies and their employees. 
You will receive array of strings containing company name and employee's id. Add each employee to the given company. Keep in mind that 
a company cannot have two employees with the same id. When you finish reading data, order the companies by the name in ascending order. 
Print the company name and each employee's id in the following format:
{companyName}
-- {id1}
-- {id2}
-- {idN}

08. A Miner Task
You are given an array of strings. Every odd string is representing a resource (e.g. Gold, Silver, Copper, and so on), and every even – 
quantity. Your task is to collect the resources and print them each on a new line. Print the resources and their quantities in format:
{resource} –> {quantity}  .
The quantities inputs will be in the range [1 … 2 000 000 000].

09. Arena Tier
Pesho is a pro gladiator, he is struggling to become master of the Arena. 
You will receive several input lines in one of the following formats:
"{gladiator} -> {technique} -> {skill}"
"{gladiator} vs {gladiator}"
The gladiator and technique are strings, the given skill will be an integer number. You need to keep track of every gladiator. 
When you receive a gladiator and his technique and skill, add him to the gladiator pool, if he isn't present, else add his technique or 
update his skill, only if the current technique skill is lower than the new value.
If you receive "{gladiator} vs {gladiator}" and both gladiators exist in the tier, they duel with the following rules:
Compare their techniques, if they got at least one in common, the gladiator with better total skill points wins and the other is demoted
from the tier -> remove him.
If they don't have techniques in common, the duel isn't happening and both continue in the Season.
You should end your program when you receive the command "Ave Cesar". At that point you should print the gladiators, ordered by total 
skill in desecending order, then ordered by name in ascending order. Foreach gladiator print their technique and skill, ordered 
desecending, then ordered by technique name in ascending order.






