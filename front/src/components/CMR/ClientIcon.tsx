import Client from '../../assets/client.png'
import { useNavigate } from 'react-router-dom'
type TClient = {
  id?: number
  name: string
}

const UserIcon = ({ client }: { client: TClient}) => {
  const  navigate  = useNavigate()
  const handleRedirect = () => navigate('/intranet/client/' + client.id)
  return (
    <div className='
      relative
      rounded shadow-md
      hover:-translate-x-px hover:-translate-y-px
    '
    onClick={handleRedirect}
    >
      <img src={Client} alt="" style={{ width: '100%', height: '100%'}}/>
      <div className='absolute bottom-0 left-0 mb-2 w-full flex justify-center text-center'>
        <p className='px-6 py-2 bg-cs-purple text-white rounded uppercase text-sm'>{client.name}</p>

      </div>
    </div>
  )
}

export default UserIcon