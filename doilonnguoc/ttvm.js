function reverseArray(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

function displayReversedArray() {
    const arr = [-3, 5, 1, 3, 2, 10];
    const reversedArr = reverseArray(arr);
    document.getElementById("result").innerHTML = reversedArr.join(", ");
}