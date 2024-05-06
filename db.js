const mysql = require('mysql');
//connection a la base de donnee
const con = mysql.createConnecton({
    host: "localhost",
    user: "root",
    password: "teningThiam2002!",
    database: "ISEP_TV_Show_DB"
});


//verification de la connection
con.connect((error)=>{
    if(error){
        console.erreur("erreur de connection " + error.stack);
        return ;
    }
    console.log("connection reussi")
});

// Méthode pour insérer un nouveau film dans la table
function insererFilm(nouveauFilm) {
    con.query("INSERT INTO films SET ?", [nouveauFilm], (error, result) => {
        if (error) {
            console.error("Erreur lors de l'insertion du film : " + error.message);
            return;
        }
        console.log("Nouveau film inséré avec succès");
    });
}

module.exports = {
    con: con,
    insererFilm: insererFilm
};


//selectionner un film
con.query("select * from films ", (error, rows, fields)=>{
    if(error) throw error;
        console.log("les donnees sont ", rows);
    
});

module.exports = { con };
export default router