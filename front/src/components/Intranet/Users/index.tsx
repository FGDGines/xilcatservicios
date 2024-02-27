import useAuthUsers from "../../../hooks/useAuthUsers"
import { useAppStore } from "../../../store"
import UserCard from "./UserCard"

const Users = () => {
  const { setModal } = useAppStore()
  const { list } = useAuthUsers()

  return (
    <div className="mx-auto max-w-7xl  mt-4 lg:px-2">
      <div className="w-full flex justify-end items-center">
        <button className="px-4 py-2 bg-cs-purple  text-white rounded-md transition-all hover:bg-cs-purple-light" onClick={() => setModal({ type: 'auth_user', params: { type: 'add' } })}>
          Agregar Usuario
        </button>
      </div>
      <ul
        role="list"
        className="mx-auto grid max-w-2xl grid-cols-1 gap-x-0 gap-y-0 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
      >
        {
          list?.data?.map(item => {
            if (item.rol === 'GUEST') return;
            return (
              <UserCard data={item} />
            )
          })
        }
      </ul>
    </div>
  )
}

export default Users