

function solution(A) {

	var left = 0;
	var right = 0;

	// Sum up the entire array to get the right hand side to start with
	for (var i=0; i<A.length; i++) {
		right += A[i];
	}

	// Now compare left and right sides to find the first equilibrium
	// Loop through the array subtracting from the right and adding to the left
	for(i=0; i< A.length; i++){
		right -= A[i];

		if (left == right) {
			return i;
		}

		left += A[i];
	}

	// If we get to this point we did not find an equal point, return -1;
	return -1;
}

var tests = [
	[-1, 2, 1, 1]
];

function equilibrium()
{
	for (var i=0; i<tests.length; i++) {
		console.log("test ", i, ": ", solution(tests[i]));
	}
}

equilibrium();
