// 12.字符串移除奇数位置字符问题
function demo(str) {
    return str.split("").filter((value, index) => {
        return (index % 2 == 0);
    }).join("");
}
console.log("abcdef", demo("abcdef"));