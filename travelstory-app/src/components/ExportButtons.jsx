import React from 'react'

const ExportButtons = () => {
  return (
    <div className='p-2 bg-gray-50 flex justify-center gap-4'>
      <button className='px-4 py-2 bg-purple-600 text-white rounded'>Generate Video</button>
      <button className='px-4 py-2 bg-red-500 text-white rounded'>Export as PDF</button>
    </div>
  )
}

export default ExportButtons