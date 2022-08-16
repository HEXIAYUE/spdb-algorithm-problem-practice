// 14.字符串反转输出问题
function reverseString(str) {
    return [...str].reverse().join("");
}
console.log("abcdefg", reverseString("abcdefg"));