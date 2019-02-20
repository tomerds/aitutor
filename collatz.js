//The following iterative sequence is defined for the set of positive integers:

//n → n/2 (n is even)
//n → 3n + 1 (n is odd)

//Using the rule above and starting with 13, we generate the following sequence:

//13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
//It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

//Which starting number, under one million, produces the longest chain?

//Once the chain starts the terms are allowed to go above one million.

//function to build collatz sequences

function collatzSeq(num){

  let n = num;
  let collatzArray = [n];

  while(n!=1){
    if(n%2==0){
      n = n/2;
    }
    else{
      n = 3*n + 1;
    }
    collatzArray.push(n);
  }
  return collatzArray;
}

//function to find longest chain

function longestChain(maxNum){

  let maxChain = [0,0]; //[a,b] a=starting number b=length of chain

  for(i=1;i<=maxNum;i++){ //loops through numbers up to max number stated
    if(collatzSeq(i).length>maxChain[1]){ //checks if collatz sequence is longest found so far, if yes saves starting number and length
      maxChain[0] = i; //save starting number
      maxChain[1] = collatzSeq(i).length; //save length
    }
  }
  return maxChain[0]; //return starting number
}

//choose maximum number

let num = 10000000;

//print starting number with maximum collatz length

console.log(longestChain(num));
