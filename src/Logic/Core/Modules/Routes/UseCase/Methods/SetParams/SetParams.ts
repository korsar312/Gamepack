import { RouteInterfaces } from "../../../Route.interfaces";
import { Params } from "react-router-dom";

export class SetParams {
	static execute(module: RouteInterfaces.IModules) {
		return function (params: Params): void {
			const storeNavigate = module.service.store.getStore();
			const newStore = module.domain.setParams(storeNavigate, params);

			module.service.store.setStore(newStore);
		};
	}
}
