function solution(A) {

	var saddlePoints = 0;

	// To find the saddle points we need to traverse the "2D" array
	// and keep track of the min/max for each col/row.
	// To do that we will use 4 separate arrays:
	var minRows = []; // contains the col# w/ the min for each row
	var maxRows = []; // contains the col# w/ the max for each row
	var minCols = []; // contains the row# w/ the max for each col
	var maxCols = []; // contains the row# w/ the max for each col

	// Since Javascript uses an array of arrays to represent 2D
	// arrays, we need to keep track of the current column as a
	// separate array.
	var col;

	// For each row, starting with the second row
	//   If this row is the next to last row,
	//     we are done with the row so we are done traversing 
	//     the entire 2D array
	//   Otherwise,
	//     get the min and max number in the row and store
	//     the columns they were found in.
	//   For each column in the current row starting with the second column
	//		If this column is the next to last column, 
	//        we are done with this column
	//      Otherwise,
	//        get the min and max number in the column and store
	//        the rows they were found in.
	//
	// Now that we have traversed the entire 2D array, we need to
	// search our min/max arrays for the saddlePoints
	//
	// For each ?????
	
	console.log("A: ", A);

	for (var i = 1; i<A.length-1; i++) {

		col = A.map(function(e) {return e[i];});
		row = A[i];
		
		for (var j = 1; j<col.length-1; j++) {
			console.log("[", j, ",", i, "]: ", col[j]);
		}

		console.log("row: ", row, "col: ", col);
	}

	return saddlePoints;

}

function testIt() {

	var tests = [

		[[0,1,9,3], [7,5,8,3], [9, 2, 9, 4], [4, 6, 7, 1]]

	]

	console.log("test: ", 0, "Saddle Points: ", solution(tests[0]));

}

testIt();