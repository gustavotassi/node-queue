import { Request, Response } from 'express';
import { add } from '../lib/Queue';

export async function store(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const user = {
        name,
        email,
        password,
    };

    await add('RegistrationMail', { user });

    return res.json(user);
}
