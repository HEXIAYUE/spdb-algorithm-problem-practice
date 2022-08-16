// 9.给出A,B两个字符串，求在第一个字符串出现，但第二个字符串中未出现，重复出现时只取第一次出现，输出字符串
function qieStr(strA, strB) {
    let setA = new Set(strA.split('')); // 去重
    let setB = new Set(strB.split('')); // 去重
    return [...new Set([...setA].filter(x => !setB.has(x)))].join('');
};
console.log(qieStr('aabcd', 'acdf'));