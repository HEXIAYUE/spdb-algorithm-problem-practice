// 7.字符串大小写转换 小写字符比大写大32
function stringCaseConversion(str) {
    return str.split('').map(value => {
        return (value >= 'A' && value <= 'Z') || (value >= 'a' && value <= 'z')
            ? (value >= 'A' && value <= 'Z') ? String.fromCharCode(value.charCodeAt() + 32)
                : String.fromCharCode(value.charCodeAt() - 32)
            : value;
    }).join('');
};
console.log(stringCaseConversion('abCD2'));