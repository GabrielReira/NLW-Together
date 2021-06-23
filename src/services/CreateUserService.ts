import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UserRepositories';

interface UserRequest {
    name: string;
    email: string;
    admin?: boolean
}

class CreateUserService {
    async execute({ name, email, admin } : UserRequest) {
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

        const user = usersRepository.create({
            name,
            email,
            admin
        });

        // Caso dê tudo certo, usuário será adicionado ao bd
        await usersRepository.save(user);
        return user;
    }
}

export { CreateUserService };