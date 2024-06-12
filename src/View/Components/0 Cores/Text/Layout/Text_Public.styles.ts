import { StylesInterface } from "./../../../../../Logic/Core/Modules/Styles/Styles.interface";
import { CSSProperties } from "react";
import Styles from "../../../../../Styles/Styles.ts";

class Text_PublicStyles extends Styles {
	public wrapper: CSSProperties = {
		textAlign: "center",
		transition: this.variables.transition,
		whiteSpace: "pre-line",
	};

	public color(color?: StylesInterface.TColorChoice, opacity?: number): CSSProperties {
		return {
			color: this.getColor(color, opacity),
		};
	}

	public font(font: StylesInterface.EFont): CSSProperties {
		return { ...this.getFont(font) };
	}
}

export default new Text_PublicStyles();
