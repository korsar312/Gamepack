import Mixins from "./Mixins/Mixins";
import Variables from "./Variables/Variables";
import UseCases from "../Logic/Core/UseCases/UseCases.ts";
import { StylesInterface } from "../Logic/Core/Modules/Styles/Styles.interface.ts";

export class Styles {
	protected mixins = Mixins;
	protected variables = Variables;

	protected getColor(color?: StylesInterface.TColorChoice, opacity?: number) {
		const theme = UseCases.interactor("appStatus", "getTheme");

		return UseCases.interactor("style", "getColor", theme, color, opacity);
	}

	protected getFont(font: StylesInterface.EFont) {
		const theme = UseCases.interactor("appStatus", "getTheme");

		return UseCases.interactor("style", "getFont", font, theme);
	}
}

export default Styles;
