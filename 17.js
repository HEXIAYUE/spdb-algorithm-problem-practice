// 17.输出一组字符串，再输入一组字符串，判断是否有与之前字符串一致，有则
// 输出是第几个字符与之前字符串一致
function strCommon(str1,str2){
    return str1.indexOf(str2) > -1 ? str1.indexOf(str2) : false;
}
console.log("sxxdaf","xd");
console.log(strCommon("sxxdaf", "xsd"));