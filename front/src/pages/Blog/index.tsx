import React, { useState } from 'react';
import Card from '../../components/Blog/Card';
import HeaderMenu from '../../components/HeaderMenu';
import Footer from '../../components/Footer';
import PoliticsBar from '../../components/PoliticsBar';
import useBlog from '../../hooks/useBlog';
import Logo from '../../assets/Logo_white.png'
import Loader from '../../components/Common/Loader';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

type ArticleKeys = 'id' | 'title' | 'content' | 'imagePath' | 'contact'
type ArticleRecord = Record<ArticleKeys , string | number> 
export type ArticleCategory = 'SELLING' | 'RENT' | 'COMMUNITY' | 'NEWS' | 'ALL'
type ArticleAuth = {
  auth: {
    username: string,
    created_at: string
  }
}
export type TArticle = ArticleRecord & ArticleAuth & { category: ArticleCategory, isApproved: boolean}

const BlogPage: React.FC = () => {
  const [page, setPage] = useState(1)
  const [category, setCategory] = useState<ArticleCategory>('ALL')
  const [currentCategory, setCurrentCategory] = useState<ArticleCategory>('ALL')
  const {list} = useBlog({ page, limit: 10, category, showApproved: 'true'})

  const handleCategorySelection = (categoryServer: ArticleCategory) => {
    setCurrentCategory(categoryServer)
    setCategory(category)
  }

  if (list.isLoading) return (
    <>
      <HeaderMenu />
      <div className='flex items-center justify-center h-[50vh] mt-12'>
        <Loader />
      </div>
      <Footer />
      <PoliticsBar />
    </>
  )

  if (Number(list.data?.length) <= 0 && page === 1) return (
    <>

    <HeaderMenu />
    <div className='flex items-center justify-center h-[50vh] mt-12'>
      <div className='border rounded-md shadow-lg h-full flex justify-center items-center mx-8 bg-cs-gray text-white'>
        <div className='px-8'>
          <p className='text-center font-bold text-3xl'>Ningun Blog ha sido agregado aun</p>
          <div className='relative h-40 w-40 mx-auto mt-8'>
            <img src={Logo} alt="" style={{width: '100%', height: '100%', objectFit: 'contain'}} />
          </div>
        </div>
      </div>
    </div>
    <Footer />
    <PoliticsBar />
    </>
  )

  return (
    <>
    <HeaderMenu />
    <div className="container mx-auto py-8 min-h-[50vh] px-8 md:px-12 xl:grid xl:grid-cols-2 xl:gap-10 xl:place-items-center ">
      <h1 className="
        text-4xl mb-8 col-span-2 bg-cs-purple text-white px-2 uppercase relative
        md:text-end
        lg:text-6xl
        xl:item-center xl:place-self-end  xl:self-center xl:mb-0 xl:h-full xl:w-[50%]
        ">
          Xilcat 
            <span className='text-cs-blue'>
              Blog
            </span>
      <div className='absolute text-sm top-100 right-0 h-[70%] flex wrap gap-2 items-center '>
          <button className={`${currentCategory === 'ALL' ? 'bg-cs-purple':'bg-cs-blue'} px-1 sm:px-2 md:px-4 rounded`} onClick={() => handleCategorySelection('ALL')}>Todos</button>
          <button className={`${currentCategory === 'SELLING' ? 'bg-cs-purple':'bg-cs-blue'} px-1 sm:px-2 md:px-4 rounded`} onClick={() => handleCategorySelection('SELLING')}>Venta</button>
          <button className={`${currentCategory === 'RENT' ? 'bg-cs-purple':'bg-cs-blue'} px-1 sm:px-2 md:px-4 rounded`} onClick={() => handleCategorySelection('RENT')}>Alquiler</button>
          <button className={`${currentCategory === 'COMMUNITY' ? 'bg-cs-purple':'bg-cs-blue'} px-1 sm:px-2 md:px-4 rounded`} onClick={() => handleCategorySelection('COMMUNITY')}>Comunidad</button>
          <button className={`${currentCategory === 'NEWS' ? 'bg-cs-purple':'bg-cs-blue'} px-1 sm:px-2 md:px-4 rounded`} onClick={() => handleCategorySelection('NEWS')}>Noticias</button>
      </div>
      </h1>
      {list?.data?.map((article) => (
          <Card article={article} current={currentCategory}/>
          ))}
    </div>
        <div className='flex justify-center items-center text-xl gap-2'>
          <button
            disabled={page <= 1}
            className={`${ page <= 1 && 'text-gray-300 hover:cursor-not-allowed'}`}
            onClick={() => setPage(prev => prev - 1)}
          >
            <FaArrowAltCircleLeft />
          </button>
          <div>{page}</div>
          <button
            disabled={Number(list.data?.length) <= 10}
            className={`${Number(list.data?.length) <= 10 && 'text-gray-300 hover:cursor-not-allowed'}`}
            onClick={() => setPage(prev => prev + 1)}
          >
            <FaArrowAltCircleRight />
          </button>
        </div>
    <Footer />
    <PoliticsBar />
    </>
  );
};

export default BlogPage;