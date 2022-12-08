let quantite = 0;
let sousTotal = 0;
let promotion = 0;
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
    let res=`<h3>Produits</h3><br><br>`;
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
        $('#contenu').html(res);
    }

let showProduit = (id) => {
    id=id-1;
    let res = `<div class="row">
            <div class="col-md-6">
            <img src="../images/produits/${produits[id].image}" alt=""></img>
            </div>
            <div class="col-md-6">
            <br><br>
            <h5>${produits[id].nom}</h5><br>
            <h5>Prix: $ ${produits[id].prix}</h5><br>
            <h5>Description:<br><br>${produits[id].description}</h5>
            <br><br>
            <button type="button" class="btn btn-warning" onclick="ajouterPanier(${id});">Ajouter dans le panier</button>
            <button type="button" class="btn btn-secondary" onclick="initialiser();">Retourner</button>
            </div>
    `;
    $('#contenu').html(res);
}

let panierliste = localStorage.getObj("panier");

let ajouterPanier = (id) => {
    panierliste.push(produits[id]);
    localStorage.setObj("panier",panierliste);
    // let resultat = `<h3>Produit bien ajoute dans le panier</h3>`;
    listerpanier();
}

let listerpanier = () => {
    let resultat = construireEntetes();
    for(let produit of panierliste){
        resultat += construireTR(produit);
    }

    resultat += "</tbody></table>";
    resultat += `<br><br>
    <button type="button" class="btn btn-primary" onclick="payer();">Aller Payer</button>
    <button type="button" class="btn btn-warning" onclick="initialiser();">Continuer Acheter Produits</button>
    `;
    $('#contenu').html(resultat);

    
    sousTotal = 0;
    for(let unProduit of panierliste){
        sousTotal += unProduit.prix;
    }
    taxGST = sousTotal*GST;
    taxQST = sousTotal*QST;
    totalFacture = sousTotal + taxGST + taxQST;

}

const construireEntetes = () => {
    const entete = `
    <h3>Panier</h3><br><br>
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Nom</th>
                <th scope="col">Prix</th>
                <th scope="col">Quantite</th>
                <th scope="col">Totale</th>
                <th scope="col">Delete</th>
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
        <td><i class="bi bi-trash3" onclick="del(${produit.id});"></i></td>
    </tr>`;
    return tr;
}

let del = (id) => {
    let newPanierliste = [];
    for(let i=0;i<panierliste.length;i++){
        if(panierliste[i].id==id){
            panierliste.splice(i,1);
        }
        break;
    }
    listerpanier();
}

let payer = () => {
    let msg = "Nous avons une grande vente du 12/01/2022 au 12/31/2022. Si vous achetez des produits capillaires de plus de 100 $, \
    vous obtiendrez 15 % de rabais. Si vous dépensez plus de 200 $, vous obtiendrez 20 % de rabais. Si vous dépensez plus de 300 $,\
    vous obtiendrez 30 % de rabais. Merci d'utiliser le code promotionnel : CMBSC1";
    let text = "";
    text += "<h5>Sous-total = " + sousTotal.toFixed(2) + " $ ; </h5>";
    text += "<h5>Promotion = - " + promotion.toFixed(2) + " $ ; </h5>";
    text += "<h6>GST = " + taxGST.toFixed(2) + " $ ; </h6>";
    text += "<h6>QST = " + taxQST.toFixed(2) + " $ ; </h6>";
    text += "<h4>Total = " + totalFacture.toFixed(2) + " $</h4>";

    let res = `<div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-4">
    ${text}<br><br>
    <h5>Promo Code:</h5>
    <input id="code" type="text" value="">
    <button type="button" class="btn btn-secondary" onclick="promo()">Appliquer Code</button>
    <br><br>
    <button type="button" class="btn btn-primary" onclick="confirmerPayer()">Confirmer et Payer</button>
    <button type="button" class="btn btn-warning" onclick="listerpanier()">Modifier</button>
    </div>
    <div class="col-md-1"></div>
    <div class="col-md-4">
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h3 class="card-title">Grande Vente</h3>
      <h4 class="card-subtitle mb-2 text-muted">Produits Capillaires</h4><br>
      <h5 class="card-text"><div id="msg"></div></h5><br>
      <button type="button" class="btn btn-info" onclick="initialiser()">Continuer Acheter Produits</button>
    </div>
  </div>

    </div>
    `;
    document.getElementById('contenu').innerHTML = res;

    if(sousTotal < 100){
        msg = "Lorsque vous achetez plus de 100 $, vous pouvez obtenir 15 % de rabais, utiliser le code: CMBSC1";
    }
    else if(sousTotal>=100 && sousTotal<200){
        msg = "Lorsque vous achetez plus de 200 $, vous pouvez obtenir 20 % de rabais, utiliser le code: CMBSC1"
    }
    else if(sousTotal>=200 && sousTotal<300){
        msg = "Lorsque vous achetez plus de 300 $, vous pouvez obtenir 30 % de rabais, utiliser le code: CMBSC1"
    }
    $('#msg').html(msg);
}


let promo = () => {
    let code = document.getElementById('code').value;
    if(code.toUpperCase() == "CMBSC1"){
        if(sousTotal>=100 && sousTotal<200){
            promotion = sousTotal*0.15;
        }
        else if(sousTotal>=200 && sousTotal<300){
            promotion = sousTotal*0.20;
        }
        else if(sousTotal>=300){
            promotion = sousTotal*0.30;
        }
        taxGST = (sousTotal-promotion)*GST;
        taxQST = (sousTotal-promotion)*QST;
        totalFacture = sousTotal - promotion + taxGST + taxQST;
    }
    payer();
}


let confirmerPayer = () => {
    panierliste = [];
    promotion = 0;
    document.getElementById('contenu').innerHTML = "<h3>Merci de votre Achat</h3><h3>Vous allez recevoir la confirmation d'achat et la facture par courriel.</h3>";
}