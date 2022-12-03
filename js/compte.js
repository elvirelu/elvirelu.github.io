let compte = () => {
let contenu = `
    <div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-4">
<div class="styled-grid-item css-byc8v3">
<img src="../images/compte/account.png" alt="account"></img>
<h5>Détails du compte</h5>
<div>consulter et apporter des modifications aux informations personnelles</div>           
</div>
</div>

<div class="col-md-4">
<div class="styled-grid-item css-byc8v3">
<img src="../images/compte/address.png" alt="address"></img>
<h5>Carnet d'adresses</h5>
<div>consulter et gérer vos adresses</div>           
</div>
</div>
</div>
<br><br>

<div class="row">
<div class="col-md-2"></div>
<div class="col-md-4">
<div class="styled-grid-item css-byc8v3">
<img src="../images/compte/orders.png" alt="orders"></img>
<h5>Commandes et Achats</h5>
<div>suivre les commandes et voir les achats</div>       
</div>
</div>

<div class="col-md-4">
<div class="styled-grid-item css-byc8v3">
<img src="../images/compte/rendez-vous.png" alt="rendez-vous"></img>
<h5>Détails du Rendez-vous</h5>
<div>consulter, annuler ou modifier rendez-vous</div>           
</div>
</div>
</div>
`;
$('#contenu').html(contenu);
}