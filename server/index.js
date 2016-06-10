import express from 'express';

let app = express();

app.use(express.static('public'));

import Routes from './routes';
Routes(app);

app.listen(3000, () => console.log('Listening on port 3000'));
