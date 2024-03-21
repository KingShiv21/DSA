
function bubbleSort(arr) {
    const n = arr.length;
    let temp ,i , j;

    for ( i = 0; i < n ; i++) {
       
        for ( j = 0; j < n - 1 - i ; j++) {
            
            if (arr[j] > arr[j+1]) {
                temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
        
    }

    return arr;
}
// bubble sort means big in the end in each main iteration 
// n unsorted elements ko swap krne m n-1 iterations lgenge each iteration m 
// Each iteration m swaps km hote jaenge kyuki sorted part inc hota jaega
//  n square


function selectionSort(arr) {
    const n = arr.length;
    let smallest, temp;

    for ( i = 0; i < n ; i++) {
       
        smallest = arr[i]
        for ( j = i ; j < n ; j++) {
            if (smallest > arr[j]) {
            smallest = arr[j]
            }
        }

        if (smallest != arr[i]) {
            temp = arr[i];
            arr[i] = smallest
            smallest = temp
        }
        
    }

    return arr;
}
// smallest in the start 
// in each main iteration , smallest element of unsorted part of array is replaced with i 
// unsorted part decreases -1 by each main iteration from start
//  n square


function insertionSort(arr) {
    const length = arr.length;
    for (let i = 1; i < length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", array);


 // bubble sort
console.log("Sorted array:", bubbleSort(array));

// selection sort
console.log("Sorted array:", selectionSort(array));

// insertion sort
console.log("Sorted array:", insertionSort(array));