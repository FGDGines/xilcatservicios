import { useNavigate } from 'react-router-dom'
type TClient = {
  id?: number
  name: string,
  tramiteType: string
}

const UserIcon = ({ client }: { client: TClient}) => {
  const  navigate  = useNavigate()
  const handleRedirect = () => navigate('/intranet/client/' + client.id)
  const name = client.name.length <= 15 ? client.name : client.name.slice(0, 15).concat('...')
  return (

    <div
      className="
        text-center border rounded-md pt-2 shadow-cs-box transition-all
        hover:cursor-pointer hover:-translate-y-1 hover:shadow-cs-box-big
      "
      onClick={handleRedirect}
    >
      <img
        src="https://tecdn.b-cdn.net/img/new/avatars/5.webp"
        className="mx-auto mb-4 w-32 rounded-lg"
        alt="Avatar" />
      <h5 className="mb-2 text-xl font-medium leading-tight">{name}</h5>
      <p className="text-neutral-500 dark:text-neutral-400">{client.tramiteType}</p>
    </div>
  )
}

export default UserIcon