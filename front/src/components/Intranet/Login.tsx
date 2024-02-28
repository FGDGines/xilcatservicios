// import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
// import { FaLock, FaLockOpen } from "react-icons/fa";
import { useAuthProvider } from '../../hooks/useAuthProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import useAuthUsers from '../../hooks/useAuthUsers';
import Logo from '../../assets/logo_login.png'
import { FaHome, FaLock, FaLockOpen } from 'react-icons/fa';
import { useState } from 'react';

type Inputs = {
  username: string;
  password: string
}

const Login = () => {
  const { list } = useAuthUsers()
  const navigate = useNavigate()
  // const [showPass, setShowPass] = useState(false)
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>()
  const [showPass, setShowPass] = useState(false)
  const { signin } = useAuthProvider()
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await signin(data)
      return navigate('/intranet/main')

    } catch (error: any) {
      const messages = error.response.data.message
      messages.forEach((msg: string) => toast.error(msg))
    }
  }
  return (
    <div className='relative bg-cs-purple h-screen flex flex-col gap-24 sm:justify-center sm:items-center sm:flex-row sm:gap-0'>
      <button className='absolute top-60 sm:top-4 left-4 w-12 h-12 rounded-full text-xl text-white hover:text-cs-blue transition-all' onClick={() => navigate('/')}><FaHome /></button>
      <div className='
            w-full h-full bg-white basis-[30%] shadow-[inset_-0px_0px_80px_#2C2949] flex justify-center items-center
            sm:order-2
            xl:basis-[25%]
            '
      >
        <div className='w-60 h-60'>
          <img src={Logo} alt="" style={{ width: "100%", height: '100%' }} />

        </div>
      </div>
      <div className='sm:flex-1 flex justify-center sm:order-1'>
        <form className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border" onSubmit={handleSubmit(onSubmit)}>
          <div
            className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800 bg-clip-border shadow-gray-900/20">
            <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
              Inicia Session
            </h3>

          </div>

          <div className="flex flex-col gap-4 p-6">
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                {...register('username')}
              />
              <label
                className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Usuario
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type={showPass ? 'text' : 'password'}
                className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                {...register('password')}
              />
              <div className='absolute top-3 right-2 h-8 w-8 text-xl hover:cursor-pointer' onClick={() => setShowPass(prev => !prev)}>
                {showPass ? <FaLockOpen /> : <FaLock />}
              </div>
              <label
                className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Contrasena
              </label>
            </div>
          </div>
          <div className="p-6 pt-0">
            <button
              className="
                block w-full select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all 
                hover:shadow-lg hover:shadow-gray-900 hover:-translate-x-px
                active:opacity-[0.85] 
                disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="submit">
              Entra
            </button>
            {
              Number(list.data?.length) <= 0 && (
                <p className="flex justify-center mt-6 font-sans text-sm antialiased font-light leading-normal text-inherit">
                  No tienes una cuenta?
                  <p onClick={() => navigate("/intranet/register")}
                    className="block ml-1 font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900 hover:cursor-pointer">
                    Registrate
                  </p>
                </p>
              )
            }
            <p className="flex flex-col text-center justify-center mt-6 font-sans text-sm antialiased font-light leading-normal text-inherit">
              Si tienes algun problema contactanos a
              <span onClick={() => { }}
                className="select-text ml-1 font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900 hover:cursor-pointer">
                contactar@fgddesarrolloweb.es
              </span>
            </p>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Login