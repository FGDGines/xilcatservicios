import { TArticle } from '../../pages/Blog'
import { FaWhatsapp } from "react-icons/fa";
import  Logo from '../../assets/Logo_white.png'
import  profile from '../../assets/imgs/carrusel-img-1.jpeg'
import moment from 'moment';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Card = ({ article }: { article: TArticle}) => {
    const [image, setImage] = useState('')
    
    useEffect(() => {
        const hasImage = article.imagePath !== null
        const handleGetImage = async (idFile: number, idName:string) => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/blog/picture/${idFile}/${idName}`, {
                    responseType: 'blob'
                })

                setImage(URL.createObjectURL(res.data))
            } catch(error: any) {
                console.log('error', error)
            }
    
        }
    
         if (hasImage) {
            const imagePaths = String(article.imagePath).split('/')
            const idFile = imagePaths.at(-2)
            const idName = imagePaths.at(-1)
            handleGetImage(Number(idFile), String(idName))
            } else {
            setImage(Logo)
            }
    }, [])

  return (
    <div className='flex flex-col md:grid md:grid-cols-2 h-[400px] mb-4 md:h-60 xl:h-80 rounded'>
        <div className='bg-cs-gray relative text-white rounded h-[50%] md:h-60 xl:h-full'>
            {/* <img src={Logo} alt="" /> */}
            <img src={image} style={{ width: '100%', height: '100%'}} alt="" />
        </div>
        <div className='flex flex-col p-2 h-[50%] md:h-full border'>
            <div className='flex h-[20%] gap-2 mb-4'>
                <div className='basis-1/4 relative rounded-full overflow-hidden flex justify-center items-center'>
                    <div className='bg-red-500 h-8 w-8 md:h-10 md:w-10 lg:h-14 lg:w-14 rounded-full'>
                        <img src={profile} alt="" className='rounded-full' style={{ width: '100%', height: '100%'}}/>
                    </div>
                </div>
                <div className='basis-2/4 flex- flex-col'>
                    <div>{article.auth.username}</div>
                    <div>{moment(article.auth.created_at).format('DD/MM/YYYY')}</div>
                </div>
                <div className='basis-1/4'></div>
            </div>
            <h2 className='text-xl mb-2'>{article.title}</h2>
            <p className='flex-1 text-sm overflow-hidden'>{article.content}</p>
            <div className='flex gap-2 self-end items-center text-sm'>
                <div>
                    <FaWhatsapp />
                </div>
                <div>Contactanos</div>
            </div>
        </div>
    </div>
  )
}

export default Card