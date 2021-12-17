import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light my-2 mx-4">
			<Link to="/">
				<img
					src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png"
					height="40"
					alt="Star Wars"
				/>
			</Link>
			<DropdownButton id="dropdown-basic-button" title={"Favorites " + store.favorites.length}>
				{store.favorites.map((item, index) => {
					return (
						<Dropdown.ItemText key={index} className="d-flex justify-content-between">
							{item}
							<i className="fas fa-trash-alt m-2" onClick={() => actions.deleteFavorite(index)} />
						</Dropdown.ItemText>
					);
				})}
			</DropdownButton>
		</nav>
	);
};
