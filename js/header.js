// laver variabler med alle afkrydsningsfelterne
var olDrop = document.getElementById('ol-drop');
var brygningDrop = document.getElementById('brygning-drop');
var kontaktDrop = document.getElementById('kontakt-drop');

// event listener for olDrop
olDrop.addEventListener('change', function() {
    if(this.checked) {
        // fjern markeringen fra brygningDrop og kontaktDrop
        brygningDrop.checked = false;
        kontaktDrop.checked = false;
    }
});

// event listener for brygningDrop
brygningDrop.addEventListener('change', function() {
    if(this.checked) {
        // fjern markeringen fra olDrop og kontaktDrop
        olDrop.checked = false;
        kontaktDrop.checked = false;
    }
});

// event listener for kontaktDrop
kontaktDrop.addEventListener('change', function() {
    if(this.checked) {
        // fjern markeringen fra olDrop og brygningDrop
        olDrop.checked = false;
        brygningDrop.checked = false;
    }
});