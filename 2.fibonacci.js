function fibonacci(num) {
    let arr = []
       
    for (let i = 0; i < num; i++) {
        i === 0 || i === 1 ? arr.push(1) : arr.push(arr[i-1] + arr[i-2])
    }
    
    return arr
}
console.log(fibonacci(6))