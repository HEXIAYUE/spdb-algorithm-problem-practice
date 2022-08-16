// 4.判断两个字符串是否是异位：比如abcn和banc是一对，anc和nac是一对，两个字符串完全奇偶互换，则称为异位，判断两个字符串是否为异
// 位词，意思是判断两个字符串有相同数量的字母
function isYiWei(string1, string2) {
    let arr1 = string1.split('');
    let arr2 = string2.split('');
    if (arr1.length !== arr2.length) return false;
    if (arr1.length % 2 != 0) {
        arr1.pop();
        arr2.pop();
    }
    for (let i = 0; i < arr1.length; i += 2) {
        if (!(arr1[i] === arr2[i + 1] && arr1[i + 1] === arr2[i])) return false;
    }
    return true;
}
console.log(isYiWei('ancs', 'nadcds'));
console.log(isYiWei('anc', 'nad'));
console.log(isYiWei('ancdfs', 'nadcds'));
console.log(isYiWei('ancd', 'nadc'));