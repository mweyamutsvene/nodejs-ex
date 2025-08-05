const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// views is directory for all template files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
  response.render('pages/index');
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Node app is running on port ${PORT}`);
});
