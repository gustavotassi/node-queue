import express, { json } from 'express';
import * as UserController from './app/controllers/UserController';

const app = express();

app.use(json());

app.post('/users', UserController.store);

app.listen(3000, () => {
    console.log(`Server is running on port 3000!`);
});
