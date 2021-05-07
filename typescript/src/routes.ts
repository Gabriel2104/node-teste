import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response){
    const user = createUser({
        email: 'gabriel@fatec.com',
        password: '123456',
    });

    return response.json({ message: 'Hello world'});
};