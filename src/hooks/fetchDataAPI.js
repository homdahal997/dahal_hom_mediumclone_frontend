import { useState, useEffect } from "react";

export const fetchPostsData = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const url = "http://localhost:5050/api/v1/posts";

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const json = await response.json();
                setData(json);
            } catch (e) {
                setError(e.message);
            }
        }
        fetchPosts();
    }, [url])

    return { data, error }
}