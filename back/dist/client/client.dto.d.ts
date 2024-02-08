export type PaymentStatus = 'PENDING' | 'PAID' | 'NONE';
export type TramiteType = 'TYPE1' | 'TYPE2' | 'TYPE3' | 'TYPE4';
export declare class PdfDto {
    typePdf: string;
    path: string;
}
export declare class DuesDto {
    dues: string;
}
export declare class CollaboratorsDto {
    collaborators: string;
}
