import { FaPlus } from "react-icons/fa";
import { useAppStore } from '../../store';

const AddClientBtn = () => {
  const { setModal } = useAppStore()
  return (
    <div className='flex justify-center items-center h-full w-full text-6xl text-cs-purple'
    onClick={() => setModal({ type: 'addclient' })}
    >
        <FaPlus />
    </div>
  )
}

export default AddClientBtn