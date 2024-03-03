// export type TramiteType = 'TYPE1' | 'TYPE2' | 'TYPE3' | 'TYPE4';
export type PaymentStatus = 'PENDING' | 'PAID' | 'NONE';

type TPdf = {
    path: string
    typePdf: string
}


export type TClient = {
    name: string
    email: string
    address: string
    mainPhone: string
    secondaryPhone: string
    priceQuote: number
    price: number
    pdf: string | TPdf[]
    tramiteType: string
    // tramiteType: TramiteType
    paymentStatus: PaymentStatus
    auth: any
    id?: number
    dues: string
    collaborators: string
    category: string
}