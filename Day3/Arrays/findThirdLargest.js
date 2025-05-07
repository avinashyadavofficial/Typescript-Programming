//to find third largest using tracking logic
let arr=[4,1,7,9,3,6];
// let tracker=[arr.length].fill(false);
let tracker={};
let idx=-1;
let largestHowMuch=3;
let max;
for(let j=0;j<largestHowMuch;j++){
    max=-Infinity;
    for(let i=0;i<arr.length;i++){
        if(!tracker[i]){
            if(arr[i]>max){
                max=arr[i];
                idx=i;
            }
        }
    }
    tracker[idx]=true;
}
console.log(max);
console.log(tracker);
