import { Routes, Route } from "react-router-dom";
import PostDetail from "../pages/PostDetail";
import Search from "../pages/Search";
import PageNotFound from "../pages/PageNotFound";
import LoginForm from "../components/LoginForm";
import PostList from "../pages/PostList";
import Register from "../components/RegisterForm";
import AddPost from "../components/AddPost";

function MyRoutes() {
    return(
        <>
        <Routes>
            <Route path="/" element={<PostList  title="Latest posts" />} />
            <Route path="*" element={<PageNotFound title="404 Page Not Found"/>} /> 
            <Route path="/login" element={<LoginForm title="login" />} />
            <Route path="/register" element={<Register title="register" />} />
            <Route path="/search" element={<Search apiPath="https://dahal-hom-mediumclone-backend.onrender.com/api/v1/posts" />} />
            <Route path="post/:id" element={<PostDetail />} />
            <Route path="/post/add-a-post" element={<AddPost />} />

            
        </Routes>
        </>
    )
}
export default MyRoutes