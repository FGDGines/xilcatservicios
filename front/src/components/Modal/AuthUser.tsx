import useAuthUsers from '../../hooks/useAuthUsers'

const AuthUser = () => {
  const { list, update } = useAuthUsers()
  const handleChangeRol = (user: any) => {
    const roles = ['CLIENT', 'LAWYER', 'ADVISER' ]
    const { rol, id }= user

    const oldRolId = roles.findIndex((item) => item === rol)
    const newRolId = oldRolId + 1 >= roles.length ? 0 : oldRolId + 1

    update.mutate({ data: { rol: roles[newRolId]}, id})
  }
  return (
    <div>
      <p className='text-xl font-bold text-center mb-4'>Auth Users</p>
      {
        list?.data?.map((item: any) => (
          <p className='mb-2 flex justify-between border rounded-md px-4 py-2'>
            {item.username}
            <span
              className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 hover:cursor-pointer"
              onClick={() => handleChangeRol(item)}
            >
                {item.rol}
            </span>
          </p>
        ))
      }
    </div>
  )
}

export default AuthUser