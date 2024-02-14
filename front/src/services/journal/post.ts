import axios from 'axios'
import { TJournal } from '../../types/journal'

const post = async (data: { data: TJournal}) => {
    try {
        const response = await axios.post(import.meta.env.VITE_BACKEND_URL + '/journal', data.data)
        if (response.statusText !== 'Created') throw new Error("Algo paso")
        return response.data
    } catch (error: any) {
        let errToReturn;
        if (error.response.data.message) errToReturn = error.response.data.message
        else error.message
        throw errToReturn
    }
}

export default post