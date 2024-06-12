import { StylesInterface } from "../../../Styles.interface";
import { AppStatusInterfaces } from "../../../../AppState/AppStatus.interfaces.ts";

export class GetColor {
	static execute(module: StylesInterface.IModules) {
		return function (
			theme: AppStatusInterfaces.ETheme,
			color?: StylesInterface.TColorChoice,
			opacity: number = 0.99,
		): StylesInterface.TColorRGBFormat | "none" | "undefined" {
			const store = module.service.store.getStore();

			if (color === undefined || color === "null") return "undefined";
			if (color === false) return "none";

			const hex = module.domain.getColor(store, color, theme);

			return module.domain.hex2rgba(hex, opacity);
		};
	}
}
