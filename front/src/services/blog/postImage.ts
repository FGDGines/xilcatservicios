import axios from 'axios'

type TProps = {
    data: any
    id: number
}

const postImage = async ({ data, id}: TProps) => {
    try {
        const formData = new FormData()
        formData.append('file', data)
        const response = await axios.post(import.meta.env.VITE_BACKEND_URL + '/blog/upload-image/' + id, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        if (response.statusText !== 'Created') throw new Error("Algo paso")
        return response.data
    } catch (error: any) {
        throw error.response.data
    }
}

export default postImage