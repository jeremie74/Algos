function sumZero(arr){
    let left = 0;
    let right = array.length - 1;
    while (left < right){
        let sum = arr[left] + arr[right];
        if (sum === 0){
            return array[left], array[right];
        } else if (sum < 0) {
            right--;
        } else {
            left++;
        }

    }/** END while */
}/** END Function */

console.log(sumZero([ -5, -4, -2,4,6,9,12]));
