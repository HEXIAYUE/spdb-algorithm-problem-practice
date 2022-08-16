// 11.输出字符串简称，例如字符串是"end of file"，输出"EOF"
function stringAbbreviation(str) {
    return str.split(' ').map((value) => value[0]).join("").toLocaleUpperCase();
}
console.log("end of file", stringAbbreviation("end of file"));