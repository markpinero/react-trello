import React from 'react';
import ListContainer from './list-container';

class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: props.data
		}
	}
	render () {
		const lists = this.state.data.map((list, index) => {
			return (
				<ListContainer title={list.title} cards={list.cards} key={index} />
				)
		})
		return (
			<div className="board">
				<h1>{this.props.boardTitle}</h1>
				{lists}
			</div>
		)
	}
}

const data = [
	{
		title: 'List 1',
		cards: [
			'Task 1',
			'Task 2',
			'Task 3'
		]
	},
	{
		title: 'List 2',
		cards: [
			'Task 4',
			'Task 5',
			'Task 6'
		]
	},
	{
		title: 'List 3',
		cards: [
			'Task 7',
			'Task 8',
			'Task 9'
		]
	},
]

export default function App() {
	return (
		<Board boardTitle="Board" data={data} />
		)
}