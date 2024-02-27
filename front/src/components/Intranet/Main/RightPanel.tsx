import { useEffect } from 'react'
import { TJournal } from '../../../types/journal'
import { useAppStore } from '../../../store'
import useJournal from '../../../hooks/useJournal'
import { toast } from 'react-toastify'
import { FaRegTrashAlt } from 'react-icons/fa'

type TProps = {
  side: boolean
  data: TJournal[]
}

const RightPanel = ({ side, data, }: TProps) => {
  const { clearJournal, addJournalEvent, deleteJournalById, setModal } = useAppStore()
  const { erase } = useJournal()

  const handleDelete = (id: number) => {
    erase.mutate({ id }, {
      onSuccess: () => {
        deleteJournalById(id)
        toast.success('nota eliminada')
      }
    })
  }

  useEffect(() => {
    clearJournal()
    if (Number(data?.length) > 0) data?.forEach(({ id, ...rest }) => addJournalEvent(rest))
  }, [])
  return (
    <div className={`
    bg-white h-full ${side ? 'flex-0 w-0 opacity-0' : 'flex-1 w-full'} transition-all  duration-300 ease-in flex flex-col 
    lg:p-4
    lg:flex-1 lg:w-full lg:opacity-100
    `}>
      <div className='border h-full overflow-auto shadow-md'>
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
            <div className='px-4 py-2 border-b flex justify-between w-full' key={item.title}>
              <div onClick={() => setModal({ type: 'description', params: { text: item.description, title: item.title } })} className='hover:cursor-pointer flex-1'>
                <p className='font-bold'>{item.title.slice(0, 15)}</p>
                <p className='text-gray-400'>{item.description.slice(0, 100)}</p>
              </div>
              <div onClick={() => handleDelete(Number(item.id))} className='hover:cursor-pointer hover:text-red-500 basis-1/4 flex justify-center items-center text-xl'>
                <FaRegTrashAlt />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default RightPanel