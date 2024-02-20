import { SubmitHandler, useForm } from 'react-hook-form';
import useAuthUsers from '../../hooks/useAuthUsers'
import { useAppStore } from '../../store'
import { toast } from 'react-toastify';
import { useEffect, useReducer, useState } from 'react';
import { FaLock, FaLockOpen } from 'react-icons/fa';

type Inputs = {
  username: string;
  password: string;
  confirm: string;
  [idx: string]: string
}

const rolAlSpanol: { [idx: string] : string} = {
  'LAWYER': 'ABOGADO',
  'ADVISER': 'CONSEJERO',
  'CLIENT': 'CLIENTE'
}

const AuthUser = () => {
  const [isEditing, toggleIsEditin] = useReducer((prev) => !prev, false)
  const [showPass, setShowPass] = useState({
    pass: false,
    check: false,
  })
  const [newRol, setNewRol] = useState('')
  const { modal, closeModal } = useAppStore()
  const { data } = modal.params
  const { register: post, update, erase } = useAuthUsers()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async ({ username, password, confirm }) => {
    if (password !== confirm) return toast.error("Las contrasenas no coinciden")
    post.mutate({ data: { username, password }}, {
      onSuccess: () => {
        closeModal()
      }
    })
  }

  const handleSaveEdit = () => {
    toggleIsEditin()

    if (isEditing && newRol !== '') {
      update.mutate({ data: { rol: newRol }, id: data.id }, {
        onSuccess: () => {
          toast.success(`Rol de ${data.username} ha sido actualizado exitosamente`)
          closeModal()
        }
      })
    }
  }

  const handelDelete = () => {
    if(data.rol === 'ADMINISTRATOR') return toast.error('El usuario administrador no puede ser eliminado')
    erase.mutate(data.id, {
      onSuccess: () => {
        toast.success(`El usuario ${data.username} ha sido eliminado exitosamente`)
        closeModal()
      }
    })
  }

  useEffect(() => {
    const keys = Object.keys(errors)
    if (keys.length > 0){
      keys.forEach((key) => toast.error(errors[key]?.message))
    }
  }, [errors])

  if (modal.params.type === 'add') return (
    <form className="flex flex-col gap-4 p-6" onSubmit={handleSubmit(onSubmit)}>
      <h2 className='text-center font-bold'>Registro de usuario</h2>
    <div className="relative h-11 w-full min-w-[200px]">
      <input
        className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border border-cs-purple rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        placeholder=" "
        {...register('username', { required: "El usuario es necesaria"})}
      />
      <label
        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        Usuario
      </label>
    </div>
    <div className="relative h-11 w-full min-w-[200px]">
      <input
        type={showPass.pass ? 'text' : 'password'}
        className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border border-cs-purple rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        placeholder=" "
        {...register('password', { required: "La contrasena es necesaria"})}  
      />
      <label
        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        Contrasena
      </label>
      <div className='absolute top-3 right-2 h-8 w-8 text-xl hover:cursor-pointer' onClick={() => setShowPass(prev => ({ ...prev, pass: !prev.pass }))}>
                  {showPass.pass ? <FaLockOpen /> : <FaLock />}
                </div>
    </div>
    <div className="relative h-11 w-full min-w-[200px]">
      <input
        type={showPass.check ? 'text' : 'password'}
        className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border border-cs-purple rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        placeholder=" "
        {...register('confirm', { required: "La contrasena de confirmacion es necesaria"})}  
      />
      <label
        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        Confirmar
      </label>
      <div className='absolute top-3 right-2 h-8 w-8 text-xl' onClick={() => setShowPass(prev => ({ ...prev, check: !prev.check }))}>
        {showPass.check ? <FaLockOpen /> : <FaLock />}
      </div>
    </div>
    <button
            className="block w-full select-none rounded-lg bg-gradient-to-tr from-cs-purple to-cs-purple-light py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="submit">
            Agregar
          </button>
  </form>
  )

  if (modal.params.type === 'info') return (
    <div>
      <div className='mb-4 flex flex-col'>
        <div className='flex items-center justify-center'>
          <div className="relative inline-flex items-center justify-center w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="text-3xl text-gray-600 dark:text-gray-300 uppercase">{data.username.slice(0,1)}</span>
          </div>
        </div>
        <p className='text-center text-2xl'>{data.username}</p>
        <p className='text-center text-gray-300 italic'>{rolAlSpanol[data.rol]}</p>
        {
          isEditing && (
        <div className="w-[80%] mx-auto border rounded-md my-4 shadow-[0_4px_9px_-4px_#252323]">
          <p className='text-center bg-cs-purple-light text-white rounded py-2'>Selecciona el rol</p>
          <button
            onClick={() => setNewRol('LAWYER')}
            type="button"
            className="block w-full text-center cursor-pointer p-2 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200">
            ABOGADO
          </button>
          <button 
            onClick={() => setNewRol('ADVISER')}
            type="button"
            className="block w-full text-center cursor-pointer p-2 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200">
            CONSEJERO
          </button>
          <button
            onClick={() => setNewRol('CLIENT')}
            type="button"
            className="block w-full text-center cursor-pointer p-2 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200">
            CLIENTE
          </button>
        </div>
        )
      }
      </div>
      <div className="mb-4 flex items-center justify-center">
        <div
          className="inline-flex rounded-md shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          role="group">
          <button
            onClick={handelDelete}
            type="button"
            disabled={data.rol === 'ADMINISTRATOR'}
            className={`
              inline-block rounded-l bg-red-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700
              hover:bg-red-300 ${data.rol === 'ADMINISTRATOR' && 'cursor-not-allowed'}
              `}
            data-te-ripple-init
            data-te-ripple-color="light">
            Eliminar
          </button>
          <button
            type="button"
            onClick={() => isEditing && toggleIsEditin()}
            className="inline-block  px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700"
            data-te-ripple-init
            data-te-ripple-color="light">
            {isEditing && 'Cancelar'}
          </button>
          <button
            type="button"
            onClick={handleSaveEdit}
            className="
              inline-block rounded-r bg-cs-purple px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700
              hover:bg-cs-purple-light
              "
            data-te-ripple-init
            data-te-ripple-color="light">
            {isEditing ? 'Guardar' : 'Editar'}
          </button>
        </div>
      </div>
    </div>
  )
  return (
    <div>Default</div>
  )
}

export default AuthUser