"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arr = [4, 1, 7, 9, 3, 6];
var tracker = new Array(arr.length);
var idx = -1;
var largestHowMuch = 3;
var max;
for (var j = 0; j < largestHowMuch; j++) {
    max = -Infinity;
    for (var i = 0; i < arr.length; i++) {
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
console.log(tracker);
