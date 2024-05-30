// Inizializzazione del client OAuth
function initClient() {
    gapi.client.init({
        apiKey: 'AIzaSyDP4GqvcV_JHV4C9fRIjyA_voqnLUwJPgw',
        clientId: '725881826643-fmukna81ca11vddrokgt1srcjr5hhgfi.apps.googleusercontent.com',
        discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
        scope: 'https://www.googleapis.com/auth/calendar.readonly'
    }).then(function () {
        // Autenticazione e gestione delle autorizzazioni
        gapi.auth2.getAuthInstance().signIn().then(loadCalendar);
    });
}

// Funzione per caricare il calendario
function loadCalendar() {
    $('#calendar').fullCalendar({
        googleCalendarApiKey: 'AIzaSyDP4GqvcV_JHV4C9fRIjyA_voqnLUwJPgw',
        events: {
            googleCalendarId: 'addressbook#contacts@group.v.calendar.google.com'
        },
        eventClick: function(event) {
            // Apertura degli eventi in una finestra popup
            window.open(event.url, 'gcalevent', 'width=700,height=600');
            return false;
        }
    });
}

// Caricamento del client OAuth
function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}

// Esecuzione del caricamento del client al caricamento della pagina
document.addEventListener('DOMContentLoaded', function() {
    handleClientLoad();
});
