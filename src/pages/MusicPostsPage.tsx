import { useEffect, useState } from "react";
import { getMusicPosts } from "../api/user_api";
import { MusicPost } from "../types/MusicPost";

export default function MusicPostsPage() {
    const [musicPosts, setMusicPosts] = useState([]);

    useEffect(() => {
        getMusicPosts().then(setMusicPosts).catch(console.error);
    }, []);

    return <>
        <h1>Music Posts</h1>
        <ul>
            {musicPosts.map((post: MusicPost, index) => (
                <li key={index}>
                    <a href={post.url} target="_blank" rel="noopener noreferrer">
                        {post.url}
                    </a>
                </li>
            ))}
        </ul>
    </>
}