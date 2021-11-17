import "./Header.css";
import NavBar from "./NavBar";

const Header = () => {
	return (
		<header className="Header">
			<h1 className="title">Microblog</h1>
			<p className="subtitle">A small featured blogging site!</p>
			<NavBar />
		</header>
	);
};

export default Header;
