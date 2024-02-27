import { useAppStore } from "../../../store"
import { ROLES } from "../../Modal/Constants"


const UserCard = ({ data }: { data: any }) => {
  const { setModal } = useAppStore()
  return (
    <li v-for="person in people" onClick={() => setModal({ type: 'auth_user', params: { type: 'info', data } })}>
      <ul role="list" className="mt-3 flex gap-x-3">
        <div className="m-2 space-y-2">
          <div
            className="group flex flex-col gap-1 rounded-lg p-5 text-gray"
          >
            <div className="group w-[320px] relative m-0 flex h-72 w-72 rounded-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg lg:w-[300px] lg:h-[210px]">
              <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                <img src="https://img.freepik.com/free-photo/businesspeople-office-meeting_23-2148908969.jpg" className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
              </div>
              <div className="p-3 w-[70%] bg-gray-500 rounded-xl opacity-60 absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 group-hover:opacity-100">
                <h1 className="text-lg font-bold text-white ">{data.username}</h1>
                <h2 className="text-m font-light text-gray-200 capitalize">{ROLES.find(rol => rol.value === data.rol)?.text}</h2>
              </div>

            </div>
          </div>
        </div>
      </ul>
    </li>
  )
}

export default UserCard