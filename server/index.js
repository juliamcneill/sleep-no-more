// TESTING
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 3100;

app.set('port', port);

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

if (!module.parent) {
    app.listen(app.get('port'));
    console.log('Listening on', app.get('port'));
}
