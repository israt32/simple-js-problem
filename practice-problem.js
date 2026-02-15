/* 
Task-1
You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

Input:
The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.

Output:
Print the result.
--------------------------------
Sample Input:
1000
700

Sample Output:
300
*/

// task 1 solution

var orangePrice = 400;
var applePrice = 300;

var myMoney = 1000;

var total = orangePrice + applePrice;
var givenBack = myMoney - total;
// console.log(givenBack)


/* 
Task-2
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.

Output:
Print the result in 2 decimal places.
------------------------------------------
Sample Input:
75.25, 65, 80, 35.45, 99.50

Sample Output:
71.04
*/

// task 2 solution

var math = 75.25;
var biology = 65 ;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.50;

var total = math + biology + chemistry + physics + bangla;

var avg = (total / 5);


// console.log(avg.toFixed(2));

/* 
Task-3
You task is to divide the given number by 5 and show the remainder as the output.

Input:
The first line of the input contains the number.

Output:
Print the remainder.

Sample Input:
119

Sample Output:
4
*/
// task 3 solution

var num = 119;
var remainder = num % 5;
console.log(remainder)