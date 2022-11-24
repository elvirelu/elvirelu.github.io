let tabConnex = [
    {"id":1,"courriel":"curie@gmail.com", "pass":"12345"},
    {"id":2,"courriel":"bond@gmail.com", "pass":"12345"},
    {"id":3,"courriel":"anne@gmail.com", "pass":"12345"},
    {"id":4,"courriel":"white@gmail.com", "pass":"12345"}
];

let connecter = () => {
    let connected = false;
    for(let unConnex of tabConnex){
       if(document.getElementById('connexEmail').value == unConnex.courriel && document.getElementById('connexPassword').value == unConnex.pass){
            setTimeout(() => {
                document.getElementById('formConnex').reset();
                $('#modalConnex').modal('hide');
            }, 2000);
            window.open('pages/connected.html');
            connected = true;
       }
    }
    if(connected == false){   
        document.getElementById('msgConnexErr').innerHTML="Impossible de vous connecter. Contactez l'administrateur.";
    }
}