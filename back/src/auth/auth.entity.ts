/* eslint-disable prettier/prettier */
import {
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ClientEntity } from 'src/client/client.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class AuthEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @IsNotEmpty({ message: 'El nombre de usuario es obligatorio' })
  @IsString({ message: 'El nombre de usuario debe ser un texto' })
  @MinLength(4, {
    message: 'El nombre de usuario debe tener al menos 4 caracteres',
  })
  @MaxLength(20, {
    message: 'El nombre de usuario no puede tener más de 20 caracteres',
  })
  username: string;

  @Column()
  @IsNotEmpty({ message: 'La contraseña es obligatoria' })
  @IsString({ message: 'La contraseña debe ser un texto' })
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  @MaxLength(30, {
    message: 'La contraseña no puede tener más de 30 caracteres',
  })
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/, {
    message:
      'La contraseña debe contener al menos una letra mayúscula, una minúscula, un número y un carácter especial',
  })
  password: string;

  // FECHA
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;

  // RELACIONES
  @OneToMany(() => ClientEntity, (client) => client.auth) // Relación uno a muchos con ClientEntity
  clients: ClientEntity[];
}
