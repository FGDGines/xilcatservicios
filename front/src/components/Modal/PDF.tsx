import { useEffect, useState } from 'react'
import pdfFile from '../../../../back/public/clients/1/1708489013989-Pasapporte.pdf'
import axios from 'axios'
import { useLocation, useParams } from 'react-router-dom'
import Loader from '../Common/Loader'
const PDF = () => {
    const location = useLocation()
    const [file, setFIle] = useState<any>('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getFile = async () => {
            setIsLoading(true)
            // const path1 = location.search.replace('?path=', '')
            // const path = path1.replace('.pdf', '')
            const param = location.search.split('/');
            const filename = param.at(-1)?.replace('.pdf', '')
            const clientid = param.at(-2)
            const path = `../../../../back/public/clients/${clientid}/${filename}.pdf`

            try {
            const item = (await import(`../../../../back/public/clients/${clientid}/${filename}.pdf`))
            if (item){
                setFIle(item.default)
                setIsLoading(false)
                console.log(item)

            }
            } catch (err: any) {
                console.log('error', err)
            }
        }
        getFile()
    }, [])

    if (isLoading) return <Loader />
  return (
    <div className='absolute w-full h-full'>
        
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