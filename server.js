const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

// Configurer la racine du projet comme point de stockage des fichiers statiques
app.use(express.static(path.join(__dirname, '')));

// Créer une route pour servir l'index.html
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// Créer une route pour servir travel_recommendation.html
app.get('/travel_recommendation.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'travel_recommendation.html'));
});

app.get('/travel_recommendation.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'travel_recommendation.json'));
});
// app.get('/travel_recommendation.html', (req, res) => {
//   res.sendFile(__dirname + '/travel_recommendation.html');
// });

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});