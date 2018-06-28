//time complexity: n log n
//divide your unsorted list until you have a series of 1 item lists. Then you put them back together in order

const mergeSort = list => {
    //define our base case
    if (list.length === 1) {
        return list;
    }

    let mid = Math.floor(list.length / 2);
    //split the array in two, make the recursive calls
    let left = list.slice(0, mid);
    let right = list.slice(mid);

    //merge them back together
    return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    //as long as the arrays have something in them, check elements from each array and sort them
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            left.slice(leftIndex, 1);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            right.slice(rightIndex, 1);
            rightIndex++;
        }
    }

    //if one of the arrays runs out before the other, then attach the remainder of the longer array to results
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort([12, 3, 90, 67, 76, 21, 54, 3, 67, 101, 562, 4, 54, 93, 8]))