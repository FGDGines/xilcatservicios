import { IsIn, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';
import { AuthEntity } from 'src/auth/auth.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { TCategory } from './blog.dto';

@Entity()
export class BlogEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty({ message: 'El título no puede estar vacío' })
  @Column()
  title: string;

  @IsNotEmpty({ message: 'La categoria no puede estar vacío' })
  @Column()
  @IsIn(['SELLING', 'RENT', 'NEWS', 'COMMUNITY'] as TCategory[], {
    message: 'La categoria es invalida - VENTA - RENTA | NOTICIAS | COMUNIDAD',
  })
  category: TCategory;

  @IsNotEmpty({ message: 'El contenido no puede estar vacío' })
  @Column()
  content: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  imagePath: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  contact: string;

  @Column({ default: false })
  isApproved: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;

  // RELACIONES
  @ManyToOne(() => AuthEntity, (auth) => auth.newsletters)
  @JoinColumn()
  @IsNumber({}, { message: 'El ID de AuthEntity debe ser un número' })
  @IsPositive({ message: 'El ID de AuthEntity debe ser un número positivo' })
  @IsNotEmpty({ message: 'El ID de AuthEntity es requerido' })
  auth: AuthEntity;
}
