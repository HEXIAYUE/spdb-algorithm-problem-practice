// 8.输出字符串中仅出现一次的第一个字符
function firstStr(str) {
    let obj = {};
    str.split('').map((value, index, arr) => {
        let i = 0;
        arr.map(item => {
            if (value === item) i++;
            obj[value] = i;
        })
    })
    for(let i in obj){
        if(obj[i] === 1) return i;
    }
}
console.log(firstStr('ababddscg'))