import styles from "./HomeTemp.styles.ts";
import { observer } from "mobx-react";
import HomeTempModel from "../HomeTemp.model.ts";
import { NFC } from "Logic/Libs/Util/TypesUtils.ts";
import React from "react";
import { Text } from "react-native";

const HomeTemp: NFC<typeof HomeTempModel> = (props) => {
	const {} = props;

	return <Text style={styles.wrapper}>234567118</Text>;
};

export default observer(HomeTemp);
