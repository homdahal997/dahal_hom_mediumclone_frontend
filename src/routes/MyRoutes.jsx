import { Routes, Route } from "react-router-dom";
import MovieList from "../pages/MovieList";
import MovieDetail from "../pages/MovieDetail";
import Search from "../pages/Search";
import PageNotFound from "../pages/PageNotFound";
import LoginForm from "../components/LoginForm";

function MyRoutes() {
    return(
        <>
        <Routes>
            <Route path="/" element={<MovieList apiPath="movie/now_playing" title="Now Playing" />} />
            <Route path="movie/:id" element={<MovieDetail />} />
            <Route path="movies/popular" element={<MovieList apiPath="movie/popular" title="Popular Movies"/>} />
            <Route path="movies/top" element={<MovieList apiPath="movie/top_rated" title="Top Rated Movies" />} />
            <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming Movies" />} />
            <Route path="search" element={<Search apiPath="search/movie" />} />
            <Route path="*" element={<PageNotFound title="404 Page Not Found"/>} />

            <Route path="/login" element={<LoginForm title="Login" />} />
        </Routes>
        </>
    )
}
export default MyRoutes