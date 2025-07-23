// index.js
import express from "express";
import mysql from "mysql";
import cors from "cors";
import bodyParser from "body-parser";


const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mini_budget",
});

// Connexion à la base
db.connect((err) => {
  if (err) {
    console.error("Erreur de connexion à MySQL :", err);
  } else {
    console.log("Connecté à la base MySQL !");
  }
});

// Endpoint : inscription
app.post("/register", (req, res) => {
  const { email, password } = req.body;
  const sql = "INSERT INTO users (email, password) VALUES (?, ?)";
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      res.status(500).send("Erreur lors de l'inscription.");
    } else {
      res.send("Inscription réussie !");
    }
  });
});

// Endpoint : connexion
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      res.status(500).send("Erreur serveur");
    } else if (result.length > 0) {
      res.send("Connexion réussie !");
    } else {
      res.status(401).send("Email ou mot de passe incorrect");
    }
  });
});

// Démarrer le serveur
app.listen(3001, () => {
  console.log("Serveur Node.js lancé sur http://localhost:3001");
});
