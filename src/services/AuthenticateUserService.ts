import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UserRepositories';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface AuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({ email, password } : AuthenticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);

        // Verificar se existe usuário com email fornecido
        const user = await usersRepositories.findOne({
            email
        });

        if (!user) {
            throw new Error('Email/Password incorrect');
        }

        // Verificar se a senha está correta
        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error('Email/Password incorrect');
        }

        // Caso tudo esteja correto, gerar token
        const token = sign(
            {
                email: user.email
            },
            'chaveSecretaShhhh',
            {
                subject: user.id,
                expiresIn: '1d'
            }
        );

        return token;
    }
}

export { AuthenticateUserService };
