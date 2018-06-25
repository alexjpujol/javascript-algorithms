
//takes a sorted array and tried to find a specified item. Break the sorted array in half, and then recursively continue to break the sections in half based on the current location 

const binarySearch = (arr, item) => {
    let min = 0;
    let max = arr.length - 1;
    let guess;

    while (min <= max) {
        //take our array and split it in two. Guess is the index to look up
        guess = Math.floor((min + max) / 2);


        console.log(guess);
        //if our guess is the item, return the index of the guess
        if (arr[guess] === item) {
            return guess;
        } else {
            //if our guess is too low, set the minimum equal to our guess, if too high set the maximum equal to our guess. You keep folding the array in half.
            arr[guess] < item ? min = guess : max = guess;
        }

    }
    return -1;
}


console.log(binarySearch([2, 3, 5, 6, 12, 19, 26, 35, 43, 60, 78, 90, 101, 103, 105, 110, 125], 101));

