let contenuAccueil = () =>{
    $('body').css('background', 'white');
let contenu = `
<div class="row justify-content-between">
<div class="col-5"><img src="../images/intro/salon.jpg"></div>
<div class="col-5">
<div class="para">
<h2>Historique de l’entreprise </h2>
Notre Atelier de coiffure située à Montréal.
Nous avons été créé en juin 2018.
C’est une nouvelle entreprise œuvrant dans le domaine de la coiffure.
Atelier de coiffure est un salon professionnel, dynamique et jeune qui emploie maintenant 5 personnes. 
Nous désirons offrir le meilleur service pour ses clients et ses employés avec l’ajout d’un système de gestion informatique.
</div>
</div>
</div>
<br><br>
<div class="row justify-content-between">

<div class="col-5">
    <div class="para">
        <h2>Une liste de ses principales réalisations</h2>   
      Le salon de coiffure fonctionne toujours très bien. Les coiffeurs en fonction dans le salon sont talentueux, et ont beaucoup d’expériences dans le domaine de coiffure. 
      Nous avons des clients fidèles qui habitent, pour la plupart, près du salon.
      Autre service proposé qui semble bien accueilli par les clients est la vente de produits de soins capillaires.
  
  </div>
    </div>
<div class="col-5"><img src="../images/intro/man.jpg"></div>
</div>
<br><br>
<div class="row"></div>

<div class="row justify-content-between">
<div class="col-5"><img src="../images/intro/produits.jpg"></div>
<div class="col-5"><div class="para">
    <h2>Les objectifs du service ou du produit offert </h2>
    Atelier de coiffure est un salon qui offrent des services typiques de coiffure : toutes sortes de coupes de cheveux, shampoing, brushing, coloration et mèche, extensions capillaires, etc.
Le salon vend aussi une assez grande gamme de produits de soins capillaires : produits coiffants pour cheveux colorés, pour cheveux fins, etc.
</div>
</div>

</div>

</div>
`;
$('#contenuIndex').html(contenu);
}