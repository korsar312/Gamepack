import { RouteInterfaces } from "../../../Route.interfaces";

export class RouterGo {
	static execute(module: RouteInterfaces.IModules) {
		return function (state?: Record<string, any>): void {
			const storeNavigate = module.service.store.getStore();
			const history = module.domain.getHistory(storeNavigate);
			const navigateFunc = module.domain.getNavigateFunc(storeNavigate);
			const { pathName, params } = module.domain.getCurrentPage(history);

			module.domain.routerGo(navigateFunc, pathName, params, state);
		};
	}
}
