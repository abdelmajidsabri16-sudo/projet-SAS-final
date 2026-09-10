const prompt = require('prompt-sync')();
const trajets = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];

const tickets = [];
let ticketId = 1;
/// --------------------------------------------------------------


function afficherMenu() {
    let choix;


do {
    console.log("=================================")
    console.log("        RAILWAY MANAGER")
    console.log("=================================\n")
    console.log("1. Afficher les trajets\n2. Acheter un ticket")
    console.log("3. Afficher les tickets\n4. Annuler un ticket")
    console.log("5. Rechercher un ticket\n6. Filtrer les trajets")
    console.log("7. Trier les trajets\n8. Statistiques\n0. Quitter\n")

    


    choix = Number(prompt("Votre choix : "));

    switch (choix) {

        case 1:
            Afficherlestrajets();
            break;

        case 2:
            Acheterunticket();
            break;

        case 3:
            Afficherlestickets();
            break;

        case 4:
            Annulerunticket();
            break;

        case 5:
            Rechercherunticket();
            break;

        case 6:
            Filtrerlestrajets();
            break;

        case 7:
            Trierlestrajets();
            break;
        
        case 8:
            Statistiques();
            break;    

        case 0:
            console.log("===============Merci d'avoir utilisé Railway Manager.=============");
            break;

        default:
            console.log("Choix invalide.");
    }

} while (choix !== 0);

}
afficherMenu()


function Afficherlestrajets() {
    console.log("=== TRAJETS DISPONIBLES ===\n")

    for (let i = 0; i < trajets.length; i++) {
        console.log("#" + (i+1) + " " + trajets[i].departure + " " + "→" + " " + trajets[i].destination)
        console.log("depart : " + trajets[i].departureTime)
        console.log("arrivee : " + trajets[i].arrivalTime)
        console.log("prix : " + trajets[i].price + " DH")
        console.log("Places disponibles  : " + trajets[i].availableSeats + "\n")
    }

}

function Acheterunticket() {
    
    const nomDePassage = prompt("Nom du passager : ");
    const Identifiantdutrajet = Number(prompt("Identifiant du trajet : "));

    let trajetTrouve = null;

    for (let i = 0; i < trajets.length; i++) {

        if (trajets[i].id === Identifiantdutrajet) {
            trajetTrouve = trajets[i];
            break;
        }
    }

    if (trajetTrouve === null) {

        console.log("Trajet introuvable.");

    } else if (trajetTrouve.availableSeats === 0) {

        console.log("Train complet.");

    } else {

        let numero = 1;

    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].tripId === trajetTrouve.id && tickets[i].seatNumber === numero) {
            numero++;
            i = -1;
        }          
    }

        const ticket = {
            id: ticketId++,
            passengerName: nomDePassage,
            tripId: trajetTrouve.id,
            seatNumber: numero,
            price: trajetTrouve.price
        };

        tickets.push(ticket);

        trajetTrouve.availableSeats -= 1;

        console.log("Ticket acheté avec succès.\n");

        console.log(
            `Ticket #${ticket.id}
Passager : ${ticket.passengerName}
Trajet : ${trajetTrouve.departure} --> ${trajetTrouve.destination}
Place : ${ticket.seatNumber}
Prix : ${ticket.price} DH`
        );
    }
    
}



function Afficherlestickets () {
    if(tickets.length === 0) {
        console.log("aucun tickets enregestre.")
    } else {
        console.log("    ====== TICKETS =====")
    }

    for(let i = 0; i < tickets.length; i++) {
        let ticket = tickets[i];
        let trajet = trajets.find(function(trip) {
                return trip.id === ticket.tripId;
            });

            console.log(`Ticket #${ticket.id}`);
            console.log(`Passager : ${ticket.passengerName}`);
            console.log(`Trajet : ${trajet.departure} → ${trajet.destination}`);
            console.log(`Place : ${ticket.seatNumber}`);
            console.log(`Prix : ${ticket.price} DH`);
            console.log("");
        
    }

}


function Annulerunticket() {
    const idTicket = Number(prompt("Identifiant du ticket : "));
    let indexTicket = -1;

  
    for (let i = 0; i < tickets.length; i++) {

        if (tickets[i].id === idTicket) {
            indexTicket = i;
            break;
        }
    }

    if (indexTicket === -1) {

        console.log("Ticket introuvable.");

    } else {

        let ticket = tickets[indexTicket];

        let trajet = trajets.find(function(trip) {
            return trip.id === ticket.tripId;
        });

        tickets.splice(indexTicket, 1);

        trajet.availableSeats += 1;

        console.log("Ticket annulé avec succès.");
    }

}

function Rechercherunticket() {
    

    const nom = prompt("Nom du passager : ");

    let trouve = false;

    for (let i = 0; i < tickets.length; i++) {

        if (tickets[i].passengerName === nom) {

            trouve = true;

            let ticket = tickets[i];

            let trajet = trajets.find(function(trip) {
                return trip.id === ticket.tripId;
            });

            console.log(`Ticket #${ticket.id}`);
            console.log(`Passager : ${ticket.passengerName}`);
            console.log(`Trajet : ${trajet.departure} → ${trajet.destination}`);
            console.log(`Place : ${ticket.seatNumber}`);
            console.log(`Prix : ${ticket.price} DH`);
            console.log("");
        }
    }

    if (trouve === false) {
        console.log("Aucun ticket trouvé.");
    }
}


