// 13.字符串括号匹配问题
function demo(str) {
    let leftArr = [];
    if (str.length % 2 != 0) {
        return false;
    } else {
        for (let v = 0; v < str.length / 2; v++) {
            if ("({[".includes(str[v])) {
                leftArr.push(str[v]);
            } else {
                if (leftArr.pop() != str[v]) {
                    return false;
                }
            }
        }
    }
    return true;
}
demo("{[()]}", demo("{[()]}"));