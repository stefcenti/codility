// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// O(N) 100%
function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)

    var num = 0;

    for (var i=0; i<A.length; i++) {
        num ^= A[i];
    }

    return num;
    
}

// O(N**2) 66% - no sort used
function solution2(A) {
    for (var start = 0, curr = 1; start < A.length && curr < A.length; )
    {
        console.log("start: ", start, "curr: ", curr, "A: ", A.join());
        
        if (curr == A.length) {
            // Not found, return value
            return A[start];
        }
        
        if (A[curr] == 0) {
            // Already checked this one, skip it
            curr++;
            continue;
        }
        
        if (A[start] == A[curr]) {
            // Match found, set curr value to next value, increment start, reset curr
            A[curr] = 0;
            start++;
            A[curr] = A[start];
            curr = start + 1;
        } else {
            // Still more to check, just increment current
            curr++;
        }
    }
    
    return A[curr-1];
}

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// O(N) - with A.sort() 100%
function solution3(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    
    A.sort();
    
    if (A.length === 1) return A[0];
    
    for (var i=0; i<A.length-1; i+=2) {
        
        if (A[i] != A[i+1]) return A[i];

    }
    
    return A[i];
} 

function testIt(){

    console.log(solution([1,6,2,9,2,8,1,6,9]));

}

testIt();