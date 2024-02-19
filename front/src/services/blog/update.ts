import axios from 'axios'

const update = async ({data, id} : { data: any, id: number }) => {
    try {
        const response = await axios.put(import.meta.env.VITE_BACKEND_URL + '/blog/' + id, data)
        if (response.statusText !== 'OK') throw new Error("Algo paso")
        return response.data
    } catch (error: any) {
        throw error.response.data
    }
}

export default update