import { FaPlus } from "react-icons/fa";
import { useAppStore } from '../../store';

const AddClientBtn = () => {
  const { setModal } = useAppStore()
  return (
    <div className='
      flex justify-center items-center h-full w-full text-6xl text-cs-purple transition-all
      hover:border hover:border-cs-purple-light hover:border-2 hover:rounded-md hover:text-cs-purple-light
    '
    onClick={() => setModal({ type: 'addclient' })}
    >
        <FaPlus />
    </div>
  )
}

export default AddClientBtn