// 16.判断一个字符串中数字，大小写字母、空格以及特殊字符的数量并输出
function stringLength(str) {
    const strType = {
        number: 0,
        word: 0,
        space: 0,
        other: 0
    };
    for (let v of str) {
        if (v.match(/\d/) != null) {
            strType.number++;
        } else if (v.match(/[a-z]/) != null) {
            strType.word++;
        } else if (v.match(/\s/) != null) {
            strType.space++;
        } else {
            strType.other++;
        }
    }
    let res = '';
    for (let k in strType) {
        res += '' + k + ': ' + strType[k] + "\n";
    }
    return res;
}
console.log("s12xx !@#$%");
console.log(stringLength("s12xx !@#$%"));