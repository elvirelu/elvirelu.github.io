let sousTotal = 0;
let totalTaxes = 0;
let totalFacture = 0;
const GST = 0.05;
const QST = 0.0975;

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

let initialiser = () => {
    localStorage.setObj("panier", [])
    let count = 0;
    let res=``;
    for(let unProduit of produits){
        if(count % 3 == 0){
            res += `<div class="row">`;
        }
        res += `<div class="col-md-1"></div>
            <div class="card col-md-3" onClick="showProduit(${unProduit.id});">
            <img src="../images/produits/${unProduit.image}" alt=""></img>
            <h5>${unProduit.nom}</h5>
            <h6>$ ${unProduit.prix}</h6>
            </div>
            `;
        count++;
        if(count % 3 == 0){
            res += `</div><br><br>`;
        }

        }
        $('#contenuProduits').html(res);
    }

let showProduit = (id) => {
    id=id-1;
    let res = `<div class="row">
            <div class="col-md-6">
            <img src="../images/produits/${produits[id].image}" alt=""></img>
            </div>
            <div class="col-md-6">
            <br><br>
            <h5>${produits[id].nom}</h5>
            <h5>Prix: $ ${produits[id].prix}</h5>
            <h6>Description: ${produits[id].description}</h6>
            <br><br>
            <button type="button" class="btn btn-warning" onclick="ajouterPanier(${id});">Ajouter dans le panier</button>
            <button type="button" class="btn btn-secondary" onclick="location.href = 'produits.html'">Retourner</button>
            </div>
    `;
    $('#contenuProduits').html(res);
}

let panierliste = localStorage.getObj("panier");

let ajouterPanier = (id) => {
    panierliste.push(produits[id]);
    localStorage.setObj("panier",panierliste);
    let resultat = `<h3>Produit bien ajoute dans le panier</h3>`;
    resultat += listerpanier();
}

let listerpanier = () => {
    let resultat = construireEntetes();
    for(let produit of panierliste){
        resultat += construireTR(produit);
    }
    resultat += "</tbody></table>";
    for(let unProduit of panierliste){
        sousTotal += unProduit.prix;
    }
    taxGST = sousTotal*GST;
    taxQST = sousTotal*QST;
    totalFacture = sousTotal + taxGST + taxQST;
    resultat += `<br><br>
    <button type="button" class="btn btn-primary" onclick="payer();">Aller Payer</button>
    <button type="button" class="btn btn-secondary" onclick="location.href = 'produits.html'">Continuer Acheter Produits</button>
    `;
    $('#contenuProduits').html(resultat);
}

const construireEntetes = () => {
    const entete = `
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Nom</th>
                <th scope="col">Prix</th>
                <th scope="col">Quantite</th>
                <th scope="col">Totale</th>
                </tr>
            </thead>
            <tbody>
    `;
    return entete;
}

const construireTR = (produit) =>{
    let tr=`<tr>
        <th>${produit.nom}</th>
        <td>${produit.prix}</td>
        <td>1</td>
        <td>${produit.prix}</td>
        <td></td>
    </tr>`;
    return tr;
}

let payer = () => {
    let text = "";
    text += "<h5>Sous-total = " + sousTotal.toFixed(2) + " $ ; </h5>";
    text += "<h6>GST = " + taxGST.toFixed(2) + " $ ; </h6>";
    text += "<h6>QST = " + taxQST.toFixed(2) + " $ ; </h6>";
    text += "<h4>Total = " + totalFacture.toFixed(2) + " $</h4>";
    let res = `${text}<br><br>
    <button type="button" class="btn btn-primary" onclick="confirmerPayer()">Confirmer et Payer</button>
    <button type="button" class="btn btn-warning" onclick="listerpanier()">Modifier</button>`;
    document.getElementById('contenuProduits').innerHTML = res;
}

let confirmerPayer = () => {
    document.getElementById('contenuProduits').innerHTML = "<h3>Merci de votre Achat</h3><h3>Vous allez recevoir la confirmation d'achat et la facture par courriel.</h3>";
}