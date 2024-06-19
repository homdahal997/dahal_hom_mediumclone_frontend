import { useState, useEffect } from "react";

export const fetchAPIData = (apiPath, queryTerm = "") => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=57ea2093436edcb66707b775d94664ff&query=${queryTerm}`

    useEffect(() => {
        async function fetchMovies() {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const json = await response.json();
                setData(json.results);
            } catch (e) {
                setError(e.message);
            }
        }
        fetchMovies();
    }, [url])

    return { data, error }
}