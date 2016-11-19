function solution1(N) {
    return  parseInt(N, 10).
            toString(2).
            replace(/^0+|0+$/g, '').
            split('1').
            reduce(function (a, b) {
                return a.length > b.length ? a : b;
            }).length
}

function solution(N) {
	// A binary gap within a positive integer N is any 
	// maximal sequence of consecutive zeros that is 
	// surrounded by ones at both ends in the binary 
	// representation of N.

	// For example, number 9 has binary representation 1001 
	// and contains a binary gap of length 2. The number 529 
	// has binary representation 1000010001 and contains two 
	// binary gaps: one of length 4 and one of length 3. 
	// The number 20 has binary representation 10100 and 
	// contains one binary gap of length 1. The number 15 has 
	// binary representation 1111 and has no binary gaps.

	// Write a function:

	// function solution(N);
	// that, given a positive integer N, returns the length of 
	// its longest binary gap. The function should return 0 
	// if N doesn't contain a binary gap.

	// For example, given N = 1041 the function should return 5, 
	// because N has binary representation 10000010001 and so its 
	// longest binary gap is of length 5.

	// 1. Get binary representation of number
	// ??

	// 2. Keep track of largest gap
	var largestGap = 0;

	// 3. Keep track of current gap
	var currentGap = 0;
	var gotOne = false;

	// 4. For each bit in N:
	for (; N; N >>= 1) {

		console.log(N & 1);

		if (N & 1 == 1) {
			gotOne = true;
			currentGap = 0;
		}
		else if (gotOne) {
			currentGap++;
		}

		if (currentGap > largestGap) {
			largestGap = currentGap;
		}
	}

	return largestGap;
}


function runTests() {

	var tests = [
		{ number: 9,	answer: 2 },
		{ number: 529,	answer: 4 },
		{ number: 20,	answer: 1 },
		{ number: 15,	answer: 0 },
		{ number: 1041, answer: 5 }	
	]

	for (var i=0; i<tests.length; i++) {
		var answer = solution(tests[i].number);
		console.log("test: ", tests[i], "answer returned: ", answer);
	}
}

runTests();