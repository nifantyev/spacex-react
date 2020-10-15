import React from 'react';
import RellaxWrapper from 'react-rellax-wrapper';
import './features.css';

const Features = ({features}) => (
	<section className="features">
		<h2 className="features-title">
			{features && features.name} <br/>Overview
		</h2>
		<div className="overview">

			<table className="table">
				<caption className="table-title">
					Size
				</caption>
				<thead>
					<tr>
						<td className="table-column">HEIGHT</td>
						<td className="table-column">{features && features.height.meters} m / {features && features.height.feet} ft</td>
					</tr>
					<tr>
						<td className="table-column">DIAMETER</td>
						<td className="table-column">{features && features.diameter.meters} m / {features && features.diameter.feet} ft</td>
					</tr>
					<tr>
						<td className="table-column">MASS</td>
						<td className="table-column">
							{features && features.mass.kg.toLocaleString()} kg / {features && features.mass.lb.toLocaleString()} lb
						</td>
					</tr>
					<tr>
						<td className="table-column">PAYLOAD TO LEO</td>
						<td className="table-column">
							{features && features.payload_weights.find(weight => weight.id === 'leo').kg} kg
							&nbsp;/&nbsp;
							{features && features.payload_weights.find(weight => weight.id === 'leo').lb} lb
						</td>
					</tr>
				</thead>
			</table>
            <RellaxWrapper speed={14}>
                <img
					src={`./img/${features && features.name.toLowerCase().replace(' ', '-')}.png`}
					alt="rocket"
					className="rocket"
                />
            </RellaxWrapper>
			<article>
				<h3 className="features-subtitle">DESCRIPTION</h3>
				<p className="features-text">
					{features && features.description}					
				</p>
			</article>
		</div>
	</section>
);

export default Features;