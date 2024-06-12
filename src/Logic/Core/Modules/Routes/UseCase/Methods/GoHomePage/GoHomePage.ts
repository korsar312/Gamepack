import { RouteInterfaces } from "../../../Route.interfaces";

export class GoHomePage {
	static execute(module: RouteInterfaces.IModules, refresh: () => void) {
		return function (): void {
			const storeNavigate = module.service.store.getStore();
			const newHistory = module.domain.setHistory(storeNavigate, []);

			module.service.store.setStore(newHistory);
			refresh();
		};
	}
}
