/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class NewsletterEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty({ message: 'El título no puede estar vacío' })
  @Column()
  title: string;

  @IsNotEmpty({ message: 'El contenido no puede estar vacío' })
  @Column()
  content: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }) 
  created_at: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  }) 
  updated_at: Date;
}
