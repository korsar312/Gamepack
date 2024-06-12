import { StylesInterface } from "../../../Styles.interface";
import { CSSProperties } from "react";
import { AppStatusInterfaces } from "../../../../AppState/AppStatus.interfaces.ts";

export class GetFont {
	static execute(module: StylesInterface.IModules) {
		return function (font: StylesInterface.EFont, theme: AppStatusInterfaces.ETheme): CSSProperties {
			const store = module.service.store.getStore();

			return module.domain.getFont(store, font, theme);
		};
	}
}
