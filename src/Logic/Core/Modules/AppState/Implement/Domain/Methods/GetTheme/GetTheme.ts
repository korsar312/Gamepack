import { AppStatusInterfaces } from "../../../../AppStatus.interfaces.ts";

export class GetTheme {
	static execute() {
		return function (appStore: AppStatusInterfaces.TObj): AppStatusInterfaces.ETheme {
			return appStore.theme;
		};
	}
}
