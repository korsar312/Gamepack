import { CSSProperties, FC, ReactNode } from "react";
import TextPublic from "./Layout/Text_Public";
import TextModel from "./Text.model";
import { LanguageInterface } from "../../../../Logic/Core/Modules/Language/Language.interface.ts";
import { StylesInterface } from "../../../../Logic/Core/Modules/Styles/Styles.interface.ts";

export interface IComponent {
	text: LanguageInterface.TAllWord;
	caseWord?: LanguageInterface.TTextCaseWord;
	color?: StylesInterface.TColorChoice;
	opacity?: number;
	font: StylesInterface.EFont;
	extStyle?: CSSProperties;
	postfix?: ReactNode;
	dontTranslate?: boolean;
	dontTransfer?: boolean;
	addContent?: LanguageInterface.TAdding[];
	isHidden?: boolean;
}

/**
 * Основной компонент для текста
 */
const Index: FC<IComponent> = (props) => {
	const model = TextModel(props);
	return <TextPublic {...model} />;
};

export default Index;
