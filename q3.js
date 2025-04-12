function isPalindrome(str) {
    let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversed = "";
    for (let i = cleaned.length - 1; i >= 0; i--) {
      reversed += cleaned[i];
    }
    return cleaned === reversed;
  }
  
  console.log(isPalindrome("Madam"));       // Output: true
  console.log(isPalindrome("Racecar"));     // Output: true
  console.log(isPalindrome("Hello"));       // Output: false
  