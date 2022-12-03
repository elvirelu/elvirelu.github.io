let contenuAccueil = () =>{
    // $('body').css('background', 'white');
let contenu = `
<table>
<tr>
<td>
<img src="../images/intro/salon.jpg">
</td>
<td>
<div class="para">
<h2>Historique de l’entreprise </h2><br>
Notre Atelier de coiffure située à Montréal.
Nous avons été créé en juin 2018.
C’est une nouvelle entreprise œuvrant dans le domaine de la coiffure.
Atelier de coiffure est un salon professionnel, dynamique et jeune qui emploie maintenant 5 personnes. 
</div>
</td>
</tr>

<tr>
<td>
    <div class="para">
        <h2>Nos principales réalisations</h2><br>
    Notre Atelier de coiffure fonctionne toujours très bien. Les coiffeurs sont talentueux, et ont beaucoup d’expériences dans le domaine de coiffure. 
      Nous avons des clients fidèles qui fréquentent dans notre salon.
      Autre service proposé qui semble bien accueilli par les clients est la vente de produits de soins capillaires.
    </div>
</td>
<td>
<img src="../images/intro/man.jpg">
</td>
</tr>

<tr>
<td>
<img src="../images/intro/produits.jpg">
</td>
<td>
<div class="para">
    <h2>Service et produit offert </h2><br>
    Atelier de coiffure est un salon qui offrent des services typiques de coiffure : toutes sortes de coupes de cheveux, shampoing, brushing, coloration et mèche, extensions capillaires, etc.
Le salon vend aussi une assez grande gamme de produits de soins capillaires : produits coiffants pour cheveux colorés, pour cheveux fins, etc.
</div>
</td>
</tr>
</table>
`;
$('#contenu').html(contenu);
}