import { AppStatusInterfaces } from "../../../AppStatus.interfaces.ts";

export class GetTheme {
	static execute(module: AppStatusInterfaces.IModules) {
		return function (): AppStatusInterfaces.ETheme {
			const store = module.service.store.getStore();

			return module.domain.getTheme(store);
		};
	}
}
