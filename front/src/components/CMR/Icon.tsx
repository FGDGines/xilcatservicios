import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

type TIcon = {
  Icon: JSX.Element
  text: string
  url: string
  errorMsg?: string
  action?: any
  isSide?: boolean
}

const Icon = ({ Icon, text, url, errorMsg, action, isSide }: TIcon) => {
  const navigate = useNavigate()
  const location = useLocation()
  const handleRedirect = () => {
    if (errorMsg) return toast.error(errorMsg)
    if (action) return action()
    navigate(url)
  }
  const isActive = (direction: string) => {
    const lastPath = direction.split('/')
    console.log('lastPath', lastPath)
    console.log('includes', lastPath?.includes('clients' || 'account'))
    console.log('direction', direction)
    console.log('url', url)
    const regex = new RegExp(url, 'gi')
    return lastPath?.includes('clients' || 'account' || 'client') && direction === url
  }
  return (
      <div
        className={`
        flex flex-col items-center justify-center transition-all 
        hover:text-cs-purple-light hover:cursor-pointer ${ isSide && 'hover:bg-cs-purple-light hover:h-[90%] lg:hover:justify-start lg:hover:h-min lg:hover:w-[80%] hover:rounded-md hover:text-white '}
        ${isSide && 'lg:flex-row lg:gap-2'} lg:text-xl lg:ml-6 p-2
        xl:text-3xl
        ${isActive(location.pathname) && 'bg-white h-[90%] rounded text-cs-purple lg:h-min lg:w-[80%] lg:justify-start'}
        `}
        onClick={handleRedirect}
      >
        {Icon}
        <p className='text-sm'>{text}</p>
    </div>
  )
}

export default Icon