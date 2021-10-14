import { Request, Response } from 'express';

export async function store(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const user = {
        name,
        email,
        password,
    };

    return res.json(user);
}
