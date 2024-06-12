import { StylesInterface } from "../../../../Styles.interface";
import { AppStatusInterfaces } from "../../../../../AppState/AppStatus.interfaces.ts";

export class GetColor {
	static execute() {
		/**
		 * Возвращает выбранный цвет
		 * @param colorObj - стилевой объект
		 * @param colors - выбранный цвет
		 */
		return function (
			colorObj: StylesInterface.TObj,
			color: StylesInterface.EColor,
			theme: AppStatusInterfaces.ETheme,
		): StylesInterface.TColorHEXFormat {
			return colorObj.color[color][theme];
		};
	}
}
