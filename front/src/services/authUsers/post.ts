import axios from 'axios'
import { TRegisterUser } from '../../hooks/useAuthUsers'

type TProps = {
    data: TRegisterUser
}

const post = async ({ data }: TProps) => {
    try {
        const response = await axios.post(import.meta.env.VITE_BACKEND_URL + '/auth/register', data)
        if (response.statusText !== 'OK') return new Error("Algo paso")
        return response.data
    } catch (error: any) {
        const messages = error.response.data.message
        throw new Error(messages.join('$'))
    }
}

export default post