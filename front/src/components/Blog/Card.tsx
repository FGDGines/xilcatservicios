import React from 'react'
import { TArticle } from '../../pages/Blog'

const Card = ({ article }: { article: TArticle}) => {
  return (
    <div className='grid grid-cols-2 border h-40'>
        <div className='bg-black text-white border border-red-500'> aqui va una imagen</div>
        <div className='flex flex-col'>
            <div></div>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
        </div>
    </div>
  )
}

export default Card