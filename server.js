const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path'); 

const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: 'localhost',
    password: '',
    user: 'root',
    database: 'prueba'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado a la base de datos MySQL');
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.post('/login', (req, res) => {
    const { usuario, contraseña } = req.body;

    const query = `SELECT * FROM usuarios WHERE usuario = '${usuario}' AND contraseña = '${contraseña}'`;
    db.query(query,(err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            res.json({ success: true, message: 'Login exitoso' });
        } else {
            res.json({ success: false, message: 'Usuario o contraseña incorrectos' });
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
