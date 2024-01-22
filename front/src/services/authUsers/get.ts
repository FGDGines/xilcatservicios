import axios from "axios"

const get = async () => {
    try {
        const response = await axios.get(import.meta.env.VITE_BACKEND_URL + '/auth')
        if (response.statusText !== 'OK') throw new Error("Algo paso")
        return response.data
    } catch (error: any) {
        return 'something wrong'
    }
}

export default get;