import React from "react";
import { SafeAreaView, ScrollView, StatusBar, useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import HomePage from "./src/View/Pages/General/HomePage";

function App(): React.JSX.Element {
	const isDarkMode = useColorScheme() === "dark";

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	return (
		<SafeAreaView style={backgroundStyle}>
			<StatusBar
				barStyle={isDarkMode ? "light-content" : "dark-content"}
				backgroundColor={backgroundStyle.backgroundColor}
			/>
			<ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
				<HomePage />
			</ScrollView>
		</SafeAreaView>
	);
}

export default App;
