import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

export const BlogsContext = createContext([]);

const App = () => {
	const [blogs, setBlogs] = useState([]);

	return (
		<div className="App">
			<BlogsContext.Provider value={{ blogs, setBlogs }}>
				<Header />
				<main>
					<Outlet />
				</main>
			</BlogsContext.Provider>
		</div>
	);
}

export default App;
