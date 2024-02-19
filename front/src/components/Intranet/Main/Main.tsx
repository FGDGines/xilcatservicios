import { useState } from 'react'
import "react-big-calendar/lib/css/react-big-calendar.css";
import { MdSwitchLeft, MdSwitchRight } from 'react-icons/md';
import usejournal from '../../../hooks/useJournal';
import RightPanel from './RightPanel';
import Loader from '../../Common/Loader';
import Error from '../../Common/Error';
import LeftPanel from './LeftPanel';

const Main = () => {
  const { list } = usejournal()
  const [side, setSide] = useState(true)

  if (list.isLoading) return <Loader />
  if (list.isError) return <Error />

  return (
    <div className='relative h-full flex flex-nowrap p-4'>
      <div className='fixed bottom-6 left-6 text-white text-4xl bg-blue-500 rounded-full z-10 lg:w-0 lg:hidden hover:cursor-pointer' onClick={() => setSide(prev => !prev)}>
        {side ? <MdSwitchLeft /> : <MdSwitchRight />}
      </div>
      <LeftPanel side={side} data={list.data !== undefined ? list.data : []} />
      <RightPanel side={side} data={list.data !== undefined ? list.data : []}/>
    </div>
  )
}

export default Main