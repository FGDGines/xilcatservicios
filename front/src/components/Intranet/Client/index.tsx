import { useReducer } from 'react'
import { useParams } from 'react-router-dom' 
import { MdSwitchLeft, MdSwitchRight } from "react-icons/md";
import useClients from '../../../hooks/useClients';
import RightPanel from './RightPanel';
import LeftPanel from './LeftPanel';
import Loader from '../../Common/Loader';
import Error from '../../Common/Error';

const Client = () => {
  const { getClient } = useClients('all')
  const [side, toggleSide] = useReducer((prev: boolean) => !prev , true)
  const { id } = useParams()
  const { data, isLoading, isError } = getClient(Number(id))

  if (isLoading) return <Loader />
  
  if (isError) return <Error />
  
  return (
    <div className='relative h-full flex flex-nowrap'>
      <div className='absolute bottom-6 right-6 text-white text-4xl bg-blue-500 rounded-full z-10 lg:w-0 hover:cursor-pointer' onClick={toggleSide}>
        { side ? <MdSwitchLeft /> : <MdSwitchRight /> }
      </div>
      <LeftPanel data={data} side={side} />
      <RightPanel id={Number(id)} data={data} side={side} />
    </div>
  )
}

export default Client