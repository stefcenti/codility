// A zero-indexed array A consisting of N integers is
// given. Rotation of the array means that each element
// is shifted right by one index, and the last element
// of the array is also moved to the first place.

// For example, the rotation of array A = [3, 8, 9, 7, 6]
// is [6, 3, 8, 9, 7]. The goal is to rotate array A K
// times; that is, each element of A will be shifted to
// the right by K indexes.

// Write a function:

// solution(int A, K);

// that, given a zero-indexed array A consisting of N
// integers and an integer K, returns the array A rotated
// K times.

// For example, given array A = [3, 8, 9, 7, 6] and 
// K = 3, the function should return [9, 7, 6, 3, 8].

// Assume that:

// N and K are integers within the range [0..100];
// each element of array A is an integer within the range
// [−1,000..1,000].
// In your solution, focus on correctness. The
// performance of your solution will not be the focus of
// the assessment.

function cyclicRotation(A, K) {
	var newArray = [];

	// Make sure K is within the range of the array:
	if (K >= A.length) {
		K %= A.length;
	}

	for (var i = 0; i<A.length; i++) {
		newArray[K] = A[i];

		if (K < A.length - 1) {
			K++;
		} else {
			K = 0;
		}
	}

	return newArray;
}

function runTests() {
	var tests = [
		{ A: [3,8,9,7,6], K: 0},
		{ A: [3,8,9,7,6], K: 1},
		{ A: [3,8,9,7,6], K: 2},
		{ A: [3,8,9,7,6], K: 3},
		{ A: [3,8,9,7,6], K: 4},
		{ A: [3,8,9,7,6], K: 5},
		{ A: [3,8], K: 2},
		{ A: [3,8], K: 3},
		{ A: [3,8], K: 4},
		{ A: [3,8], K: 5},

	]

	for (var i=0; i<tests.length; i++) {
		var newA = cyclicRotation(tests[i].A, tests[i].K);

		console.log(tests[i].A.join());
		console.log(newA.join());
		console.log("K: ", tests[i].K);
		console.log("-----------------");
	}
}

runTests();