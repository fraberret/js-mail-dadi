
let numbers = [1,2,3,4,5,6]
let user1Number = document.getElementById('user1Number')
let computerNumber = document.getElementById('computerNumber')
let random1 = numbers[Math.floor(Math.random()*numbers.length)]
let random2 = numbers[Math.floor(Math.random()*numbers.length)]

let results=document.getElementById('result')

document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault()

    user1Number.innerHTML=random1
    computerNumber.innerHTML=random2

if (random1>random2) {
    console.log('User 1 vince' );
    results.innerHTML='User 1 vince'
    
} else if (random1==random2) {
    console.log('Parità');
    results.innerHTML='Parità'
    

}else{
    console.log('Computer vince');
    results.innerHTML='Computer vince'
}

})



