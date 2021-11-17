import { Route, Routes } from "react-router-dom";
import App from "../App";
import Blog from "./Blog";
import BlogList from "./BlogList";
import NewBlogForm from "./NewBlogForm";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<App />}>
				<Route index element={<BlogList />} />
				<Route path="new" element={<NewBlogForm />} />
				<Route path=":id" element={<Blog />} />
			</Route>
		</Routes>
	);
};

export default AppRoutes;
