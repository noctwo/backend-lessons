import express from "express";
import ICharacter from "../../models/ICharacter";
import ILocations from "../../models/ILocations";

//? Express App anlegen
//? Variable wird mesitens app genannt
//! an import denken

const app = express();

//? manuel wird oft noch ein Port definiert

const port = 3000;

//* Daten für Response anlegen nachdem zuvor Interface angelegt wurde

const characters: ICharacter[] = [
    {id:1, name:"Frodo Beutlin", race: "Hobbit", role: "Ringträger"},
    {id:2, name:"Gandalf der Graue", race: "Maia", role: "Zauberer"},
    {id:3, name:"Aragorn", race: "Mensch", role: "Waldläufer"},{id:4, name:"Legolas", race: "Elf", role: "Jäger"}
]

const locations:ILocations[] = [
    {id:1, name:"The Shire", region:"Eriador", population: "low"},
    {id:2, name:"Rivendell", region:"Eriador", population: "medium"},
    {id:3, name:"Mordor", region:"Baleriand", population: "High"}
]

//? Endpoint oder Route definieren f. Characters
//? app.get definieren für GET /characters
//? 1. Parameter sit der Name des Endpoints
//? 2. Parameter ist => Function mit req (reqest) & res (response)

app.get("/characters", (req, res) => {
    //? Logik für Characktere hier
    //? characters als antwort zurückschicken
    res.json(characters);
    //? kann man z.B. im Postman oder Browser mit localhost:port/characters aufrufen
})

//? wenn in der URL Anfrage eine id mitkommt, gibt nur diese zurück (if logik) number - string umwandlung - find - if
//! abfrage mit localhost:3000/locations/?id=1
//* ?id=1 ist standard abfrage syntax - im zweifel die nutzen
//* ?[whatever Parameter] = [Wert]

app.get("/locations", (req, res) => {
    console.log(req.query)
    if(req.query.id){
        const id = Number(req.query.id);
        if(id){
        res.json(locations.find((locations) => locations.id === id));
    }
    }
    res.json(locations);
})

//? epxress starten mit app.listen
//? hier wird auf alle anfragen auf den Port gehört

app.listen(port, () => {
    //? man loggt hier einmal damit man sieht, dass der Server läuft
    console.log(`Server running at Port: ${port}`);
});

//! server starten mit npm run start

//! models ordner am besten immer komplett übergeordnet wenn backend und frontend drauf zugreifen sollen. sonst gibts unschöne, lange Pfade