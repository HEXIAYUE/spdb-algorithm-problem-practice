// 10.给定一个字符串，一个子串，判断子串在该字符串中出现的次数
function countNum(strParent, strChild) {
    let i = 0;
    let index = 0;
    while (index > -1 && strParent.indexOf(strChild, index) > -1) {
        if (i === 0) index = strParent.indexOf(strChild, index);
        index = strParent.indexOf(strChild, index+1);
        i++;
    }
    return i;
}
console.log(countNum('abcdsfag', 'a'));
// console.log('abcd'.indexOf('a',-1));
