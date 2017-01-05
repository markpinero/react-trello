import React from 'react';
import Card from './card';

export default function List(props) {
	console.log(props);
	const cards = props.cards.map((text, index) => {
		return (
			<Card text={text} key={index} />
		)
	})
	return (
		<div className="list">
			<h1>{props.title}</h1>
			{cards}
			<form onSubmit={props.onSubmit}>
				<input type="text" onChange={props.onChange} value={props.value} />
				<button type="submit">Submit</button>
			</form>
		</div>
		)
}