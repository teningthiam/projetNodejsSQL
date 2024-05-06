const express = require('express');
const app = express();

const PORT = 3000;
const copyright ="Tening 2024";

//dire a express de considerer le dossier public comme un dossier contenant des fichiers accessible par les clients
app.use('/public', express.static('public'));



//pour dire que les vues seront dans le dossier ./views
app.set('views', './views');

// Importer la logique de la base de données
//const { con } = require('./database');


const con = express();
app.get('/', (req, res)=>{
    const title = 'Isep TV show';
    
    const films = [
        {
            id:1,
            title: 'la force du coeur',
            year:'2012',
            author: 'NOVELASTV',
        },
        {
            id:2,
            title: 'terre de passion',
            year:'2012',
            author: 'NOVELASTV',
        },
    ];
    const data = {
        title: title,
        nom: 'Tening',
        films: films,
        copyright: copyright
    }
    res.render('accueil.ejs', data);
});
 app.post("/insererFilm",(req, res)=> {
   const film = req.body
   //Film.push(film)
});

app.listen(PORT, ()=>{
    console.log("server listening on port: " + PORT);
});
//app.post("/insererFilm",(req, res))