import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class EmailDto {
  @IsNotEmpty()
  @IsString()
  body: string;

  @IsNotEmpty({ message: 'El correo no puede estar vacío' })
  @IsEmail({}, { message: 'El formato del correo electrónico es inválido' })
  reciver: string;

  @IsNotEmpty()
  @IsString()
  topic: string;
}
