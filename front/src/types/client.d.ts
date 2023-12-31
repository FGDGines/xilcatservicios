export type TramiteType = 'TYPE1' | 'TYPE2' | 'TYPE3' | 'TYPE4';
export type PaymentStatus = 'PENDING' | 'PAID' | 'NONE';


export type TClient = {
    name: string
    email: string
    address: string
    mainPhone: string
    secondaryPhone: string
    priceQuote: number
    price: number
    pdf: string
    tramiteType: TramiteType
    paymentStatus: PaymentStatus
    auth: any
    id?: number
    dues: string
}