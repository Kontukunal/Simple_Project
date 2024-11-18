let arr=[3, 6, 7, 2, 14, 19, 20];

let even=[];
for(let i=0; i<arr.length; i++){
    if(arr[i] % 2 == 0){
        even.push(arr[i]);
    }
}

console.log("Even Numbers are: " + even);