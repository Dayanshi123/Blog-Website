import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => { // Removed the empty array []
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    return (
        <div className='w-full py-8 bg-[#F5F5DC] text-[#8B4513]'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <div key={post.$id} className='p-2 w-1/4'>
                                <PostCard {...post} />
                            </div>
                        ))
                    ) : (
                        <p className="text-center w-full text-[#8B4513]">No posts available.</p>
                    )}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts;