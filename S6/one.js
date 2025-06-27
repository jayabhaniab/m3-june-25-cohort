function selectionSort() {
    for(let i=0; i<=n-2; i++) {
        let min = i;
        for(let j=i; j<=n-1; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
}


function bubbleSort() {
    for(let i=n-1; i>=1; i--) {
        let didSwap = false;
        for(let j=0; j<=i-1; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                didSwap = true;
            }
        }
        if(didSwap == false) {
            break;
        }
        console.log("running");
    }
}


function insertionSort() {
    for(let i=0; i<=n-1; i++) {
        let j=i;
        while(j>0 && arr[j-1] > arr[j]) {
            let temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
            j--;
            console.log("running");
        }
    }
}



let arr = [1, 3, 5, 6, 8, 9];
let n = arr.length;
// selectionSort(arr, n);
// bubbleSort(arr, n);
insertionSort(arr, n);
console.log(arr);