import {
  BadRequestException,
  Injectable,
  ValidationError,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientEntity } from './client.entity';
import { Repository } from 'typeorm';
import { validate } from 'class-validator';
// import * as fs from 'fs';
// import * as path from 'path';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(ClientEntity)
    private readonly clientRepository: Repository<ClientEntity>,
  ) {}

  async findAll(page: number, limit: number): Promise<ClientEntity[]> {
    try {
      const clients = await this.clientRepository
        .createQueryBuilder('client')
        .leftJoin('client.auth', 'auth')
        .select([
          'client.id',
          'client.name',
          'client.email',
          'client.address',
          'client.mainPhone',
          'client.secondaryPhone',
          'client.priceQuote',
          'client.price',
          'client.pdf',
          'client.tramiteType',
          'client.paymentStatus',
          'client.created_at',
          'client.updated_at',
          // Seleccionando todos los campos de 'auth' excepto 'password'
          'auth.id',
          'auth.username',
          'auth.created_at',
          'auth.updated_at',
        ])
        .take(limit)
        .skip((page - 1) * limit)
        .getMany();

      return clients;
    } catch (error) {
      throw error;
    }
  }

  async findById(id: number): Promise<ClientEntity> {
    try {
      const client = await this.clientRepository
        .createQueryBuilder('client')
        .leftJoin('client.auth', 'auth')
        .select([
          'client.id',
          'client.name',
          'client.email',
          'client.address',
          'client.mainPhone',
          'client.secondaryPhone',
          'client.priceQuote',
          'client.price',
          'client.pdf',
          'client.tramiteType',
          'client.paymentStatus',
          'client.created_at',
          'client.updated_at',
          'auth.id', // Seleccionando solo el campo 'id' de 'auth'
          'auth.username',
          'auth.created_at',
          'auth.updated_at',
        ])
        .where('client.id = :id', { id })
        .getOne();

      if (!client) {
        throw new Error(`No se encontró ningún cliente con el ID: ${id}`);
      }

      return client;
    } catch (error) {
      throw new Error(`Error al buscar el cliente: ${error.message}`);
    }
  }

  async create(
    clientData: ClientEntity,
  ): Promise<ClientEntity | ValidationError[]> {
    try {
      const newClient = this.clientRepository.create(clientData);

      const errors = await validate(newClient);

      if (errors.length > 0) {
        return errors;
      }
      return await this.clientRepository.save(newClient);
    } catch (error) {
      return error;
    }
  }

  async update(
    id: number, // o string, dependiendo del tipo de tu ID
    clientData: Partial<ClientEntity>,
  ): Promise<ClientEntity | undefined> {
    try {
      await this.clientRepository.update(id, clientData);
      return await this.clientRepository.findOne({ where: { id } });
    } catch (error) {
      return error;
    }
  }

  async delete(id: number): Promise<ClientEntity> {
    try {
      const clientToRemove = await this.clientRepository.findOne({
        where: { id: id },
      });

      return await this.clientRepository.remove(clientToRemove);
    } catch (error) {
      throw new BadRequestException(
        'El ID de ClientEntity proporcionado no existe',
      );
    }
  }

  // async uploadPDF(files: Array<Express.Multer.File>, clientId: number) {
  //   const clientFolder = `public/${clientId}`;
  //   if (!fs.existsSync(clientFolder)) {
  //     fs.mkdirSync(clientFolder);
  //   }

  //   const pdfPaths = [];
  //   for (const file of files) {
  //     const filePath = path.join(clientFolder, file.originalname);
  //     fs.writeFileSync(filePath, file.buffer);
  //     pdfPaths.push(filePath);
  //   }

  //   // Guarda las rutas de los archivos PDF en la base de datos para el cliente específico
  //   // Puedes hacer uso de TypeORM aquí para actualizar la entidad ClientEntity con las nuevas rutas de PDF

  //   return { message: 'Archivos subidos correctamente' };
  // }
}
