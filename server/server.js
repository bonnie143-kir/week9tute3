// get dependencies
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http = require('http').Server(app);

// parse requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
cors = require('cors'),
    app.use(cors());

//Enable CORS for all HTTP methods
/*
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
*/

const products = require('./operations');
app.post('/productInsert', products.insert);
app.get('/productFind', products.find);
app.put('/productUpdate', products.update);
app.post('/productDelete', products.delete);

// const https = require('https'),
//     fs = require('fs'),
//     options = {

//         //generate a SSL certificate in the elf terminal.
//         //openssl genrsa -out key.pem
//         //openssl req -new -key key.pem -out csr.pem
//         //openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
//         //rm csr.pem
//         key: fs.readFileSync('key.pem'),
//         cert: fs.readFileSync('cert.pem')

//     },
//     httpsServer = https.createServer(options, app);
const PORT = 3000;
// httpsServer.listen(PORT, () => {
//     console.log(`Starting https server at: ${PORT}`);
// });

http.listen(PORT, () => {
    console.log(`Starting https server at: ${PORT}`);
});


// listen on ssl port 3000