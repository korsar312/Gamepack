import { RouteInterfaces } from "../../../Route.interfaces";

export class GetCurrentPage {
	static execute(module: RouteInterfaces.IModules) {
		return function (): RouteInterfaces.THistory {
			const storeNavigate = module.service.store.getStore();
			const history = module.domain.getHistory(storeNavigate);

			return module.domain.getCurrentPage(history);
		};
	}
}
