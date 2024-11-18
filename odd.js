let arr=[3, 6, 7, 2, 14, 19, 20];

let odd=[];
for(let i=0; i<arr.length; i++){
    if(arr[i] % 2 == 1){
        odd.push(arr[i]);
    }
}

console.log("Odd Numbers are: " + odd);