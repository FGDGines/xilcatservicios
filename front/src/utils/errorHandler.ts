import { toast } from "react-toastify"

const errorHandler = (error: any) => {
    const messages = error?.response?.data?.message || error.message

    if (Array.isArray(messages)) {
      messages.forEach((item: any) => {
          toast.error(item)
        })
    } else if (typeof messages === 'string') toast.error(messages)
}

export default errorHandler