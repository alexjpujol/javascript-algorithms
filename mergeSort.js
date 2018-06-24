//time complexity: n log n
//divide your unsorted list until you have a series of 1 item lists. Then you put them back together in order

const mergeSort = list => {

    if (list.length === 1) {
        return list;
    }

    let mid = Math.floor(list.length / 2);
    let left = list.slice(0, mid);
    let right = list.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            left.slice(leftIndex, 1);
            leftIndex++;
        } else if (left[leftIndex] >= right[rightIndex]) {
            result.push(right[rightIndex]);
            right.slice(rightIndex, 1);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort([12, 3, 90, 67, 76, 21, 54, 3, 67, 101, 562, 4, 54, 93, 8]))