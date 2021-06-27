import { EntityRepository, Repository } from 'typeorm';
import { Compliment } from '../models/Compliment';

@EntityRepository(Compliment)
class ComplimentRepositories extends Repository<Compliment> {}

export { ComplimentRepositories };
