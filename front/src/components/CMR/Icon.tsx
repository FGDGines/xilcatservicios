import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

type TIcon = {
  Icon: JSX.Element
  text: string
  url: string
  externalUrl?: string
  errorMsg?: string
  action?: any
  isSide?: boolean
}

const Icon = ({ Icon, text, url, errorMsg, action, isSide, externalUrl }: TIcon) => {
  const navigate = useNavigate()
  const location = useLocation()
  const handleRedirect = () => {
    if (errorMsg) return toast.error(errorMsg)
    if (action) return action()
    if (externalUrl) window.open(externalUrl)
    navigate(url)
  }
  const isActive = (direction: string) => {
    const lastPath = direction.split('/')
    return lastPath?.includes('clients' || 'account' || 'client') && direction === url
  }
  return (
      <div
        className={`
        flex flex-col items-center justify-center transition-all text-lg group
        hover:text-cs-purple-light hover:cursor-pointer ${ isSide && 'hover:bg-cs-purple-light hover:h-[90%] lg:hover:justify-start lg:hover:h-min lg:hover:w-[80%] hover:rounded-md hover:text-white '}
        ${isSide && 'lg:flex-row lg:gap-2 lg:ml-6 '} lg:text-xl p-2
        xl:text-3xl
        ${isActive(location.pathname) && 'bg-white h-[90%] rounded text-cs-purple lg:h-min lg:w-[80%] lg:justify-start'}
        `}
        onClick={handleRedirect}
      >
        {Icon}
        <p className='text-sm hidden group-hover:block group-hover:px-4 md:block md:group-hover:px-0'>{text}</p>
    </div>
  )
}

export default Icon