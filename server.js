const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors')
var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(bodyParser.json());

var builds = [];

app.listen(8000, () => {
    console.log('Server started!');
});

app.route('/').get((req, res) => {
    res.send({
        result: 'success'
    });
});

app.route('/api/builds').get((req, res) => {
    res.send({
        builds: builds
    });
});

app.route('/api/builds').get((req, res) => {
    res.send({
        builds: builds
    });
});

app.route('/api/builds/:id').get((req, res) => {
    const requestedId = req.params['id'];
    var build = null;
    for (var i = 0; i < builds.length; i ++) {
        if (builds[i].id == requestedId) {
            build = builds[i];
            break;
        }
    }
    res.send({ build: build });
});

app.route('/api/builds').post((req, res) => {
    builds.push(req.body);
    var jsonString = JSON.stringify(builds);
    res.status(201).send(jsonString);
});
