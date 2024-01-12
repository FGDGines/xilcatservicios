import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaLock, FaLockOpen } from "react-icons/fa";
import { useAuthProvider } from '../../hooks/useAuthProvider';
// import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

type Inputs = {
  username: string;
  password: string
}

const Login = () => {
  const navigate = useNavigate()
  const [showPass, setShowPass] = useState(false)
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>()
  const { signin } = useAuthProvider()
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await signin(data)
      return navigate('/intranet/main')

    } catch (error: any) {
      const messages = error.response.data.message
      messages.forEach((msg: string) => toast.error(msg))
    }
  }
  return (
    <div className='bg-cs-purple h-screen flex justify-center items-center'>
        <form className='h-[50%] w-[80%] bg-white text-cs-gray rounded grid grid-cols-1 place-items-center gap-4 shadow-xl shadow-gray-500/80 md:w-[60%] lg:w-[40%]'
        onSubmit={handleSubmit(onSubmit)}
        >
            <div className='flex flex-col justify-center w-[90%] h-full gap-2'>
                <label htmlFor="" className='text-xl text-cs-purple font-semibold'>Usuario</label>
                <input type="text" className='border border-cs-purple px-4 py-4 outline-none rounded-md focus:border-blue-500 text-lg' {...register('username')} />
            </div>
            <div className='relative flex flex-col w-[90%] h-full gap-2'>
                <label htmlFor="" className='text-xl text-cs-purple font-semibold'>Contraseña</label>
                <input className='border border-cs-purple px-2 py-4 outline-none rounded-md focus:border-blue-500' type={showPass ? 'text': 'password'} {...register('password')}/>
                <div className='absolute top-12 right-4 h-8 w-8 text-3xl' onClick={() => setShowPass(prev => !prev)}>
                  {showPass ? <FaLockOpen /> : <FaLock />}
                </div>
            </div>
            <div className='flex flex-col item-center justify-center0 w-[90%] min-h-[25%]'>
                <button className='bg-cs-gray py-2  text-white  hover:bg-cs-purple rounded'>Entrar</button>
                <a className='text-sm text-center mt-2 hover:text-cs-purple-light' href='/intranet/register'>No estas registrado?</a>
            </div>
        </form>
    </div>
  )
}

export default Login