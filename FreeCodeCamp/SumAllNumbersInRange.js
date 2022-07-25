function sumAll(arr) {

    var first = arr[0] > arr[1] ? arr[1] : arr[0],
        last = arr[0] > arr[1] ? arr[0] : arr[1];
    sum = 0;
    for (var i = first; i <= last; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumAll([4, 1]));