import React from 'react';
import List from './list';

export default class ListContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			title: props.title,
			cards: props.cards
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			value: event.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault();
		this.setState({
			value: '',
			cards: this.state.cards.concat(this.state.value)
		})
	}

	render() {
		return (
			<List title={this.state.title} cards={this.state.cards} onChange={this.handleChange} onSubmit={this.handleSubmit} value={this.state.value} />
			)
	}

}