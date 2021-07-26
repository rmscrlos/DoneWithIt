import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppText from './AppText';
import colors from '../config/colors';

function ListItem({ title, subTitle, image, IconComponent, onPress, renderRightActions }) {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight onPress={onPress} underlayColor={colors.light}>
				<View style={styles.container}>
					{IconComponent}
					{image && <Image style={styles.image} source={image} />}
					<View style={styles.detailsContainer}>
						{title && (
							<AppText style={styles.title} numberOfLines={1}>
								{title}
							</AppText>
						)}
						{subTitle && (
							<AppText style={styles.subTitle} numberOfLines={2}>
								{subTitle}
							</AppText>
						)}
					</View>
					<MaterialCommunityIcons color={colors.medium} name="chevron-right" size={25} />
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 15,
		backgroundColor: colors.white
	},
	detailsContainer: {
		marginLeft: 10,
		justifyContent: 'center',
		flex: 1
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35
	},
	subTitle: {
		color: colors.medium
	},
	title: {
		fontWeight: '500'
	}
});

export default ListItem;
