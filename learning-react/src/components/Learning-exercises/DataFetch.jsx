import { useEffect, useState } from "react";
import "./dataFetch.css";

export default function DataFetch() {
    const dataUrl = 'https://jsonplaceholder.typicode.com/posts';
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(dataUrl);
                const responseData = await response.json();
                setData(responseData);
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
            <div className="loading" style={loading ? {display: "block"} : {display: "none"}}>
                <span></span>Loading...
            </div>
            <ul>
                {
                    data.map(post => (
                        <li key={post.id}>
                            <h2>{post.id}</h2>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}