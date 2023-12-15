import { Injectable } from '@nestjs/common';
// import * as Imap from 'node-imap';

@Injectable()
export class EmailService {
  // private readonly imap: Imap;
  // constructor() {
  //   this.imap = new Imap({
  //     user: 'tu_email@example.com',
  //     password: 'tu_contraseña',
  //     host: 'imap.example.com',
  //     port: 993, // Puerto IMAP con SSL
  //     tls: true, // Habilita TLS/SSL
  //     tlsOptions: { rejectUnauthorized: false }, // Opciones TLS específicas (en este ejemplo, permitiendo certificados no autorizados)
  //   });
  //   this.imap.once('ready', () => {
  //     console.log('Conexión IMAP lista');
  //   });
  //   this.imap.once('error', (error) => {
  //     console.error('Error en la conexión IMAP:', error);
  //   });
  //   this.imap.connect();
  // }
  // // Método para obtener buzones disponibles
  // async getMailboxes(): Promise<string[]> {
  //   return new Promise<string[]>((resolve, reject) => {
  //     this.imap.getBoxes((error, mailboxes) => {
  //       if (error) {
  //         reject(error);
  //       } else {
  //         const mailboxNames = Object.keys(mailboxes);
  //         resolve(mailboxNames);
  //       }
  //     });
  //   });
  // }
}
