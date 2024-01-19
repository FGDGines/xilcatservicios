import { useParams } from 'react-router-dom'

const Intranet = () => {
  const { site } = useParams()
  return (
    <div>Intranet {site}</div>
  )
}

export default Intranet