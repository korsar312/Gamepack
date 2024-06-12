import styles from "./Text_Public.styles";
import { observer } from "mobx-react";
import TextModel from "../Text.model";
import { NFC } from "../../../../../Logic/Libs/Util/TypesUtils.ts";

const Text: NFC<typeof TextModel> = (props) => {
	const { textFind, color, extStyle, font, opacity, postfix, isHidden } = props;

	const style = {
		...styles.wrapper,
		...styles.font(font),
		...styles.color(color, isHidden ? 0 : opacity),
		...extStyle,
	};

	return (
		<span style={style}>
			{textFind}
			{postfix}
		</span>
	);
};

export default observer(Text);
