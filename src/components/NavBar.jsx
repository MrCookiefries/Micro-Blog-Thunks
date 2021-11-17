import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
	return (
		<nav className="NavBar">
			<ul className="list">
				<li>
					<Link to="/">Blog</Link>
				</li>
				<li>
					<Link to="new">
						<button type="button">Add a new post</button>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
