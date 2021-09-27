
function isPalindrom(word) {

    let arr2 = [...word].reverse()
    let arr = [...word]
    let result

    for (let i = 0; i< arr.length; i++) {
        if (arr[i] !== arr2[i]) {
            return false
        }  
    }

    return true
}

console.log(isPalindrom('sas'))