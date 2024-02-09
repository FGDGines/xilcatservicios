export declare class ClientController {
}
import { AuthEntity } from 'src/auth/auth.entity';
import { PaymentStatus, PdfDto, TramiteType } from './client.dto';
export declare class ClientEntity {
    id: number;
    name: string;
    email: string;
    address: string;
    mainPhone: string;
    secondaryPhone: string;
    priceQuote: number;
    price: number;
    pdf: PdfDto[];
    dues: string;
    collaborators: string;
    tramiteType: TramiteType;
    paymentStatus: PaymentStatus;
    created_at: Date;
    updated_at: Date;
    auth: AuthEntity;
}
