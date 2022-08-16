// 15.去掉字符串末尾的空格
function stringSpace(str) {
    return str.replace(/\s*$/g, "");
}
console.log("10  5   ".length);
console.log(stringSpace("10  5   ").length);