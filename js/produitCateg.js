let produitCateg = () => {
let contenu = `<h3>Acheter par catégorie</h3>
<br><br>
<div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-4">
<div class="styled-grid-item css-byc8v3">
<a href="javascript:initialiser();">
<img src="../images/category/soin.jpg" alt="soin"></img>
<h5>Soin du Cheveux</h5>
</a>
</div>
</div>

<div class="col-md-4">
<div class="styled-grid-item css-byc8v3">
<a href="javascript:initialiser();">
<img src="../images/category/color.png" alt="coloartion"></img>
<h5>Coloration</h5>
</a>
</div>
</div>
</div>
<br><br>

<div class="row">
<div class="col-md-2"></div>
<div class="col-md-4">
<div class="styled-grid-item css-byc8v3">
<a href="javascript:initialiser();">
<img src="../images/category/man.png" alt="man"></img>
<h5>Hommes</h5>
</a>
</div>
</div>

<div class="col-md-4">
<div class="styled-grid-item css-byc8v3">
<a href="javascript:initialiser();">
<img src="../images/category/woman.png" alt="woman"></img>
<h5>Femmes</h5>
</a>
</div>
</div>
</div>`;
$('#contenu').html(contenu);
}