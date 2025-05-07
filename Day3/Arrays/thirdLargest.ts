let arr: number[] = [4, 1, 7, 9, 3, 6];
let tracker: boolean[] = new Array(arr.length);
let idx: number = -1;
let largestHowMuch: number = 3;
let max: number;

for (let j = 0; j < largestHowMuch; j++) {
    max = -Infinity; 
    for (let i = 0; i < arr.length; i++) {
        if (!tracker[i]) {
            if (arr[i] > max) {
                max = arr[i];
                idx = i;
            }
        }
    }
    tracker[idx] = true; 
}
console.log(max); 