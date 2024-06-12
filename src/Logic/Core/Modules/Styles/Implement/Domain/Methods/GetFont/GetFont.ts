import { StylesInterface } from "../../../../Styles.interface";
import { AppStatusInterfaces } from "../../../../../AppState/AppStatus.interfaces.ts";

export class GetFont {
	static execute() {
		return function (styleObj: StylesInterface.TObj, font: StylesInterface.EFont, theme: AppStatusInterfaces.ETheme): any {
			return styleObj.font[font][theme];
		};
	}
}
