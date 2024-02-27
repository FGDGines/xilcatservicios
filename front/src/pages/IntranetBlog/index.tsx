import { useState } from 'react'
import { TArticle } from '../Blog/types'
import useBlog from '../../hooks/useBlog'
import LeftPanel from '../../components/Intranet/Blog/LeftPanel'
import RightPanel from '../../components/Intranet/Blog/RightPanel'
import { MdSwitchLeft, MdSwitchRight } from 'react-icons/md'

const IntranetBlog = () => {
  const [blogSelected, setBlogSelected] = useState<TArticle | null>(null)
  // to be use later once you add pagination
  // const [page, setPage] = useState(1)
  // const [category, setCategory] = useState<ArticleCategory>('ALL')
  // const [currentCategory, setCurrentCategory] = useState<ArticleCategory>('ALL')
  const { list, erase } = useBlog({ page: 1, limit: 10, category: 'ALL', showApproved: '' })
  const [side, setSide] = useState(true)

  return (
    <div className='relative bg-white h-full w-full flex flex-nowrap px-4 py-2'>
      <div className='fixed bottom-6 left-6 text-white text-4xl bg-blue-500 rounded-full z-10 lg:w-0 lg:hidden hover:cursor-pointer' onClick={() => setSide(prev => !prev)}>
        {side ? <MdSwitchLeft /> : <MdSwitchRight />}
      </div>
      <LeftPanel side={side} data={list?.data || []} selected={blogSelected} select={setBlogSelected} erase={erase} />
      <RightPanel side={side} data={list?.data || []} erase={erase} select={setBlogSelected} />
    </div>
  )
}

export default IntranetBlog