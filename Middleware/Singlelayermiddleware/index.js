const express = require('express');
const app = express();
const reqFilter = require('./middlewareFunction');
const route = express.Router();

// app.use(reqFilter);

route.use(reqFilter);

app.get('/', (req, resp) => {
    resp.send('Welcome to Home page')
});

app.get('/users',reqFilter, (req, resp) => {
    resp.send('Welcome to Users page')
});
app.get('/about', (req, resp) => {
    resp.send('Welcome to About page')
});
route.get('/contact', (req, resp) => {
    resp.send('Welcome to Contact page')
});
route.get('/about', (req, resp) => {
    resp.send('Welcome to Help page')
});
app.use('/',route)

app.listen(5000);