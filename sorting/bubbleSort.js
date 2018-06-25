const bubbleSort = list => {

    let swapped;
    let operationCounter = 0;

    do {
        swapped = false;
        for (let i = 0; i < list.length - 1; i++) {
            operationCounter++; 
            if (list[i] > list[i + 1]) {
                //if a swap is needed, add a placeholder to hold the value that will be overwritten.
                let temp = list[i + 1];
                list[i + 1] = list[i];
                list[i] = temp;
                swapped = true;
            }
            //this loop runs in it's entirety and only breaks out at the end of the loop IF there were no swaps.
        }

    } while (swapped);
    console.log(operationCounter);
    return list;
}

console.log(bubbleSort([12, 3, 90, 67, 76, 21, 54, 3, 67, 101, 562, 4, 54, 93, 8, 25]));