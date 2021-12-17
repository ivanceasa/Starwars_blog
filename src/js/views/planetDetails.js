import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export function PlanetDetails() {
	const { store, actions } = useContext(Context);
	const { detailsId } = useParams();

	return (
		<>
			{store.planets.map((planet, id) => {
				if (id === parseInt(detailsId)) {
					return (
						<div>
							<div key={id}>
								<div className="d-flex flex-row ">
									<div className="m-4 d-flex justify-content-left ">
										<img src="https://via.placeholder.com/700x450.png" />
									</div>
									<div className="text-center mt-3 mr-4">
										<h1>{planet.name}</h1>
										<p className="m-3">
											{
												"Lorem ipsum dolor sit amet consectetur adipiscing elit lobortis, ultrices montes volutpat bibendum fermentum pretium eros maecenas, sollicitudin vitae erat senectus elementum justo himenaeos. Quam feugiat eu dictum montes consequat duis viverra aliquam nascetur mollis tortor, mattis suspendisse urna nulla vestibulum nibh habitant velit pellentesque interdum massa, faucibus sem praesent magna tincidunt eros penatibus at auctor euismod. Varius molestie leo venenatis vivamus dis congue blandit scelerisque senectus, nibh dui nascetur pharetra habitant est donec sociis nisl primis, bibendum porta ac tellus aliquam felis imperdiet dignissim.Leo potenti sociosqu cubilia dignissim penatibus est quis auctor, diam lacus proin dui dapibus fermentum at ullamcorper eu, accumsan sodales tortor metus elementum feugiat eget. Cursus nullam augue primis est molestie lectus aenean, montes lacus placerat diam senectus pharetra ad luctus, urna torquent fermentum velit donec ut. Mus augue risus lobortis aliquet viverra accumsan senectus, pharetra malesuada diam suscipit lacus hendrerit arcu pulvinar, congue nibh nullam dictum sem turpis."
											}
										</p>
									</div>
								</div>
								<div style={{ width: "1300px", height: "2px" }} className="m-4 bg-danger" />
								<div className="d-flex justify-content-between container">
									<div className="text-center m-3">
										<p className="text-danger">
											<strong>Rotation period</strong>
										</p>
										<p className="text-danger">{planet.rotation_period}</p>
									</div>
									<div className="text-center m-3">
										<p className="text-danger">
											<strong>Gravity</strong>
										</p>
										<p className="text-danger">{planet.gravity}</p>
									</div>
									<div className="text-center m-3">
										<p className="text-danger">
											<strong>Terrain</strong>
										</p>
										<p className="text-danger">{planet.terrain}</p>
									</div>
									<div className="text-center m-3">
										<p className="text-danger">
											<strong>Population</strong>
										</p>
										<p className="text-danger">{planet.population}</p>
									</div>
									<div className="text-center m-3">
										<p className="text-danger">
											<strong>Climate</strong>
										</p>
										<p className="text-danger">{planet.climate}</p>
									</div>
									<div className="text-center m-3">
										<p className="text-danger">
											<strong>Surface water</strong>
										</p>
										<p className="text-danger">{planet.surface_water}</p>
									</div>
								</div>
							</div>
						</div>
					);
				}
			})}
		</>
	);
}