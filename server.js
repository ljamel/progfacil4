const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3
const mysql = require('mysql');

const db = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "",
    database: "progfacil"

});



// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
    console.log(req.query['mail']);
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
}); //Line 11

// read
app.get('/express_read_bdd', (req, res) => { //Line 9
    db.connect(function (err) {
        if (err) throw err;
        db.query("SELECT * FROM contact", function (err, result, fields) {
            if (err) throw err;
            res.send({ express: fields });
        });
    });
}); //Line 11

// read
app.get('/sendmessage', (req, res) => { //Line 9

    

    db.connect(function (err) {
        if (err) throw err;
        let mail = req.query['mail'];
        let content = req.query['content'];

        console.log(mail);
        var sql = "INSERT INTO `contact` (`id`, `mail`, `content`) VALUES (NULL, '"+mail+"', '"+content+"')";
        db.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    });

    res.send({ express: 'Message envoyer' }); //Line 10

}); //Line 11
