01. Reveal Words
Write a function, which receives two parameters. The first parameter will be a string with some words separated by
', '. The second parameter will be a string which contains templates containing '*'. Find the word with exact same 
length as the template and replace it.

02. Modern Times of #(HashTag)
The input will be a single string. Find all special words starting with #. Word is invalid if it has anything other
than letters. Print the words you found without the tag each on a new line.

03. Extract File
Write a function that receives a single string - the path to a file (the '\' character is escaped).
Your task is to subtract the file name and its extension.

04. String Substring
The input will be given as two separated strings. Write a function that checks given text for containing a given 
word. The comparison should be case insensitive. Once you find match, print the word and stop the program. 
If you don't find the word print "{word} not found!" .

05. Replace Repeating Chars
Write a function that receives a single string and replaces any sequence of the same letters with a single 
corresponding letter.

06. Pascal-Case Splitter
You will receive a single string. This string is written in PascalCase format. Your task here is to split this 
string by every word in it. Print them joined by comma and space.

07. Cut and Reverse
The input will be a single string. Write a function that cuts the given string into half and reverse the two 
halves. Print each half on a separate line.

08. Hard Words
You will receive an array which holds string and another array. The string is a letter from young boy who does not 
yet know some words and you have to help him. The letter has few holes, these holes are the words unknown to the 
boy and you must fill them with strings from the array you receive at the second index. 
If a length of the hole is 4 you have to replace it with string with the same length and so on…

09. Password Generator
For this problem you have to write a function which generates a password depending on input information. As such, 
you will be given an array of three strings. The first two strings will be at least 10 characters long, the third 
one will be one word. Your task here is to concatenate the first two strings and replace all vowels in the 
concatenated string with symbols from the third string. First vowel must be replaced with the first character from 
third string, second vowel with the second character from that string and so on. If the third string is less than 
the vowels count in the newly formed string you need to start over with character on 0 index. When you replace all 
vowels reverse the new password and print it on the console in a format:
 'Your generated password is {password}'
Note: All replaced vowels with the characters from the third string must be upper-case, the rest of the characters 
are lower-case.


