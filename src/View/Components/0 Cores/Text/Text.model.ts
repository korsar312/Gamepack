import { IComponent } from "./index";
import { StylesInterface } from "../../../../Logic/Core/Modules/Styles/Styles.interface.ts";

function TextModel(props: IComponent) {
	const {
		text,
		color = StylesInterface.EColor.WHITE_1,
		caseWord,
		extStyle,
		postfix = "",
		dontTranslate,
		font,
		opacity,
		addContent,
		isHidden,
		dontTransfer,
	} = props;

	const textFind = UseCases.interactor("language", "getText", text, {
		caseWord,
		dontTranslate,
		dontTransfer,
		add: addContent,
	});

	return { textFind, color, extStyle, font, opacity, postfix, isHidden };
}

export default TextModel;
