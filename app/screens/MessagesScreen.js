import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
	{
		id: 1,
		title: 'Brytne Ramos',
		description: `Hi Love!!!`,
		image: require('../assets/mosh.jpg')
	},
	{
		id: 2,
		title: 'Ezra Ramos',
		description: 'Dad, Can you buy me a PS4 for Christmas? thats all I want',
		image: require('../assets/mosh.jpg')
	},
	{
		id: 3,
		title: 'Mosh',
		description: 'Nice coding dude',
		image: require('../assets/mosh.jpg')
	}
];

function MessagesScreen(props) {
	const [messages, setMessages] = useState(initialMessages);
	const [refreshing, setRefreshing] = useState(false);

	const handleDelete = message => {
		// Delete the Message from messages
		const newMessages = messages.filter(m => m.id !== message.id);

		setMessages(newMessages);
	};

	return (
		<Screen>
			<FlatList
				data={messages}
				keyExtractor={message => message.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						subTitle={item.description}
						image={item.image}
						onPress={() => console.log('Message Selected', item)}
						renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
					/>
				)}
				ItemSeparatorComponent={ListItemSeparator}
				refreshing={refreshing}
				onRefresh={() => setMessages(initialMessages)}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({});

export default MessagesScreen;
