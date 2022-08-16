// 5.字符串中字符替换：把字符串中的字符a和A换成c输出
function replaceStr(a) {
    return a.replace(/(a|A)/g, 'c');
}
console.log(replaceStr('abAc'));