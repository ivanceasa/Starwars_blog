import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Button, Card, CardGroup } from "react-bootstrap";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

const CardPlanet = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);
	return (
		<div className="content">
			<h1 className="text-danger mx-4 my-2">Planets</h1>
			<div className="cardContainer">
				<CardGroup className="card-group-scroll">
					{store.planets.map((item, id) => (
						<Card key={id} className="m-4 card">
							<Card.Img variant="top" src="https://via.placeholder.com/400x200.png" />
							<Card.Body>
								<Card.Title>{item.name}</Card.Title>
								<Card.Text>{`Population: ${item.population}`}</Card.Text>
								<Card.Text>{`Terrain: ${item.terrain}`}</Card.Text>
								<Button
									className="m-2"
									variant="outline-primary"
									onClick={() => history.push(`/singlePlanet/${id}`)}>
									Learn more!
								</Button>
								<Button
									className="float-right btn-sm"
									variant="outline-warning"
									onClick={() => actions.favorites(item.name)}>
									<i className="far fa-heart" />
								</Button>
							</Card.Body>
						</Card>
					))}
				</CardGroup>
			</div>
		</div>
	);
};

export default CardPlanet;