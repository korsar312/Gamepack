import { StylesInterface } from "../../../../Styles.interface";
import { FontList } from "../../../../../../../Config/ConfigLists/FontList.ts";

export class GetFontList {
	static execute() {
		/**
		 * Возвращает список цветов
		 */
		return function (): StylesInterface.TFont {
			return FontList;
		};
	}
}
