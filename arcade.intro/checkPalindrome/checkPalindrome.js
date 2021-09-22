function checkPalindrome(x) {
    return x === x.split('').reverse().join('') ? true : false;
}