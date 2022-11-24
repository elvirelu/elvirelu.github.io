let rendezvous = () =>{
    let name = document.getElementById('name');
    let selectedName = name.options[name.selectedIndex].text;

    let selectedServices = $('#service').val();

    let date = document.getElementById('date').value;

    let horaire = document.getElementById('horaire').value;

    let text = `<h3>Coiffeur: ${selectedName}</h3>
    <h3>Service: ${selectedServices}</h3>
    <h3>Date: ${date}</h3>
    <h3>Horaire: ${horaire}</h3>
    <br>
    <button type="button" class="btn btn-primary" onclick="confirmMsg();">Confirmer</button>
    <button type="button" class="btn btn-warning" onclick="location.href='rendez-vous.html'">modifier</button>
    `
    $('#contenu').html(text)
}

let confirmMsg = () =>{
    let text = `<h3>Votre rendez-vous est bien enregistré.</h3>
    <h3>Vous allez recevoir un courriel de confirmation à bien tôt.</h3>
    `
    $('#contenu').html(text)
}