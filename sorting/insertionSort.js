//good option for arrays that you think are already mostly sorted. worst case is O(n^2)
//you basically grab elements of the unsorted part of the list and insert them into the sorted part

const insertionSort = list => {
    let operationCounter = 0;
    //at this point we treat the first element as the only element in a sorted array, so the loop starts at i = 1
    for (let i = 1; i < list.length; i++) {
        //the inner loop checks to see if prior elements are greater than our current element. 
        for (let j = 0; j < i; j++) {
            operationCounter++;
            //is our current item less than prior items in the list? If so....
            if (list[i] < list[j]) {
                //take i out of our list using splice, and then re-insert it at position j
                const spliced = list.splice(i, 1);
                list.splice(j, 0, spliced[0]);
            }
        }
    }
    console.log(operationCounter);
    return list;
}

console.log(insertionSort([12, 3, 90, 67, 76, 21, 54, 3, 67, 101, 562, 4, 54, 93, 8, 25]));

