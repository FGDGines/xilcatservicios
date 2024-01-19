import { DotLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className='flex h-full justify-center items-center'>
    <DotLoader
      color='#6C6798'
      size={100}
    />
  </div>
  )
}

export default Loader