import { useState } from 'react'
import { MdSwitchLeft, MdSwitchRight } from 'react-icons/md'
import { useParams } from 'react-router-dom'

import useClients from '../../../hooks/useClients'
import Loader from '../../Common/Loader'
import Error from '../../Common/Error'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'



const Account = () => {
  const [side, setSide] = useState(true)
  const {id} = useParams()
  const {  getClient} = useClients('all')
  const { data, isLoading, isError } = getClient(Number(id))

  if (isLoading) return <Loader />

  if (isError) return <Error />

  return (
    <div className='relative h-full flex flex-nowrap'>
      <div className='absolute bottom-6 right-6 text-white text-4xl bg-blue-500 rounded-full z-20 lg:w-0 lg:hidden hover:cursor-pointer' onClick={() => setSide(prev => !prev)}>
        { side ? <MdSwitchLeft /> : <MdSwitchRight /> }
      </div>
      <LeftPanel side={side} data={data}/>
      <RightPanel side={side} data={data} />
    </div>
  )
}

export default Account