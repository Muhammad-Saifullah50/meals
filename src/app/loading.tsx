import { LoaderCircleIcon } from 'lucide-react'
import React from 'react'

const loading = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      <LoaderCircleIcon />
    </div>
  )
}

export default loading