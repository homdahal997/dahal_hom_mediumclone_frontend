import { useState, useEffect } from "react";

export const useFetchPostsData = (queryTerm) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const url = queryTerm 
            ? `https://dahal-hom-mediumclone-backend.onrender.com/api/v1/posts?search=${queryTerm}` 
            : "https://dahal-hom-mediumclone-backend.onrender.com/api/v1/posts";

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
    }, [queryTerm]);

    return { data, error };
};
