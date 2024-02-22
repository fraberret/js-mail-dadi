console.log("it works");

//creare un array che contiene varie mail
let emails=['pinco.pallino@gmail.com' , 'pallino.pinco@gmail.com' , 'pippo.paperino@gmail.com' ]
//creare una costante per la mail che inserisce l'utente
let userMail= 'pippo.paperino@gmail.com'
console.log(userMail);
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