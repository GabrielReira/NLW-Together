import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UserRepositories';
import { hash } from 'bcryptjs';

interface UserRequest {
    name: string;
    email: string;
    password: string;
    admin?: boolean
}

class CreateUserService {
    async execute({ name, email, password, admin = false } : UserRequest) {
        const usersRepository = getCustomRepository(UsersRepositories);

        // Verificar se o email foi preenchido
        if (!email) {
            throw new Error('Incorrect email');
        }

        // Verificar se já existe usuário com email fornecido
        const userAlreadyExists = await usersRepository.findOne({
            email
        });
        
        if (userAlreadyExists) {
            throw new Error('User already exists');
        }

        // Criar criptografia para armazenar senha no bd
        const passwordHash = await hash(password, 8);

        const user = usersRepository.create({
            name,
            email,
            password: passwordHash,
            admin
        });

        // Caso dê tudo certo, usuário será adicionado ao bd
        await usersRepository.save(user);
        return user;
    }
}

export { CreateUserService };
