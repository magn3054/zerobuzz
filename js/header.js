// laver variabler med alle menuer
var olDrop = document.getElementById('ol-drop');
var brygningDrop = document.getElementById('brygning-drop');
var seasonDrop = document.getElementById('season-drop');
var eventDrop = document.getElementById('event-drop');

// event listener for olDrop
olDrop.addEventListener('change', function() {
    if(this.checked) {
        // fjern markeringen fra de andre
        brygningDrop.checked = false;
        seasonDrop.checked = false;
        eventDrop.checked = false;
    }
});

// event listener for brygningDrop
brygningDrop.addEventListener('change', function() {
    if(this.checked) {
        // fjern markeringen fra de andre
        olDrop.checked = false;
        seasonDrop.checked = false;
        eventDrop.checked = false;
    }
});

// event listener for seasonDrop
seasonDrop.addEventListener('change', function() {
    if(this.checked) {
        // fjern markeringen fra de andre
        olDrop.checked = false;
        brygningDrop.checked = false;
        eventDrop.checked = false;
    }
});

// event listener for eventDrop
eventDrop.addEventListener('change', function() {
    if(this.checked) {
        // fjern markeringen fra de andre
        olDrop.checked = false;
        brygningDrop.checked = false;
        seasonDrop.checked = false;
    }
});

function ref(page) {
    window.location.href = '/' + page + '.html';
    console.log('/' + page + '.html');
}