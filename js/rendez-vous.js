let selectedName = "";
let selectedServices = "";
let date = "";
let horaire = "";

let rendezvous = () =>{
    date = document.getElementById('date').value;
horaire = document.getElementById('horaire').value;
    let text = `
    <div class="progress">
    <div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
    </div><br><br>

    <h3>Coiffeur: ${selectedName}</h3>
    <h3>Service: ${selectedServices}</h3>
    <h3>Date: ${date}</h3>
    <h3>Horaire: ${horaire}</h3>
    <br>
    <button type="button" class="btn btn-primary" onclick="confirmMsg();">Confirmer</button>
    <button type="button" class="btn btn-warning" onclick="formCoiffeur();">modifier</button>
    `
    $('#contenu').html(text)
}

let confirmMsg = () =>{
    let text = `<h3>Votre rendez-vous est bien enregistré.</h3>
    <h3>Vous allez recevoir un courriel de confirmation à bien tôt.</h3>
    `
    $('#contenu').html(text)
}

let formCoiffeur = () => {
    let contenu = `
    <div id="progbar">
    <div class="progress">
      <div class="progress-bar" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    </div>
    <br><br>
    <form>
    <div class="row mb-3">
      <label for="name" class="col-sm-2 col-form-label fs-3">Coiffeur</label>
      <div class="col-sm-6">
        <select id="name" name="name" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option>John Smith</option>
            <option>Tony Bruce</option>
            <option>William Dawson</option>
            <option>Julie Beront</option>
            <option>Jean Lachance</option>
        </select>
      </div>
    </div>

    <div class="col-sm-8 text-end">
    <button type="button" class="btn btn-primary" onclick="formService();">Suivant</button>
    </div>

    </form>
    `;
    $('#contenu').html(contenu);

}

let formService = () =>{
    let name = document.getElementById('name');
    selectedName = name.options[name.selectedIndex].text;
    let contenu =  `
    <div class="progress">
  <div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: 33%" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"></div>
</div><br><br>

    <form>
    <div class="row mb-3">
      <label for="service" class="col-sm-2 col-form-label fs-3">Service</label>
      <div class="col-sm-6">
        <select id="service" name="service" class="form-select form-select-lg" size="11" multiple aria-label="multiple select example">
            <option>Coupe</option>
            <option>Mise en plis</option>
            <option>Coiffure de soirée</option>
            <option>Coloration</option>
            <option>Permanente</option>
            <option>Traitement capillaire</option>
            <option>Mèches et effets</option>
            <option>Extensions capillaires</option>
            <option>Élastiques invisibobble</option>
            <option>Bijoux pour cheveux</option>
            <option>Retouche de repousses</option>
        </select>
      </div>
    </div>

    <div class="row mb-3">
    <div class="col-sm-4 text-start">
    <button type="button" class="btn btn-secondary" onclick="formCoiffeur();">Précédent</button>
    </div>
    <div class="col-sm-4 text-end">
    <button type="button" class="btn btn-primary" onclick="formDate();">Suivant</button>
    </div>
    </div>

    </form>
    `;
    $('#contenu').html(contenu);
}

let formDate = () =>{
    selectedServices = $('#service').val();
    let contenu = `
    <div class="progress">
  <div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: 67%" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100"></div>
</div><br><br>
    <form>
    <div class="row mb-3">
        <label for="date" class="col-sm-2 col-form-label fs-3">Date</label>
        <div class="col-sm-6">
            <input id="date" class="form-control form-control-lg" type="date">
        </div>
    </div>
    
    <div class="row mb-3">
        <label for="horaire" class="col-sm-2 col-form-label fs-3">Horaire</label>
        <div class="col-sm-6">
            <input id="horaire" class="form-control form-control-lg" type="time">
        </div>
    </div>
<br><br>

<div class="row mb-3">
<div class="col-sm-4 text-start">
    <button type="button" class="btn btn-secondary" onclick="formService();">Précédent</button>
</div>
<div class="col-sm-4 text-end">
    <button type="button" class="btn btn-primary" onclick="rendezvous();">Envoyer</button>
    <button type="button" class="btn btn-warning" onclick="location.href='connected.html'">Annuler</button>
</div>
</div>
</form>
`;
$('#contenu').html(contenu);
date = document.getElementById('date').value;
horaire = document.getElementById('horaire').value;
}
