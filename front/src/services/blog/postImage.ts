import axios from 'axios'

type TProps = {
    data: any
    id: number
}

const postImage = async ({ data, id}: TProps) => {
    try {
        const formData = new FormData()
        formData.append('File', data)
        console.log('data POSTIMAGE.ts', data)
        const response = await axios.post(import.meta.env.VITE_BACKEND_URL + '/blog/upload-image/' + id, formData)
        console.log('response', response)
        if (response.statusText !== 'OK') throw new Error("Algo paso")
        return response.data
    } catch (error: any) {
      console.log('there is an error in postImage.ts', error)
      // console.log(error)
        return error.response.data
    }
}

export default postImage