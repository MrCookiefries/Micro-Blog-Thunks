import { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogsContext } from "../App";
import "./BlogList.css";

const BlogList = () => {
	const { blogs } = useContext(BlogsContext);

	return (
		<section className="BlogList">
			{blogs.length ? (
				<ul>
					{blogs.map((b) => (
						<li key={b.id}>
							<Link to={b.id}>{b.title}</Link>
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
