// Write a function that checks if a given string is a palindrome.
function checkPalindrome(str:string):boolean{
    // for(let i =0;i<str.length/2;i++){
    //     if(str[i]!==str[str.length-1-i]){
    //         return false;
    //     }
    // }
    // return true;
    return str === str.split('').reverse().join('');
}

console.log(checkPalindrome("nitin"));