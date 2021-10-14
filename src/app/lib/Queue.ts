import Queue from 'bull';
import redis from '../../config/redis';
import * as jobs from '../jobs';

const queues = Object.values(jobs).map((job) => ({
    bull: new Queue(job.key, {
        host: redis.host,
        port: redis.port,
    } as Queue.QueueOptions),
    name: job.key,
    handle: job.handle,
}));

function add(name: string, data: any) {
    const selectedQueue = queues.find((q) => q.name === name);

    if (selectedQueue) {
        return selectedQueue!.bull.add(data);
    } else {
        throw new Error(`Job '${name}' could not be found :()`);
    }
}

function process() {
    return queues.forEach((q) => {
        q.bull.process(q.handle);

        q.bull.on('failed', (job) => {
            console.log('Job failed!', q.name, job.data);
        });
    });
}

export { queues, add, process };
