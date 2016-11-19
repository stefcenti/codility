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

// O(N**2) 66%
function solution2(A)
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
        
        if (A[start] 
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