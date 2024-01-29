import axios from 'axios'

type TParams = {
    clientId: number,
    pdfType: string,
    pdf: any
}

const post = async ({clientId, pdf, pdfType }: TParams) => {
    try {
        const formData = new FormData()

        formData.append('pdf', pdf)
        const response = await axios.post(import.meta.env.VITE_BACKEND_URL + `/client/upload-pdf/${clientId}/${pdfType}`, formData)
        if (response.statusText !== 'OK') throw new Error("Algo paso")
        return response.data
    } catch (error: any) {
        return 'something wrong'
    }
}

export default post