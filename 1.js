// 1. 判断素数：除了 1 和该数本身，没有其他可以整除的数
function isPrimeNumber(num) {
	// 1 既不是素数 也不是合数
	if (num === 1) return false;
	// 2是素数
	if (num === 2) return true;
	for (let i = 2; i < num; i++) {
		// 只要有一次能够除断 即不是素数
		if (num % i === 0) return false;
	}
	return true;
}
console.log(isPrimeNumber(19));