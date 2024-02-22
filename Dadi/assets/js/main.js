

let numbers = [1,2,3,4,5,6]


let random1 = numbers[Math.floor(Math.random()*numbers.length)]

console.log(`User 1: ${random1}`);

let random2 = numbers[Math.floor(Math.random()*numbers.length)]

console.log(`Computer: ${random2}`);;

if (random1>random2) {
    console.log('User 1 vince' );
    
} else{
    console.log('Computer vince');
}