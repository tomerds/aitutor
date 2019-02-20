//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

// only need to check [11, 13, 14, 16, 17, 18, 19, 20]
//2 goes into anything that 20 goes into
//19 prime
//9,6,3 goes into 18 etc...

let multiples = [11, 13, 14, 16, 17, 18, 19, 20];

function smallestMultiple(arr){
  for(i=20;i<10000000000;i+=20){
    
    var sum = 0; //initialise sum counter
    for(j=0;j<arr.length;j++){

      if(i%arr[j]==0){ //check if i is divisible by item in multiples
        sum+=1; //adds 1 to counter if i is divisible

        if(sum==8){ //if divisible by all return i
          return i;
        }
      }

    }
  }

}

console.log(smallestMultiple(multiples));
