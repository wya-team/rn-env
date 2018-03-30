import React, { Component } from 'react';
import {
	Image,
	ListView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import PullRefresh from '../PullRefresh';

class App extends Component {

	constructor(props) {
		super(props);
		this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		this.state = {
			dataSource: this.insertRowData()
		};
		this.handleRefresh = this.handleRefresh.bind(this);
	}

	handleRefresh() {
		setTimeout(() => {
			this.refs.pull.setDefault();
		}, 5000);
		
	}

	insertRowData() {
		let numRows = 10;
		let rows = Array.apply(0, new Array(numRows)).map((x, i) => `ListView Item ${i}`);
		return this.ds.cloneWithRows(rows);
	}
	render() {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<PullRefresh
					onRefresh={this.handleRefresh}
					ref="pull"
				>
					<ScrollView>
						<View><Text>111</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>333</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>333</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>333</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>22222</Text></View>
						<View><Text>333</Text></View>
					</ScrollView>
				</PullRefresh>
			</SafeAreaView>
		);
	}
}
const styles = StyleSheet.create({
	wrapper: {
		flex: 1
	},
	row: {
		padding: 10,
		height: 125,
		backgroundColor: '#dccdc8',
		borderTopWidth: 1,
		marginBottom: -1,
		borderBottomColor: '#E5EDF5',
		borderTopColor: '#E5EDF5',
		borderBottomWidth: 1,
	},
	text: {
		textAlign: 'center',
		color: 'black'
	},
	circle: {
		width: 30,
		height: 30,
		borderRadius: 100 / 2,
		backgroundColor: 'white',
		opacity: .7
	},
	circle2: {
		width: 45,
		height: 25,
		left: 175,
		borderRadius: 50,
		backgroundColor: 'black',
		transform: [
			{ scaleX: 2 }
		]
	}
});

export default App;
