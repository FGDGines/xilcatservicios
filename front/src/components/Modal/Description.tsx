import React from 'react'
import { useAppStore } from '../../store'

const Description = () => {
  const { modal } = useAppStore()
  return (
    <div>
      <p className='mb-4 font-semibold text-2xl'>Cliente: {modal.params.title}</p>
      <p>{modal?.params?.text}</p>
    </div>
  )
}

export default Description