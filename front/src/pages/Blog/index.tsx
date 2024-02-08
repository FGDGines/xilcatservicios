import React from 'react';
import Card from '../../components/Blog/Card';
import HeaderMenu from '../../components/HeaderMenu';
import Footer from '../../components/Footer';
import PoliticsBar from '../../components/PoliticsBar';
import useBlog from '../../hooks/useBlog';
import Logo from '../../assets/Logo_white.png'

type ArticleKeys = 'id' | 'title' | 'content' | 'imagePath'
type ArticleRecord = Record<ArticleKeys , string | number> 
type ArticleAuth = {
  auth: {
    username: string,
    created_at: string
  }
}
export type TArticle = ArticleRecord & ArticleAuth

const BlogPage: React.FC = () => {
  const {list} = useBlog()

  if (Number(list.data?.length) <= 0) return (
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
        text-4xl mb-8 col-span-2 bg-cs-purple text-white px-2 uppercase
        md:text-end
        lg:text-6xl
        xl:item-center xl:place-self-end  xl:self-center xl:mb-0 xl:h-full xl:w-[50%]
        ">
          Xilcat 
            <span className='text-cs-blue'>
              Blog
            </span>
      </h1>
      {list?.data?.map((article) => (
          <Card article={article}/>
          ))}
    </div>
    <Footer />
    <PoliticsBar />
    </>
  );
};

export default BlogPage;