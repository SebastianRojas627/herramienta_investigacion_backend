import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Log {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    //@ManyToOne(() => User, (user) => user.logs, { onDelete: 'CASCADE' })
    //user: User;

    @Column('uuid')
    user_id: string;

    @Column({type: 'varchar', length: 15, nullable: false})
    tipo: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    busqueda: string;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
}
