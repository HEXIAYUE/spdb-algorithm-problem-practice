// 3. 判断是否为非完全平方数 一个平方没有 既是非完全平方数
function isPerfectSquare(num) {
    // 循环只需要循环到 num/i 就行
    for (let i = 1; i <= num / i; i++) {
        // 有一个平方 既是完全平方数
        if (i * i === num) return true;
    }
    return false;
}
console.log(isPerfectSquare(808201))