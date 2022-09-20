function isPalindrome(Palindrome = ' ') {
    let length = Palindrome.length;
    for (let i = 0; i < length / 2; i++) {
        if (Palindrome[i] !== Palindrome[length - i - 1]) {
            return 'не палиндром';
        }
    }
    return 'палиндром';
}

console.log(isPalindrome(prompt('слово: ')));
