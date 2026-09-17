import { useEffect, useState } from "react";
import "./dataFetch.css";

export default function DataFetch() {
    const dataUrl = 'https://jsonplaceholder.typicode.com/posts';
    const userUrl = 'https://jsonplaceholder.typicode.com/users';
    const [data, setData] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const [postsResponse, usersResponse] = await Promise.all([
                    fetch(dataUrl),
                    fetch(userUrl),
                ]);
                const [postsData, usersData] = await Promise.all([
                    postsResponse.json(),
                    usersResponse.json(),
                ]);
                setData(postsData);
                setUsers(usersData);
            } catch {
                console.error("Failed to get data");
            } finally {
                setLoading(false)
                console.log("Operation is done!");
            }
        }

        fetchData();
    }, []);
    return (
        <>
            <h1>Posts</h1>
            <div className="loading" style={loading ? { display: "block" } : { display: "none" }}>
                <span></span>Loading...
            </div>
            <ul>
                {data.map(post => {
                    const author = users.find(user => user.id === post.userId);
                    return (
                        <li key={post.id}>
                            <div className="header" style={{display: "flex", gap: "20px"}}>
                                <h2>{post.id}</h2>
                                <h3>By: {author ? author.name : "Unknown"}</h3>
                            </div>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}