import React from 'react'
import storageService from '../appwrite/Config'
import { Container, PostForm } from '../Components'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'



function EditPost() {

    const [post, setPosts] = useState(null)
    const { slug } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            storageService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
                else {
                    navigate('/')
                }
            })
        }
    }, [slug, navigate])

    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null
}

export default EditPost
