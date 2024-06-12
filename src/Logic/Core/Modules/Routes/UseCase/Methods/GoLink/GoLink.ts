import { RouteInterfaces } from "../../../Route.interfaces";
import { Params } from "react-router-dom";

export class GoLink {
	static execute(module: RouteInterfaces.IModules, refresh: () => void) {
		return function (path: RouteInterfaces.EPathName, params?: Params): void {
			const storeNavigate = module.service.store.getStore();
			const paramsOld = module.domain.getParams(storeNavigate);
			const generalParams = { ...paramsOld, ...params };
			const newHistoryObj = module.domain.createHistoryObj(path, generalParams);
			const oldHistory = module.domain.getHistory(storeNavigate);
			const newHistory = module.domain.addHistory(oldHistory, newHistoryObj);
			const newStore = module.domain.setHistory(storeNavigate, newHistory);

			module.service.store.setStore(newStore);
			refresh();
		};
	}
}
