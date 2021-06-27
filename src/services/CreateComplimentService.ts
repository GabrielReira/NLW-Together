import { getCustomRepository } from 'typeorm';
import { ComplimentRepositories } from '../repositories/ComplimentRepositories';
import { UsersRepositories } from '../repositories/UserRepositories';

interface ComplimentRequest {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

class CreateComplimentService {
    async execute({ tag_id, user_sender, user_receiver, message } : ComplimentRequest) {
        const complimentsRepositories = getCustomRepository(ComplimentRepositories);
        const usersRepositories = getCustomRepository(UsersRepositories);

        // Verificar se usuário que está recebendo compliment é válido
        const userReceiverExists = await usersRepositories.findOne(user_receiver);

        if (!userReceiverExists) {
            throw new Error('User Receiver does not exists');
        }

        // Verificar se o usuário está cadastrando compliment para si
        if (user_sender === user_receiver) {
            throw new Error('You can not post a compliment to yourself');
        }

        const compliment = complimentsRepositories.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        })

        // Caso tudo esteja correto, será cadastrado o compliment
        await complimentsRepositories.save(compliment);
        return compliment;
    }
}

export { CreateComplimentService };