import "./navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<div className="container">
				<div>
					<Link to="/">
						<h1 className="logo">Workout Setter</h1>
					</Link>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
