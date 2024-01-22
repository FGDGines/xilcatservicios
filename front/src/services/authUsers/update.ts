import axios from 'axios'

type TProps = {
    data: any
    id: number
}

const update = async ({ data, id }: TProps) => {
    try {
        const response = await axios.put(import.meta.env.VITE_BACKEND_URL + '/auth/' + id, data)
        if (response.statusText !== 'OK') throw new Error("Algo paso")
        return response.data
    } catch (error: any) {
        return 'something wrong'
    }
}

export default update