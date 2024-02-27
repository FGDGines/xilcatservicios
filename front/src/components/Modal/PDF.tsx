import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Loader from '../Common/Loader'
import { FaArrowLeft } from 'react-icons/fa'
const PDF = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [file, setFile] = useState<any>('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        // const getFile = async () => {
        //     setIsLoading(true)
        //     // const path1 = location.search.replace('?path=', '')
        //     // const path = path1.replace('.pdf', '')
        //     const param = location.search.split('/');
        //     const filename = param.at(-1)?.replace('.pdf', '')
        //     const clientid = param.at(-2)

        //     try {
        //     const item = (await import(`../../../../back/public/clients/${clientid}/${filename}.pdf`))
        //     if (item){
        //         setFIle(item.default)
        //         setIsLoading(false)
        //         console.log(item)

        //     }
        //     } catch (err: any) {
        //         console.log('error', err)
        //     }
        // }
        const getFile = async () => {
            try {
                setIsLoading(true)

                const response = await fetch('/api/client/pdf' + location.search); // Replace this with the appropriate URL to your Nest.js backend route
                const blob = await response.blob();
                const url = URL.createObjectURL(blob);
                setFile(url);
                setIsLoading(false)
            } catch (error) {
                console.error('Error fetching PDF:', error);
            }
        }
        getFile()
    }, [])

    if (isLoading) return <Loader />
    return (
        <div className='relative w-full h-full'>
            <button className='
                absolute w-8 h-8 bottom-8 right-8 bg-cs-blue rounded-full flex justify-center items-center
                hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-800
            '
                onClick={() => navigate(-1)}
            >
                <FaArrowLeft />
            </button>
            <object
                data={file}
                type="application/pdf"
                width="100%"
                height="100%"
            ></object>

        </div>
    )
}



export default PDF