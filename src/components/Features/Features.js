import React from 'react';
import RellaxWrapper from 'react-rellax-wrapper';
import './features.css';

const Features = ({name, height, diameter, mass, payload_weights: payloadWeights, description}) => (
	<section className="features">
		<h2 className="features-title">
			{name} <br/>Overview
		</h2>
		<div className="overview">

			<table className="table">
				<caption className="table-title">
					Size
				</caption>
				<thead>
					<tr>
						<td className="table-column">HEIGHT</td>
						<td className="table-column">{height.meters} m / {height.feet} ft</td>
					</tr>
					<tr>
						<td className="table-column">DIAMETER</td>
						<td className="table-column">{diameter.meters} m / {diameter.feet} ft</td>
					</tr>
					<tr>
						<td className="table-column">MASS</td>
						<td className="table-column">
							{mass.kg.toLocaleString()} kg / {mass.lb.toLocaleString()} lb
						</td>
					</tr>
					{
						payloadWeights.map(payload => (
							<tr key={payload.id}>
								<td className="table-column">PAYLOAD TO {payload.id.toUpperCase()}</td>
								<td className="table-column">
									{payload.kg} kg
									&nbsp;/&nbsp;
									{payload.lb} lb
								</td>
							</tr>
						))
					}
				</thead>
			</table>
            <RellaxWrapper speed={14}>
                <img
					src={`./img/${name.toLowerCase().replace(' ', '-')}.png`}
					alt="rocket"
					className="rocket"
                />
            </RellaxWrapper>
			<article>
				<h3 className="features-subtitle">DESCRIPTION</h3>
				<p className="features-text">
					{description}					
				</p>
			</article>
		</div>
	</section>
);

export default Features;