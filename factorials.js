// Directions:
// Write a for (note: not a function) loop that prints out the factorial of the number 12:

// A factorial is calculated by multiplying a number by all the numbers below it. For instance, 3! or "3 factorial" is 3 * 2 * 1 = 6

// 3! = 3 * 2 * 1 = 63!=3∗2∗1=6
// 4! = 4 * 3 * 2 * 1 = 244!=4∗3∗2∗1=24
// 5! = 5 * 4 * 3 * 2 * 1 = 1205!=5∗4∗3∗2∗1=120

// Save your final answer in a variable called solution and print it to the console.

// Your Code:

/*
 * Programming Quiz: Factorials (4-7)
 */

// your code goes here

var solution = 12;
for (var x = 11; x >=1; x--) {
    solution *= x;
}
console.log(solution);