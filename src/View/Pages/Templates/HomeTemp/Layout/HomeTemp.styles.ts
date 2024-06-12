import { StylesInterface } from "./../../../../../Logic/Core/Modules/Styles/Styles.interface";
import { CSSProperties } from "react";
import Styles from "../../../../../Styles/Styles.ts";
import { StyleSheet } from "react-native";

class HomeTempStyles extends Styles {
	public styles = StyleSheet.create({
		wrapper: {
			color: this.getColor(StylesInterface.EColor.MAIN_COLOR),
		},
	});
}

export default new HomeTempStyles().styles;
