import React from 'react'
import storageService from '../appwrite/Config'
import { Link } from 'react-router-dom'


function PostCard({$id,title,featuedImage}) {
  return (
    <Link to ={`/post/${$id}`}>
      <div className="w-full bg-slate-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
            <img className='rounded-xl' src={storageService.getFilePreview(featuedImage)} alt={title} />
        </div>
        <h2 className='text-xl font-bold'>{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard
