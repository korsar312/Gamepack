import { RouteInterfaces } from "../../../Route.interfaces";
import { Params } from "react-router-dom";

export class GoBack {
	static execute(module: RouteInterfaces.IModules, refresh: () => void) {
		return function (toPage?: RouteInterfaces.EPathName, params?: Params, iterat?: number): void {
			const storeNavigate = module.service.store.getStore();
			const history = module.domain.getHistory(storeNavigate);
			const back = module.domain.goBack(history, toPage, params, iterat);
			const newHistory = module.domain.setHistory(storeNavigate, back);

			module.service.store.setStore(newHistory);
			refresh();
		};
	}
}
