
function isPalindrom(word) {

    let arr2 = [...word].reverse()
    let arr = [...word]
    let result

    for (let i = 0; i< arr.length; i++) {
        return (arr[i] == arr2[i]) ? true : false
    }

    // return result
}

console.log(isPalindrom('sabss'))