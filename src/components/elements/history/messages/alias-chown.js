// @flow
import React from 'react';
import { Text, Bold } from '../ItemComponents';
import Message from './message';

export default class AliasChown extends Message {
	render() {
		const { event } = this.props;

		return (
			<Text>
				{this.getDisplayName()}
				changed the ownership of alias <Bold>{event.payload.name}</Bold>
				{event.payload.oldTeam ? ` from ${event.payload.oldTeam.name}` : ''} to{' '}
				{event.payload.newTeam.name}
			</Text>
		);
	}
}
