import { createResource } from "solid-js"

interface Post{
    id: number
    title: string 
    content: string
}

const fetchingPosts = async() => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL
    const response = await fetch(`${baseUrl}/posts/`)
    if (!response.ok){
        throw new Error("Failed to fetch Data of Posts")
    }
    return response.json()
}

export default function FetchingData() {
    const [posts] = createResource(fetchingPosts)

    return(
        <div>
            {posts.loading && <p>Loading...</p>}
            {posts.error && <p>{posts.error.message}</p>}
            <ul>
                {posts()?.map((post:Post)=>(
                    <li class="border-b p-2">
                        <h2 class="text-xl font-semibold">
                            {post.title}
                        </h2>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}