import axios from 'axios'

const post = async (data: any) => {
    try {
        const response = await axios.post(import.meta.env.VITE_BACKEND_URL + '/blog', data)
        console.log('response', response)
        if (response.statusText !== 'OK') throw new Error("Algo paso")
        return response.data
    } catch (error: any) {
        console.log(error)
        return error.response.data
    }
}

export default post