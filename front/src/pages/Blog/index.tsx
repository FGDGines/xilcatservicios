import React from 'react';
import Card from '../../components/Blog/Card';
import HeaderMenu from '../../components/HeaderMenu';
import Footer from '../../components/Footer';
import PoliticsBar from '../../components/PoliticsBar';

type ArticleKeys = 'id' | 'title' | 'content' | 'author' | 'date'
export type TArticle = Record<ArticleKeys , string | number> 

const articles = [
  {
    id: 1,
    title: 'Getting Started with Tailwind CSS',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'John Doe',
    date: '2023-12-15',
  },
  {
    id: 2,
    title: 'React Hooks: An Introduction',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Jane Smith',
    date: '2023-12-14',
  },
  // Add more articles...
];

const BlogPage: React.FC = () => {
  return (
    <>
    <HeaderMenu />
    <div className="container mx-auto py-8 min-h-[50vh] px-2 md:px-6 xl:grid xl:grid-cols-2 xl:gap-2 xl:place-items-center xl:p-0">
      <h1 className="text-4xl mb-8 text-center col-span-2 xl:item-center">Xilcat Blog</h1>
      {articles.map((article) => (
          <Card article={article}/>
          ))}
    </div>
    <Footer />
    <PoliticsBar />
    </>
  );
};

export default BlogPage;