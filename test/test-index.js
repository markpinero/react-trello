import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

import List from '../js/components/list';
import Card from '../js/components/card';

const should = chai.should();

const list = {
	title: "List 1",
	cards: [
		'Task 1',
		'Task 2',
		'Task 3'
	]
}

describe('List component', function() {
	it('Renders lists', function() {

		const renderer = TestUtils.createRenderer();
		renderer.render(<List title={list.title} cards={list.cards} />);
		const result = renderer.getRenderOutput();
		result.props.className.should.equal('list');
		const header = result.props.children[0];
		header.type.should.equal('h1');
		header.props.children.should.equal(list.title);
		const card = result.props.children[1][2];
		card.type.should.equal(Card);
		card.props.text.should.equal(list.cards[2]);
		const form = result.props.children[2];
		form.type.should.equal('form');
	}),
	it('Renders cards', function() {

		const renderer = TestUtils.createRenderer();
		renderer.render(<Card text={list.cards[0]} />);
		const result = renderer.getRenderOutput();
		result.props.className.should.equal('card');
		result.props.children.should.equal(list.cards[0]);

	})
})