import BullBoard from 'bull-board';
import express, { json } from 'express';
import * as UserController from './app/controllers/UserController';
import { queues } from './app/lib/Queue';

const app = express();
BullBoard.setQueues(queues.map((queue) => queue.bull));

app.use(json());

app.post('/users', UserController.store);

app.use('/admin/queues', BullBoard.UI);

app.listen(3000, () => {
    console.log(`Server is running on port 3000!`);
});
