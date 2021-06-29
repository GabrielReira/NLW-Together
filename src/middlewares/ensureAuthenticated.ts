// Verificar se o usuário é autenticado a partir do token
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    // Receber o token
    const authToken = request.headers.authorization;

    // Verificar se token está preenchido
    if (!authToken) {
        return response.status(401).end();
    }

    // Verificar se o token é válido
    const [, token] = authToken.split(' ');
    try {
        const { sub } = verify(token, 'chaveSecretaShhhh');
        
        request.user_id = sub;  // Repassar id do usuário
        return next();
    } catch(error) {
        return response.status(401).end();
    }
}
