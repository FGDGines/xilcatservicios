import { SubmitHandler, useForm } from 'react-hook-form';
import useAuthUsers from '../../hooks/useAuthUsers'
import { useAppStore } from '../../store'
import { toast } from 'react-toastify';
import { useEffect } from 'react';

// const AuthUser = () => {
//   const { list, update } = useAuthUsers()
//   const handleChangeRol = (user: any) => {
//     const roles = ['CLIENT', 'LAWYER', 'ADVISER' ]
//     const { rol, id }= user
//     if (rol === 'ADMINISTRATOR') return;

//     const oldRolId = roles.findIndex((item) => item === rol)
//     const newRolId = oldRolId + 1 >= roles.length ? 0 : oldRolId + 1

//     update.mutate({ data: { rol: roles[newRolId]}, id})
//   }
//   return (
//     <div>
//       <p className='text-xl font-bold text-center mb-4'>Auth Users</p>
//       {
//         Number(list?.data?.length) <= 0 && (
//           <div>No hay Usuarios Agregados</div>
//         )
//       }
//       {
//         list?.data?.map((item: any) => (
//           <p className='mb-2 flex justify-between border rounded-md px-4 py-2'>
//             {item.username}
//             <span
//               className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 hover:cursor-pointer"
//               onClick={() => handleChangeRol(item)}
//             >
//                 {item.rol}
//             </span>
//           </p>
//         ))
//       }
//     </div>
//   )
// }

type Inputs = {
  username: string;
  password: string;
  confirm: string;
  [idx: string]: string
}

const AuthUser = () => {
  const { modal, closeModal } = useAppStore()
  const { register: post} = useAuthUsers()
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
        User
      </label>
    </div>
    <div className="relative h-11 w-full min-w-[200px]">
      <input
      type='password'
        className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border border-cs-purple rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        placeholder=" "
        {...register('password', { required: "La contrasena es necesaria"})}  
      />
      <label
        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        Password
      </label>
    </div>
    <div className="relative h-11 w-full min-w-[200px]">
      <input
      type='password'
        className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border border-cs-purple rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        placeholder=" "
        {...register('confirm', { required: "La contrasena de confirmacion es necesaria"})}  
      />
      <label
        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        Confirm Password
      </label>
    </div>
    <button
            className="block w-full select-none rounded-lg bg-gradient-to-tr from-cs-purple to-cs-purple-light py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="submit">
            Agregar
          </button>
  </form>
  )
  return (
    <div>Default</div>
  )
}

export default AuthUser