"use strict";

function logger() {
  console.log("My name is jonas");
}

//callling / running / invoking

logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 9);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");

//Note:- There are two types of functions, and choosing which to use is a matter of personal preference...
//For function declaration, we can call the function before declaration  (Hoisting);

//Function Declaration;

const age1 = calcAge1(1997);

function calcAge1(birthYear) {
  return 2024 - birthYear;
}

//Function Expression;

const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};

const age2 = calcAge2(1997);

console.log(age1, age2);

//Arrow function;

/*const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};*/

//Single line, ommit return.
const calcAge3 = (birthYear) => 2024 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

//More than a line, add return.
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 35 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1997, "Shamsudeen"));
console.log(yearsUntilRetirement(2004, "Iiissshhh"));

//Function calling other functions;

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

/*
Coding Challenge #1 
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
gymnastics discipline, which works differently. 
Each team competes 3 times, and then the average of the 3 scores is calculated (so 
one average score per team). 
A team only wins if it has at least double the average score of the other team. 
Otherwise, no team wins! 
Your tasks: 
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores 
2. Use the function to calculate the average for both teams 
3. Create a function 'checkWinner' that takes the average score of each team 
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
to the console, together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs. 13)" 
4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
Data 2 
5. Ignore draws this time 
Test data: 
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27 
Hints: 
§ To calculate average of 3 values, add them all together and divide by 3 
§ To check if number A is at least double number B, check for A >= 2 * B. 
Apply this to the team's average scores 
GOOD LUCK 
�
*/

const calcAverage = (Score) => Score / 3;

const dolphinsScore1 = 44 + 23 + 71;
const dolphinsScore2 = 85 + 54 + 41;
const koalasScore1 = 65 + 54 + 49;
const koalasScore2 = 23 + 34 + 27;

var avgeDolphins = calcAverage(dolphinsScore1);
var avgeKoalas = calcAverage(koalasScore1);

/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));
*/

const checkWinner = function (avgeDolphins, avgeKoalas) {
  if (avgeDolphins > avgeKoalas && avgeDolphins >= 2 * avgeKoalas) {
    console.log(`Dolphins win (${avgeDolphins} vs. ${avgeKoalas})`);
  } else if (avgeDolphins < avgeKoalas && avgeKoalas >= 2 * avgeDolphins) {
    console.log(`Koalas win (${avgeKoalas} vs. ${avgeDolphins})`);
  } else {
    console.log("No team wins...");
  }
};

checkWinner(avgeDolphins, avgeKoalas);

//TEST 2
avgeDolphins = calcAverage(dolphinsScore2);
avgeKoalas = calcAverage(koalasScore2);
checkWinner(avgeDolphins, avgeKoalas);

//ARRAYS; [] or new Array();

//Declaration of an array
const friends = ["Bob", "Bill", "Ben"];
console.log(friends.length);
//Automatically logging the last list of an array
console.log(friends[friends.length - 1]);

//Mutating an array
friends[2] = "Beth";
console.log(friends);

//Array can contain any data types which includes an expression which holds values
const firstName = "Tee";
const tee = [firstName, "Deen", 2024 - 1990, "teacher", friends];
console.log(tee);
console.log(tee.length);

//Excersice;
const calAge = function (birthYeah) {
  return 2024 - birthYeah;
};
const years = [1990, 1967, 2002, 2010, 2018];

//Calculating the value for each index in the array...
const ages1 = calAge(years[0]);
const ages2 = calAge(years[1]);
const ages3 = calAge(years[years.length - 1]);
console.log(ages1, ages2, ages3);

//Turning our result into an array...
const ages = [
  calAge(years[0]),
  calAge(years[1]),
  calAge(years[years.length - 1]),
];
console.log(ages);

//Basic Array Operations (Methods)...

//Methods to add which returns the lenght of the value...
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

//Methods to remove elements which returns what was removed... No argument needed.
const popped = friends.pop();
console.log(popped);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven")); //Returns 1
console.log(friends.indexOf("Bob")); //Returns -1

friends.push(23);
console.log(friends.includes("Steven")); //Shows true or false with strict data type.
console.log(friends.includes("23"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}

/*
Coding Challenge #2 
Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
20%. 
Your tasks: 
1. Write a function 'calcTip' that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above (you can check out 
the code from first tip calculator challenge if you need to). Use the function 
type you like the most. Test the function using a bill value of 100 
2. And now let's use arrays! So create an array 'bills' containing the test data 
below 
3. Create an array 'tips' containing the tip value for each bill, calculated from 
the function you created before 
4. Bonus: Create an array 'total' containing the total values, so the bill + tip 
Test data: 125, 555 and 44 
�
� 
Hint: Remember that an array needs a value in each position, and that value can 
actually be the returned value of a function! So you can just call a function as array 
values (so don't store the tip values in separate variables first, but right in the new 
array) 
GOOD LUCK 
�
*/

/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

or 
*/

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

/*
or

const calcTip = function (billValue) {
  if (billValue >= 50 && billValue <= 300) {
    console.log(
      "The bill value is £" + (billValue * 15) / 100 + " = 15%" + " of the bill"
    );
  } else {
    console.log(
      "The bill value is £" + (billValue * 20) / 100 + " = 20%" + " of the bill"
    );
  }
};
*/

const bills = [125, 555, 44];
console.log(bills);

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);
/*
 */

//OBJECTS.

/*
Unlike array which reference values with their order number, Objects is designed with the KEY:VALUE pairs which gives each of these values a *NAME*.
Object is used you group together something of similar properties just like arrays.

Object Literal Syntax
 const jonasArray = {
  'Jonas',
  'Schmedtmann',
  2037 - 1997,
  'teacher',
  ['Michael', 'Peter', 'Steven']
 };

 An object only accepts a function expression.
*/

const jonasObject = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYeaar: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcuAge: function (birthYeaar) {
  //   return 2027 - birthYeaar;
  // },

  //this keyword helps to identify the object on which the method is being called.
  //Note... When trying to call on a method multiple time... Calculate the method once, store in a new variable, and call on the var instead of the function, but make sure to call the function once before attempting to call the var within.
  calcuAge: function () {
    this.age = 2037 - this.birthYeaar;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcuAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

//Dot Notation; Only the reaal property name can be used...
console.log(jonasObject.lastName);

//Bracket Notation; Here, an expression can be computed directly for use... Which is only applicable for the Bracket Notation... Always pass in a string.
console.log(jonasObject["lastName"]);

const nameKey = "Name";
console.log(jonasObject["first" + nameKey]);
console.log(jonasObject["last" + nameKey]);

//More explaanation on the Bracket Notation; Take for instance we don't know yet which property of the object which be used... And the information is to be collected from the input via an interface...

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);
//The Dot notation will not give us real answer... It will always give us undefined... As this is because the computer sees the property as not exist before... instead... We can always use the Bracket notation for this kind of situation... Because the expression will always get evaluated to give the right answer.
if (jonasObject[interestedIn]) {
  console.log(jonasObject[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

//Adding to an object...
jonasObject.location = "Nigeria";
jonasObject["twitter"] = "@laldsjlsal";
console.log(jonasObject);

console.log(
  `${jonasObject.firstName} has ${jonasObject.friends.length} friends, and his best friend is called ${jonasObject.friends[0]}`
);

//Object Methods;
//console.log(jonasObject.calcuAge(1991));
//console.log(jonasObject["calcuAge"](1991));
console.log(jonasObject.calcuAge());
console.log(jonasObject.age);
console.log(jonasObject.age);
console.log(jonasObject.age);

console.log(jonasObject.getSummary());
console.log("hello world");

/*
Coding Challenge #3 
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
implement the calculations! Remember: BMI = mass / height ** 2 = mass 
/ (height * height) (mass in kg and height in meter) 
Your tasks: 
1. For each of them, create an object with properties for their full name, mass, and 
height (Mark Miller and John Smith) 
2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
method on both objects). Store the BMI value to a property, and also return it 
from the method 
3. Log to the console who has the higher BMI, together with the full name and the 
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!" 
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
tall. 
GOOD LUCK 
�
*/

const markObject = {
  fullName: "Mark Miller",
  mass: 78,
  weight: 1.69,

  calcBMI: function () {
    //return this.mass / this.weight ** 2;
    this.bmi = this.mass / this.weight ** 2;
    return this.bmi;
  },
};

const johnObject = {
  fullName: "John Smith",
  mass: 92,
  weight: 1.95,

  calcBMI: function () {
    //return this.mass / this.weight ** 2;
    this.bmi = this.mass / this.weight ** 2;
    return this.bmi;
  },
};

markObject.calcBMI();
johnObject.calcBMI();

if (markObject.bmi > johnObject.bmi) {
  console.log(
    `${markObject.fullName}'s BMI (${markObject.bmi}) is higher than ${johnObject.fullName}'s (${johnObject.bmi})`
  );
} else {
  console.log(
    `${johnObject.fullName}'s BMI (${johnObject.bmi}) is higher than ${markObject.fullName}'s (${markObject.bmi})`
  );
}

//LOOP (FOR): FOR loop keeps running while condition is TRUE;
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️🏋️🏋️`);
}
