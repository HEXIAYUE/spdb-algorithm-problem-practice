// 2. 判断闰年：输出从 1990 年到 2010 年之间的闰年
// 四年一闰；如果公元A年的A（正数）能被4整除，那么它就是闰年；如果公元前B年的B（正数）除以4余1，那么它也是闰年。
function showLeapYear() {
    let result = [];
    for (let i = 1990; i <= 2010; i++) {
        // 如果公元A年的A（正数）能被4整除
        if (i % 4 === 0) result.push(i);
    }
    return result;
};
console.log(showLeapYear());
