import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-[#F5F5DC] rounded-xl p-4 border border-[#8B4513] shadow-md hover:shadow-lg transition duration-200'>
        {/* Centering the image */}
        <div className='w-full flex justify-center items-center mb-4'>
          <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
            className='rounded-xl border border-[#8B4513] max-h-60 object-cover' />
        </div>
        <h2 className='text-xl font-bold text-[#8B4513]'>{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard
