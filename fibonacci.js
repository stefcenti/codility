// Use a loop to keep track of the
// sum of the previous two Fibonacci
// numbers until we reach n
// O(n);
function fibonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    else {
        var sum1 = 0;
        var sum2 = 1;
        var sum  = 0;
        var index = "";
        var value = "";
        for (var i=2; i<=n; i++) {
            sum  = sum1 + sum2;
            sum1 = sum2;
            sum2 = sum;
            index += i + ' ';
            value += sum + ' ';
        }
        
        console.log(index);
        console.log(value);

        return sum;
    }
}

// Use the mathematical formula to calcuate the
// Fibonacci number of n
// O(1)
function fibonacci2(n) {
//    	a(n) = [ Phi**n - (phi)**n ]/Sqrt[5]
//		where Phi = (1+Sqrt[5])/2
//		and phi = (1-Sqrt[5])/2
	var sqrt5 = Math.sqrt(5);

	var value = 
	(
		Math.pow(((1+sqrt5)/2),n) -
		Math.pow(((1-sqrt5)/2),n) 
	) / sqrt5;

	return Math.round(value);
}

// Use recursion to calculate the 
// Fibonacci number for n
// 0(2n**2)
function fibonacci3(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    else {
        return fibonacci3(n-1) + fibonacci3(n-2);
    }
}

function testIt(n) {

	for(var i=0; i<n; i++){

		var x = fibonacci(i);
		var y = fibonacci2(i);
		var z = fibonacci3(i);

		console.log("======");
		console.log('fibonacci:', i, "=", x);
		console.log('fibonacci2:', i, "=", y);
		console.log('fibonacci3:', i, "=", z);
	}

}

testIt(20);