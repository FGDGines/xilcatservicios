import { useAppStore } from '../../store';
import { Cookie } from './Cookie';
import Event from './Event';
import AddClient from './AddClient';
import AddProcedure from './AddProcedure';
import { TEvents } from '../../store/modalStore';
import CloseProcedure from './CloseProcedure';
import Description from './Description';
import AuthUser from './AuthUser';
import Blog from './Blog';
import PendingBlogs from './PendingBlogs';

type TComponents = Record<TEvents, JSX.Element> 

const Components: TComponents = {
  cookie: <Cookie />,
  event: <Event />,
  addclient: <AddClient />,
  addProcedure: <AddProcedure />,
  closeProcedure: <CloseProcedure />,
  description: <Description />,
  auth_user: <AuthUser />,
  blog: <Blog />,
  pending: <PendingBlogs />
}


const Modal = () => {
  const { modal, closeModal } = useAppStore()
  return (
    <div className='fixed top-0 z-50 h-screen w-screen flex justify-center items-center backdrop-blur-md'>
      <div className={`border  border-cs-purple bg-white text-cs-gray rounded-md flex flex-col py-6 px-4 gap-4 w-[80%] md:w-[60%] xl:w-[30%]`}>
        <div className='self-end'>
          <button onClick={closeModal} >X</button>
        </div>
        <div>
          { Components[modal.type as keyof TComponents] }
        </div>
      </div>
    </div>
  )
}

export default Modal