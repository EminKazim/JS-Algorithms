let arr = [1,3,4,5,7,8,10]

squareEvens(arr)

function squareEvens(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2 == 0) {
            sum += arr[i] * arr[i]

        }
    }
    console.log(sum);
}


