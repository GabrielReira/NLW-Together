import { getCustomRepository } from 'typeorm';
import { TagsRepositories } from '../repositories/TagRepositories';

class CreateTagService {
    async execute(name: string) {
        const tagsRepositories = getCustomRepository(TagsRepositories);

        // Verificar se o nome foi preenchido
        if (!name) {
            throw new Error('Incorrect name');
        }

        // Verificar se já existe tag com nome fornecido
        const tagAlreadyExists = await tagsRepositories.findOne({
            name
        });

        if (tagAlreadyExists) {
            throw new Error('Tag already exists');
        }

        const tag = tagsRepositories.create({
            name
        });

        // Caso dê tudo certo, a tag será adicionada ao bd
        await tagsRepositories.save(tag);
        return tag;
    }
}

export { CreateTagService };