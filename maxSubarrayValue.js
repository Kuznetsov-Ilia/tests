/*
 * Complete the 'maxSubarrayValue' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function maxSubarrayValue(arr) {
    let max_value = 0;
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            even_sum += arr[i];
        } else {
            odd_sum += arr[i];
        }
        const subarray_value = Math.pow(even_sum - odd_sum, 2);
        max_value = Math.max(max_value, subarray_value);
    }
    return Math.max(max_value, arr.length > 0 ? maxSubarrayValue(arr.slice(1)) : 0);

}