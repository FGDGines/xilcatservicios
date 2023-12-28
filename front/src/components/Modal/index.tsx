import React from 'react'
import { LuCookie } from "react-icons/lu";
import { useStore } from '../../store';
import { Cookie } from './Cookie';
import Event from './Event';
import AddClient from './AddClient';
import AddProcedure from './AddProcedure';
import { TEvents } from '../../store/modalStore';
import CloseProcedure from './CloseProcedure';

type TComponents = Record<TEvents, JSX.Element> 

const Components: TComponents = {
  cookie: <Cookie />,
  event: <Event />,
  addclient: <AddClient />,
  addProcedure: <AddProcedure />,
  closeProcedure: <CloseProcedure />
}


const Modal = () => {
  const { setModal, modal, closeModal } = useStore()
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