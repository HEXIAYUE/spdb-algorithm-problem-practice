// 6.求字符串的所有子串 规则 n*(n+1)/2+1
function childStr(a) {
    let res = [];
    for (let i = 0; i <= a.length; i++)
        for (let j = 0; j < i; j++) {
            res.push(a.slice(j, i));
        }
    res.unshift('');
    return res;
}
console.log(childStr('abcd'));