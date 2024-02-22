//creare un array che contiene varie mail
let emails=['pinco.pallino@gmail.com' , 'pallino.pinco@gmail.com' , 'pippo.paperino@gmail.com' ]

let risposta = document.getElementById("answer")

document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault()
    
    //creare una costante per la mail che inserisce l'utente
    let userMail= document.getElementById('email').value
    
    //creare una costante che indica mail non trovata
    let find = document.innerHTML= '<div id="answer" class="py-3 color_red">Inserisci Email corretta</div>'
    
    //creare un ciclo 
    for (let i = 0; i < emails.length; i++) {
    let email = emails[i];
    //console.log(email);
    
    //creare SE mail=trovata stampa "mail trovata"
    if (email==userMail) {
        find='<div id="answer" class="py-3 color_green "> Mail corretta</div>'
        
    }
    
}
//stampa i risultati
risposta.innerHTML=find
//console.log(find);
})

