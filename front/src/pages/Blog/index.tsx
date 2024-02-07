import React from 'react';
import Card from '../../components/Blog/Card';
import HeaderMenu from '../../components/HeaderMenu';
import Footer from '../../components/Footer';
import PoliticsBar from '../../components/PoliticsBar';
import useBlog from '../../hooks/useBlog';

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
  return (
    <>
    <HeaderMenu />
    <div className="container mx-auto py-8 min-h-[50vh] px-8 md:px-12 xl:grid xl:grid-cols-2 xl:gap-10 xl:place-items-center ">
      <h1 className="text-4xl mb-8 text-center col-span-2 xl:item-center ">Xilcat Blog</h1>
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