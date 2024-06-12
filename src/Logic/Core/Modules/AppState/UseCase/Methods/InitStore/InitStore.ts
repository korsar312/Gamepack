import { AppStatusInterfaces } from "../../../AppStatus.interfaces";

export class InitStore {
	static execute(module: AppStatusInterfaces.IModules) {
		return function (): void {
			module.service.store.setStore({
				modalError: null,
				theme: AppStatusInterfaces.ETheme.bashneft,
			});
		};
	}
}
