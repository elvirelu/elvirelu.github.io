let tabMems = [
    {"id":1,"prenom":"Marie","nom":"Curie"},
    {"id":2,"prenom":"James","nom":"Bond"},
    {"id":3,"prenom":"Sophie","nom":"Anne"},
    {"id":4,"prenom":"Ben","nom":"White"}
];

let idIncr = tabMems.length + 1;

let memEnreg = () => {

    let prenom = document.getElementById("prenom").value;
    let nom = document.getElementById("nom").value;
    let courriel = document.getElementById("courriel").value;
    let motdepasse = document.getElementById("motdepasse").value;

    let unMembre = {"id":idIncr,"prenom":prenom,"nom":nom};
    let unConnex = {"id":idIncr,"courriel":courriel,"pass":motdepasse};

    tabMems.push(unMembre);
    tabConnex.push(unConnex);
    document.getElementById('msgEnregErr').innerHTML="Membre bien enregistré";

    setTimeout(() => {
        document.getElementById('formEnreg').reset();
        $('#modalEnreg').modal('hide');
    }, 2000);
}

let enReg = () => {
    if(document.getElementById('motdepasse').value == document.getElementById('confirmMotdepasse').value){
        memEnreg();
    }
    else{
        document.getElementById('msgEnregErr').innerHTML="mots de passes ne sont pas egaux";
    }
}

