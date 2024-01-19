import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaLock, FaLockOpen } from "react-icons/fa";
import { useAuthProvider } from '../../hooks/useAuthProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

type Inputs = {
  username: string;
  password: string;
  checkPassword: string;
}

const Register = () => {
  const navigate = useNavigate()
  const [showPass, setShowPass] = useState({
    pass: false,
    check: false,
  })
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>()
  const { signup } = useAuthProvider()
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await signup(data)
      toast.success('Usuario creado exitosamente')
      return navigate('/intranet/login')

    } catch (error: any) {
      const messages = error?.response?.data?.message || [error.message]
      messages.forEach((msg: string) => toast.error(msg))
    }
  }
  return (
    <div className='bg-cs-purple h-screen flex justify-center items-center'>
        <form className='h-[60%] w-[80%] bg-white text-cs-gray rounded grid grid-cols-1 place-items-center gap-4 shadow-xl shadow-gray-500/80 md:w-[60%] lg:w-[40%]'
        onSubmit={handleSubmit(onSubmit)}
        >
            <div className='flex flex-col justify-center w-[90%] h-full gap-2'>
                <label htmlFor="" className='text-xl text-cs-purple font-semibold'>Usuario </label>
                <input type="text" className='border border-cs-purple px-4 py-4 outline-none rounded-md focus:border-blue-500 text-lg' {...register('username')} />
            </div>
            <div className='relative flex flex-col w-[90%] gap-2'>
                <label htmlFor="" className='text-xl text-cs-purple font-semibold'>Contraseña</label>
                <input className='border border-cs-purple px-2 py-4 outline-none rounded-md focus:border-blue-500' type={showPass.pass ? 'text': 'password'} {...register('password')}/>
                <div className='absolute top-12 right-4 h-8 w-8 text-3xl' onClick={() => setShowPass(prev => ({ ...prev, pass: !prev.pass }))}>
                  {showPass.pass ? <FaLockOpen /> : <FaLock />}
                </div>
            </div>
            <div className='relative flex flex-col w-[90%] gap-2'>
                <label htmlFor="" className='text-xl text-cs-purple font-semibold'>Confirmar Contraseña</label>
                <input className='border border-cs-purple px-2 py-4 outline-none rounded-md focus:border-blue-500' type={showPass.check ? 'text': 'password'} {...register('checkPassword')}/>
                <div className='absolute top-12 right-4 h-8 w-8 text-3xl' onClick={() => setShowPass(prev => ({ ...prev, check: !prev.check }))}>
                  {showPass.check ? <FaLockOpen /> : <FaLock />}
                </div>
            </div>
            <div className='flex flex-col item-center justify-center0 w-[90%] min-h-[25%]'>
                <button className='bg-cs-gray py-2  text-white  hover:bg-cs-purple rounded'>Entrar</button>
                <a className='text-sm text-center mt-2 hover:text-cs-purple-light' href='/intranet/login'>Ya posees una cuenta?</a>
            </div>
        </form>
    </div>
  )
}

export default Register