import { StylesInterface } from "../../../../Styles.interface";
import { ColorList } from "../../../../../../../Config/ConfigLists/ColorList.ts";

export class GetColorList {
	static execute() {
		/**
		 * Возвращает список цветов
		 */
		return function (): StylesInterface.TColor {
			return ColorList;
		};
	}
}
