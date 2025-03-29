import React, { useEffect, useState } from 'react'
import { Container, PostForm } from '../components/index.js'
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPost] = useState(null) // Fixed typo: setPosts → setPost
    const [loading, setLoading] = useState(true) // Added loading state
    const { slug } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post)
                } 
                setLoading(false) // Stop loading whether post exists or not
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])

    if (loading) {
        return (
            <div className="py-8 bg-[#F5F5DC] text-[#8B4513] text-center">
                <p>Loading post...</p>
            </div>
        )
    }

    return post ? (
        <div className='py-8 bg-[#F5F5DC] text-[#8B4513]'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : (
        <div className="py-8 bg-[#F5F5DC] text-[#8B4513] text-center">
            <p>Post not found.</p>
        </div>
    )
}

export default EditPost