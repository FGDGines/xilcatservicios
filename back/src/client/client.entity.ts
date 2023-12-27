import { Controller } from '@nestjs/common';

@Controller('client')
export class ClientController {}
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  // OneToMany,
} from 'typeorm';
import {
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Matches,
  Min,
  MinLength,
} from 'class-validator';
import { AuthEntity } from 'src/auth/auth.entity';
// import { PDFEntity } from 'src/pdf/pdf.entity';

type PaymentStatus = 'PENDING' | 'PAID' | 'NONE';
type TramiteType = 'TYPE1' | 'TYPE2' | 'TYPE3' | 'TYPE4';

@Entity()
export class ClientEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @IsString({ message: 'El nombre debe ser un texto' })
  name: string;

  @Column()
  @IsEmail({}, { message: 'El formato del correo electrónico es inválido' })
  email: string;

  @Column()
  @IsNotEmpty({ message: 'La dirección es obligatoria' })
  @MinLength(5, { message: 'La dirección debe tener al menos 5 caracteres' })
  address: string;

  @Column()
  @IsNotEmpty({ message: 'El teléfono principal es obligatorio' })
  @Matches(/^(\+(34)\s?)?\d{9}$|^(\+(1)\s?)?\d{10}$/, {
    message:
      'Por favor, introduce un número de teléfono válido de España (+34XXXXXXXXX) o Estados Unidos (+1XXXXXXXXXX)',
    context: '',
  })
  mainPhone: string;

  @Column({ nullable: true })
  @IsOptional()
  @Matches(/^(\+(34)\s?)?\d{9}$|^(\+(1)\s?)?\d{10}$/, {
    message:
      'Por favor, introduce un número de teléfono válido de España (+34XXXXXXXXX) o Estados Unidos (+1XXXXXXXXXX)',
  })
  secondaryPhone: string;

  @Column({ nullable: true })
  @IsNumber()
  // @IsPositive({ message: 'El precio cotizado debe ser un número positivo' })
  // @Min(100, { message: 'El precio cotizado debe ser mayor que 100' })
  priceQuote: number;

  @Column({ nullable: true })
  @IsNumber()
  // @IsPositive({ message: 'El precio debe ser un número positivo' })
  // @Min(100, { message: 'El precio debe ser mayor que 100' })
  price: number;

  @Column({ type: 'simple-array', nullable: true })
  pdf: string[];

  @Column({ default: 'TYPE1' })
  @IsIn(['TYPE1', 'TYPE2', 'TYPE3', 'TYPE4'] as TramiteType[], {
    message: `El tipo de trámite es inválido - 'TYPE1', 'TYPE2', 'TYPE3', 'TYPE4'`,
  })
  tramiteType: TramiteType;

  @Column({ default: 'PENDING' })
  @IsIn(['PENDING', 'PAID', 'NONE'] as PaymentStatus[], {
    message: 'El estado de pago es inválido - PENDING, PAID, NONE',
  })
  paymentStatus: PaymentStatus;

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
  @ManyToOne(() => AuthEntity, (auth) => auth.clients)
  @JoinColumn()
  @IsNumber({}, { message: 'El ID de AuthEntity debe ser un número' })
  @IsPositive({ message: 'El ID de AuthEntity debe ser un número positivo' })
  @IsNotEmpty({ message: 'El ID de AuthEntity es requerido' })
  auth: AuthEntity;

  // Relación uno a muchos con los PDF
  // @OneToMany(() => PDFEntity, (pdf) => pdf.client)
  // pdfs: PDFEntity[];
}
