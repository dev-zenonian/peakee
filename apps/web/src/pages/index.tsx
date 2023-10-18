import type { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { withAuth } from '../utils/hoc';

const Home: FC = () => {
	return (
		<View>
			<Text style={styles.h1}>Peakee web</Text>
		</View>
	);
};

export default withAuth(Home);

const styles = StyleSheet.create({
	h1: {
		fontSize: 40,
		fontWeight: '500',
	},
});
