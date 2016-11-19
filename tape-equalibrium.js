// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    
    // Get the sum of the entire array to get the right hand side
    for (var i=0, right=0; i<A.length; i++) {
        right += A[i];        
    }
    
    // For each item in the array, subtract the current value
    // * from the right and add the value to the left
    // * compare the absolute value of left and right
    // * if the absolute value is less than the smallest value found
    // ** set the smallest value found to the current value
    // return the smallest value

    // Keep track of the smallest difference
    var diff = left = 0;
    var smallest = 9999;
        
    for (i=0; i<A.length-1; i++) {
        
        left += A[i];
        right -= A[i];
        
        diff = Math.abs(left - right);
        
        if (diff < smallest )
            smallest = diff;
    }
    
    return smallest;
}

function testIt() {
    var tests = [
        [-1000, 1000],
    ]

    var ans;

    for (var i=0; i<tests.length; i++) {
        ans = solution(tests[i]);

        console.log(ans);
    }
}

testIt();