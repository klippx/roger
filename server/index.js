import express from 'express';

let app = express();

app.use(express.static('public'));

import Routes from './routes';
Routes(app);

app.listen(3100, () => console.log('App running at http://localhost:3100/'));
