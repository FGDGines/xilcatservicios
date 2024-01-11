import axios from 'axios'
import React from 'react'

const post = async (data: any) => {
    try {
        const response = await axios.post(import.meta.env.VITE_BACKEND_URL + '/client', data)
        console.log('response', response)
        if (response.statusText !== 'OK') throw new Error("Algo paso")
        return response.data
    } catch (error: any) {
        console.log(error)
        return error.response.data
    }
}

export default post