import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Tag } from './Tag';
import { User } from './User';

@Entity('compliments')
class Compliment {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    user_sender: string;
    // Referenciar foreign key a sua respectiva tabela
    @JoinColumn({ name: 'user_sender' })
    @ManyToOne(() => User)
    userSender: User;

    @Column()
    user_receiver: string;
    // Referenciar foreign key a sua respectiva tabela
    @JoinColumn({ name: 'user_receiver' })
    @ManyToOne(() => User)
    userReceiver: User;

    @Column()
    tag_id: string;

    // Referenciar foreign key a sua respectiva tabela
    @JoinColumn({ name: 'tag_id' })
    @ManyToOne(() => Tag)
    tag: Tag;

    @Column()
    message: string;

    @CreateDateColumn()
    created_at: Date;

    // Sempre que adicionar um compliment: criar seu id
    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

}

export { Compliment };
