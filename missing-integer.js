/****

Write a function:

function solution(A);

that, given a non-empty zero-indexed array A of N integers, 
returns the minimal positive integer (greater than 0) that does not occur in A.

For example, given:

  A[0] = 1
  A[1] = 3
  A[2] = 6
  A[3] = 4
  A[4] = 1
  A[5] = 2
the function should return 5.

Assume that:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [-2,147,483,648..2,147,483,647].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.


****/

var tests = [

[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],  // 6
[-5, -4, -3, -2, -1, 0, 1, 2, 4, 5],     // 3
[-5, -4, -3, -2, -1, 0, 2, 3, 4, 5],     // 1
[-5, -4, -3, -2, -1, 0, 1, 3, 4, 5],     // 2
[-5, -4, -3, -2, -1, 1, 2, 3, 4, 5],     // 6
[-5, -4, -3, -2, 0, 1, 2, 3, 4, 5],      // 6
[-5, -4, -3, -1, 0, 1, 2, 3, 4, 5],      // 6
[-1], // 1
[-2], // 1
[0], // 1
[1], // 2
[2], // 1
[3], // 2
[100],
[0, 2], // 1
[0, 0, 1], // 1 - this one returns 2 nvm
[0, 1, 1]

];


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    
    // If there is only one element, the min. missing one will be one less
    if (A.length === 1) {
        if (A[0] < 1 ) return 1;
        if (A[0] === 1) return 2;
        return A[0] - 1;
    }
    
    // Sort the array
    A.sort(function(a, b){return a-b});
    
    var num1 = 0;
    var num2 = 0;
    
    // Find the first missing number starting with the second number
    for (i=0; i<A.length-1; i++) {
        
        // Skip all numbers that are < 1.
        if (A[i] < 0) continue;
        
        // We are either >= 1 at this point
        if (A[i] === 1 && i === A.length-1) return 2;
        
        num1 = A[i];
        num2 = A[i+1];
        
//        console.log("num1: ", num1, "num2: ", num2);
       
        if (num2 - num1 > 1) {
            // We found the missing number
            return num1 + 1;
        }
    }
    
    return num2 + 1;

}

// Using a hash table
// This scores 100% - I'm not convinced it is completely correct.
// For example, the hash table is initialized to be the size of the array
// passed it.  That array may only have one number, i.e. 100
// For the hash table to work, it should be 100 elements with
// every slot === 0 except the 100'th one.
function solution2(A) {

    var start = 1;
    // var hTable = new Array(A.length+1);

    // initialze Hash Table to 0
    var hTable = Array.apply(null, Array(A.length+1)).map(Number.prototype.valueOf,0);

    for (var i=0; i<A.length; i++) {

        // Initialize Hash Table - Skip numbers < 1
        // hTable[1] will hold sum of 1's
        // hTable[2] will hold sum of 2's
        // ...
        // hTable[N] will hold num of N's
        if (A[i] < 1) continue;

        hTable[A[i]] = A[i]; // Just hold the number for now - it may be enough
    }

    console.log("hTable: ", hTable);

    var minNum = 1;
    // Search Hash Table for the first null value
    for (var i=1; i<hTable.length; i++) {
        if (!hTable[i]) {return i;}

        minNum = i;
    }

    return minNum === i ? i+1 : i;

}

// Same as 2 but without comments/extra space
function solution2b(A) {
    var start = 1;
    var hTable = Array.apply(null, Array(A.length+1)).map(Number.prototype.valueOf,0);

    for (var i=0; i<A.length; i++) {
        if (A[i] < 1) continue;
        hTable[A[i]] = A[i]; // Just hold the number for now - it may be enough
    }

    var minNum = 1;
    for (var i=1; i<hTable.length; i++) {
        if (!hTable[i]) {return i;}
        minNum = i;
    }

    return minNum === i ? i+1 : i;
}

function testIt() {

    for (var i=0; i<tests.length; i++){

        console.log(tests[i]);

        console.log("Result: ", solution2(tests[i]));
    }
}

testIt();