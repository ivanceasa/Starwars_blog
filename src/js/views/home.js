import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import CardCharacter from "../component/cardCharacter";
import CardPlanet from "../component/cardPlanet";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadingData();
	}, []);

	return (
		<>
			<CardCharacter />
			<CardPlanet />
		</>
	);
};
