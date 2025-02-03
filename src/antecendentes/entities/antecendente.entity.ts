import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity()
  export class Antecedentes {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ type: 'varchar', length: 20 })
    NumeroDocumento: string;
  
    @Column({ type: 'varchar', length: 50 })
    Felcc: string;
  
    @Column({ type: 'varchar', length: 50 })
    Felcn: string;
  
    @Column({ type: 'varchar', length: 50 })
    Transito: string;
  }
  