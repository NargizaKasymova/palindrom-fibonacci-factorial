
function isPalindrom(word) {

    let arr2 = [...word].reverse()
    let arr = [...word]
    let result

    for (let i = 0; i< arr.length; i++) {
        (arr[i] == arr2[i]) ? result = true : result = false
    }

    return result
}

console.log(isPalindrom('hannah'))