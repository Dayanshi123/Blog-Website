import React from 'react'

function Container({ children }) {
  return (
    <div className='w-full max-w-7xl mx-auto px-4 bg-[#FAF0E6] text-[#8B4513]'>
      {children}
    </div>
  );
}

export default Container