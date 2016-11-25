function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    
    // Find the sum of the numbers from 1-(N+1)
    // This is the value that the sum SHOULD be with all the numbers
    var N = A.length + 1;
    
    if (N === 1) return 1;
    
    var sum = (1 + N) * (N/2);
    
    var actualSum = 0;
    
    for (var i=0; i<A.length; i++) actualSum += A[i];
    
    return sum - actualSum;
}

/*
Solution
Programming language used: JavaScript
Total time used: 8 minutes
Effective time used: 8 minutes
Notes:  
not defined yet
Task timeline

  
  
  
  
  
04:36:59
04:29:37
Code: 04:36:58 UTC, js, final, score:  10
show code in pop-up
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    
    if (A.length === 1) return A[0] + 1;
    
    A.sort();
    
    for( var i=0; i<A.length-1; i++) {
        
        if (A[i] + 1 < A[i+1]) return A[i]+1;
        
    }
    
    return A[i]+1;
}


Analysis summary
The following issues have been detected: wrong answers, runtime errors.

For example, for the input [] the solution terminated unexpectedly.

Analysis
expand allExample tests
▶ example 
example test ✔OK
expand allCorrectness tests
▶ empty_and_single 
empty list and single element ✘RUNTIME ERROR 
tested program terminated unexpectedly
▶ missing_first_or_last 
the first or the last element is missing ✘WRONG ANSWER 
got 7 expected 1
▶ single 
single element ✘WRONG ANSWER 
got 3 expected 1
▶ double 
two elements ✘WRONG ANSWER 
got 4 expected 1
▶ simple 
simple test ✔OK
expand allPerformance tests
▶ medium1 
medium test, length = ~10,000 ✘WRONG ANSWER 
got 2 expected 456
▶ medium2 
medium test, length = ~10,000 ✘WRONG ANSWER 
got 2 expected 9998
▶ large_range 
range sequence, length = ~100,000 ✘WRONG ANSWER 
got 2 expected 100001
▶ large1 
large test, length = ~100,000 ✘WRONG ANSWER 
got 2 expected 76541
▶ large2 
large test, length = ~100,000 ✘WRONG ANSWER 
got 2 expected 10001
*/