import axios from "axios"

export const get = async () => {
    try {
        const response = await axios.get(import.meta.env.VITE_BACKEND_URL + '/client')
        if (response.statusText !== 'OK') throw new Error("Algo paso")
        return response.data
    } catch (error: any) {
        return 'something wrong'
    }
    // return await axios.get('http://localhost:3000' + import.meta.env.VITE_BACKEND_URL + '/clients')
}