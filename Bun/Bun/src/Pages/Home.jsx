import React from 'react'
import storageService from '../appwrite/Config'
import { Container, PostCard } from '../Components'
import { useState } from 'react'
import { useEffect } from 'react'


function Home() {

    const [post, setpost] = useState([])
    useEffect(() => {
        storageService.getPosts().then((posts) => {
            if (posts) {
                setpost(posts.documents)
            }
        })
    })

    if (post.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {post.map((pos) => (
                        <div key={pos.$id} className='p-2 w-1/4'>
                            <PostCard {...pos} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )

}

export default Home
