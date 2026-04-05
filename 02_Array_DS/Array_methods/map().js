// const arr= [1,2,3,4,5,6];
// arr.forEach(doubled);
// function doubled(value){
//    return value*2;
// }
// console.log(arr);

const arr= [1,2,3,4,5,6];
const arrray = arr.map(doubled);
function doubled(value){
   return value*2;
}
console.log(arr);
console.log(arrray);
const four= arrray.map(triall);
triall=(item)=>{
    return item*3;
} 
console.log(four);