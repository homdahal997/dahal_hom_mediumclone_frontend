import { Routes, Route } from "react-router-dom";
import MovieDetail from "../pages/MovieDetail";
import Search from "../pages/Search";
import PageNotFound from "../pages/PageNotFound";
import LoginForm from "../components/LoginForm";
import PostList from "../pages/PostList";

function MyRoutes() {
    return(
        <>
        <Routes>
            <Route path="/" element={<PostList  title="Latest Posts" />} />
            {/* <Route path="movie/:id" element={<MovieDetail />} />
            <Route path="movies/popular" element={<MovieList apiPath="movie/popular" title="Popular Movies"/>} />
            <Route path="movies/top" element={<MovieList apiPath="movie/top_rated" title="Top Rated Movies" />} />
            <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming Movies" />} />
            <Route path="search" element={<Search apiPath="search/movie" />} />
            <Route path="*" element={<PageNotFound title="404 Page Not Found"/>} /> */}

            <Route path="/login" element={<LoginForm title="Login" />} />
            <Route path="/search" element={<Search apiPath="http://localhost:5050/api/v1/posts" />} />
        </Routes>
        </>
    )
}
export default MyRoutes