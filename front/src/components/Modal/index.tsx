import React from 'react'
import { LuCookie } from "react-icons/lu";
import { useStore } from '../../store';
import { Cookie } from './Cookie';
import Event from './Event';
import AddClient from './AddClient';

const Modal = ({
  // width,
  // height,
}: {
  // width: string,
  // height: string,
}) => {
  const { setModal, modal } = useStore()
  return (
    <div className='fixed top-0 z-50 h-screen w-screen flex justify-center items-center backdrop-blur-md'>
      <div className={`border  border-cs-purple bg-white text-cs-gray rounded-md flex flex-col py-6 px-4 gap-4 w-[80%] md:w-[60%] xl:w-[30%]`}>
        <div className='self-end'>
          <button onClick={() => setModal({ state: false, type: ''})} >X</button>
        </div>
        <div>
          {
            modal.type === 'cookie' && <Cookie />
          }
          {
            modal.type === 'event' && <Event />
          }
          {
            modal.type === 'addclient' && <AddClient />
          }
        </div>
      </div>
    </div>
  )
}

export default Modal