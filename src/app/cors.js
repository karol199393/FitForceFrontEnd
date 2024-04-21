const express = require('express');
const cors = require('cors');

const app = express();

// Używanie modułu cors
app.use(cors());

// Dodatkowe konfiguracje
// Możesz także określić konkretny origin, metody, nagłówki itp.
// np. app.use(cors({ origin: 'http://example.com' }));

// Dodatkowe ścieżki i konfiguracje aplikacji
app.get('/', (req, res) => {
  res.send('Witaj, świecie!');
});

// Uruchomienie serwera na określonym porcie
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});
