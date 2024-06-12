import { RouteInterfaces } from "../../../Route.interfaces";

export class IncludePathWithHistory {
	static execute(module: RouteInterfaces.IModules) {
		return function (path: RouteInterfaces.EPathName): boolean {
			const storeNavigate = module.service.store.getStore();
			const history = module.domain.getHistory(storeNavigate);

			return module.domain.includePathWithHistory(history, path);
		};
	}
}
