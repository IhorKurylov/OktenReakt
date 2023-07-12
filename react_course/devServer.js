const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
var cors = require('cors')

const port = 8000;

app.use(cors());
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


app.post('/api/login', (request, response) => {
    console.log(request);

    response.json(request.body);
});



const server = app.listen(port, () => {
    console.log('dev server is up and running on port ' + port);
});


