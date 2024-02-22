console.log("it works");

//creare un array che contiene varie mail
let emails=['pinco.pallino@gmail.com' , 'pallino.pinco@gmail.com' , 'pippo.paperino@gmail.com' ]


document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault()
    
    //creare una costante per la mail che inserisce l'utente
    let userMail= document.getElementById('email').value
    
    //creare una costante che indica mail non trovata
    let find = 'Non trovata'
    
    //creare un ciclo 
    for (let i = 0; i < emails.length; i++) {
    let email = emails[i];
    console.log(email);
    
    //creare SE mail=trovata stampa "mail trovata"
    if (email==userMail) {
        find="Trovata"
        
    }
    
}
//stampa i risultati
console.log(find);
})

