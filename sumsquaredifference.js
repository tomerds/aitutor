//The sum of the squares of the first ten natural numbers is,

//12 + 22 + ... + 102 = 385
//The square of the sum of the first ten natural numbers is,

//(1 + 2 + ... + 10)2 = 552 = 3025
//Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

//Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

//finds sum of squares for any number
function sumSquares(num){
  var sum = 0; //initialise
  for(i=1;i<=num;i++){
    sum += i*i; //sums square up to desired number
  }
  return sum;
}

//finds square of sum for any number
function squareSum(num){
  var sum = 0;
  for(i=1;i<=num;i++){
    sum += i; //sums up to desired number
  }
  return sum*sum; //returns square
}

//Finds difference required
function differenceFinder(num){
  let difference = squareSum(num)-sumSquares(num);
  return difference;
}

//Input any desired number
let n = 100

//prints solution
console.log(differenceFinder(n));
