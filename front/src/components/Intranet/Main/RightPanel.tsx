import { useEffect } from 'react'
import { TJournal } from '../../../types/journal'
import { useAppStore } from '../../../store'

type TProps = {
    side: boolean
    data: TJournal[]
}

const RightPanel = ({ side, data,  }: TProps) => {
  const { clearJournal, addJournalEvent } = useAppStore()

    useEffect(() => {
        clearJournal()
        if (Number(data?.length) > 0) data?.forEach(({ id, ...rest }) => addJournalEvent(rest))
      }, [])
  return (
    <div className={`
    bg-white h-full ${side ? 'flex-0 w-0 opacity-0' : 'flex-1 w-full'} transition-all  duration-300 ease-in flex flex-col 
    lg:basis-1/4 lg:w-full lg:p-4
    `}>
    <div className='border h-full overflow-auto'>
    <div className='bg-cs-purple p-2 rounded-t-md text-white'>
      <p>Notas</p>
    </div>
    {
        Number(data.length) <= 0 && (
          <div className='flex items-center justify-center h-full w-full'>
            <p className='font-bold'>No hay Notas aun</p>
          </div>
        )
    } 
      {
        data.map((item: TJournal) => (
          <div className='p-2 border-b'>
            <p className='font-bold'>{item.title.slice(0,15)}</p>
            <p className='text-gray-400'>{item.description}</p>
          </div>
        ))
      }
  </div>
  </div>
  )
}

export default RightPanel