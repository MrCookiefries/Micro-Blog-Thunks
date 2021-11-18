import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import blogsActions from "../store/actions/blogsActions";
import "./BlogList.css";

const BlogList = () => {
	const blogs = useSelector((store) => store.blogs, shallowEqual);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(blogsActions.fetchAll());
	}, [dispatch]);

	return (
		<section className="BlogList">
			{Object.keys(blogs).length ? (
				<ul>
					{Object.entries(blogs).map(([id, b]) => (
						<li key={id}>
							<Link to={id}>{b.title}</Link>
							<small>{b.description}</small>
						</li>
					))}
				</ul>
			) : (
				<p className="message">No blogs have been made yet...</p>
			)}
		</section>
	);
};

export default BlogList;
