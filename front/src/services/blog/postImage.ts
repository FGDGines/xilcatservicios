import axios from 'axios'

type TProps = {
    data: any
    id: number
}

const postImage = async ({ data, id}: TProps) => {
    try {
        const response = await axios.post(import.meta.env.VITE_BACKEND_URL + '/blog/upload-image/' + id, data)
        console.log('response', response)
        if (response.statusText !== 'OK') throw new Error("Algo paso")
        return response.data
    } catch (error: any) {
        console.log(error)
        return error.response.data
    }
}

export default postImage