import axios from 'axios'
import React from 'react'

const post = async (data: any) => {
    try {
        const response = await axios.post(import.meta.env.VITE_BACKEND_URL + '/client', data)
        if (response.statusText !== 'OK') throw new Error("Algo paso")
        return response.data
    } catch (error: any) {
        return 'something wrong'
    }
}

export default post