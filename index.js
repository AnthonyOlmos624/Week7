
//Question 1: Create an array called ages that contains the following values:     3, 9, 23, 64, 2, 8, 28, 93.
// a: Programmatically subtract the value of the first element in the array from the value in the last element of the array.
// . Do not use numbers to reference the last element, find it programmatically.
// . ages[7] - ages[0] is not allowed!
// b: Add a new age to your array and repeat the step above to ensure it is dynamic.(works for arrays of different lengths).
// c: Use a loop to iterate through the array and calculate the average age.
//Answer Below:

// crerated the array with the information provided above.
let ages = [3, 9, 23, 64, 2, 8, 28, 93]
console.log(`Ages:`, ages); 
//created a new array to subtract first elment with last elment in array did this 
//by using the ".length" method which takes me to the last item in the array
//and since arrays are zero based the "ages[0]" will target first item in array.
let minusAge = ages[ages.length - 1] - ages[0];
console.log(`minusAge:`, minusAge);
//added a new array by using the ".push" method which addeds a new item into the
// last item in the array. 
ages.push(100)
console.log(`Ages after pushing a new value:`, ages); 
let minusAgePush = ages[ages.length - 1] - ages[0];
console.log(`minusAge:`, minusAgePush); 
//created another array to get average age in my array by using "sumOfAges"
let sumOfAges = 0;
//had to use a loop in order to get the caculations of average age by taking
// sumOfAges variable and having each iteration add ages to the specific index
for(let i = 0; i < ages.length; i++){
    sumOfAges += ages[i];
    console.log(`index:`, i, `sumOfAges:`, sumOfAges); 
}
console.log(`Total Sum`, sumOfAges); 
//here we declared a variable of "average" then we divided it with "sumOfAges" &
// "ages.length" so that we can obtain the average of ages. 
let average = sumOfAges / ages.length;
console.log(`Average`, average);

//Question 2: Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
// a: Use a loop to iterate through the array and calculate the average number of letters per name.
// b: Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
//Answer Below:

//created array with information provided above. Also added a second one to get the total number of letters per name. 
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let totalChars = 0;
//creating a "for" loop to get the average number of letters per name. 
for(let i = 0; i < names.length; i++){
 //we are grabbing our "totalChars" and adding it with names with the given index and added ".length" to get the total number of the name that was given. 
totalChars += names[i].length
console.log(`index:`, i, `name:`, names[i], `totalChars:`, totalChars); 
}
//we are doing the same thing we did in question 1. creating a new variable then we divde "totalChars" with "names.length" to obtain average number if letters per name. 
let averageName = totalChars / names.length;
console.log(`Average of Names:`, averageName); 
// Created new variable of "concatNames" so that we can concatenate all names together.
let concatNames = "";
for(let i = 0; i < names.length; i++){
//in this section we are concatenating the names and adding a space inbetween. 
concatNames = concatNames.concat(names[i] + " ")
console.log(i,'Names concatenated:', concatNames)
} 


//Question 3: How do you access the last element of any array?
//Answer Below:
//for our first question we had to access last element of array by doing so we used "ages[ages.length - 1]"
console.log(`Last element of ages array:`, ages[ages.length - 1])


//Question 4: How do you access the first element of any array?
//Answer Below:
//by accessing the first element we will use "ages[0]" since arrays are zero based
console.log(`First element of ages array:`, ages[0])

//Question 5: Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths //array.
//For example:
//
//let names = ["Kelly", "Sam", "Kate"];    // starting with this array
//let nameLengths = [5, 3, 4];             // create a new array
//Answer Below:

//Created new array with information given above "nameLengths"
let nameLengths = [];
for (let i = 0; i < names.length; i++){
// Here I used the push method so that we can get the length of each name. 
nameLengths.push(names[i].length)
console.log(`Name lengths array:`, nameLengths)    
}

//Question 6: Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
//Answer Below:
// Added a new variable of "charsTotal" to caculate sum of all elements in array
let charsTotal = 0;
for(let i = 0; i < nameLengths.length; i++){
// using the new variable we have we are adding it to "nameLengths" of each element within the array.
charsTotal += nameLengths[i]
console.log (`charsTotal:`, charsTotal );     
}
//Question 7: Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return'HelloHelloHello').
//Answer Below:
// Creating a new function with two parameters of "word" and "n"
function concatWords (word , n){
//Using this just to show that the "word" parameter is showing "Hello" and "n" parameter is showing "3"
console.log(`Word Par:`, word, `n Par:`,  n)
//Created new variable of "concat" and used the ".repeat" method
let concat = word.repeat(n);
console.log(concat)
}
//This is to call the function at somepoint through the process it goes through. 
concatWords(`Hello`, 3)

//Question 8: Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
//Answer Below:

function fullName (firstName , lastName){
    // In order to get the space inbetween you would need to use " " and do not forget to add "+" after "firstName" and before "lastName"
    let fullName = firstName + " " + lastName;
    console.log(fullName)
}
//Since it is a function we need to call it out for it to work
fullName(`Anthony`, `Olmos`)


//Question 9: Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
//Answer Below:
//Created two arrays here so that i can add it to my function later on
let numbers1 = [125, 225, 325, 425]
let numbers2 = [2, 4,6, 8]

function sumNumbersArray(array){
    let total = 0;
    //created the for loop to obtain the sum of all numbers. 
    for (i = 0; i < array.length; i++){
        total += array[i];
        console.log(`Total:`, total);
    }
    //Created an if else statement in order to get the statement to see if the numbers in the array is greater than 100
    if (total > 100){
        console.log(`Total:`, total, true);
        return true;
    }else {
        console.log(`Total:`, total, false);
        return false;
    }
}
//Have to call this out since it is a function 
sumNumbersArray(numbers1);


//Question 10: Write a function that takes an array of numbers and returns the average of all the elements in the array.
//Answer Below:
//Created new function "calculateNumbersArray" so that we can receive the average number of the elements in the array. 
function calculateNumbersArray(array){
    let total = 0;
    //created a for loop like in the previous questions that give us our total of elements in the array
    for( let i = 0; i< array.length; i++){
        total += array[i];
        console.log(`Calculate Function total:`, total); 
    }
    // this gives us the average of all elements in the array. 
    let average = total / array.length;
    console.log(`Average of numbers:`, average);
    return average; 
}

calculateNumbersArray(numbers1); 

//Question 11: Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
//Answer Below:

//Declared a few variables to create the function 
let numbers3 = [200, 200, 200];
let numbers4 = [100, 200, 200]; 
//created the function of two arrays
function twoAverages(array1, array2){
    let total1 = 0
    let total2 = 0

    //created two "for of loop" so that we are adding each element in each array.
 for (const number of array1){
    total1 += number
    console.log(`Current number loop 1:`, number, `Total:`, total1);
 }   

 for (const number of array2){
    total2 += number;
    console.log(`Current number loop 2:`, number, `Total 2:`, total2);
 }
let average1 = total1 / array1.length;
let average2 = total2 / array2.length;

console.log(`Averages`, average1, average2);
// made an "if else" statement to declare if the average of each array are greater than or less than the other it would return "true" or "false" and if both arrays are the same logged out "Numbers are equal"
if (average1 > average2){
    console.log(true);
    return true;
}else if(average1 < average2){
    console.log(false);
    return false;
}else{
    console.log(`Numbers are equal`); 
}

}

twoAverages(numbers3, numbers4);


//Question 12: Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
//Answer Below:

//created a function with information provided "willBuyDrink"
function willBuyDrink(isHotOutside, moneyInPocket){
    //created the boolean function to include "isHotOutside" & "moneyInPocket"
    let buyDrink = isHotOutside === true && moneyInPocket > 10.5;
    console.log(`Buy a drink?`, buyDrink); 
    return buyDrink

}
//We have to call on the function and within the parameters will decide if it will return "true" or "false"
willBuyDrink(true, 11)


//Question 13: Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
//Answer Below:

//Created a function that solves adding, subtracting, multiplying, dividing. First thing
//that popped in my head when I read this question. 
//Added a function called "solveProblem" within the parameters added "a, v, operation"    

 

function solveProblem(a, b, operation){
    //Will use the "switch" method to have the run through each individual case and return and outcome of the operation.
    switch (operation){
        case `add` :
            return a + b;
        case `subtract` :
            return a - b;
        case `multiply` :
            return a * b;  
        case `divide`:
            return a / b; 
        default:
            return `Error: Unknown operation`     
    }



}
console.log(solveProblem(10, 20, `add`));
console.log(solveProblem(10, 5, `subtract`));
console.log(solveProblem(10, 15, `multiply`));
console.log(solveProblem(10, 5, `divide`));
console.log(solveProblem(10, 0));
