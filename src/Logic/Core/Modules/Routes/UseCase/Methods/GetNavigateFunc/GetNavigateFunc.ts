import { RouteInterfaces } from "../../../Route.interfaces";
import { NavigateFunction } from "react-router-dom";

export class GetNavigateFunc {
	static execute(module: RouteInterfaces.IModules) {
		return function (): NavigateFunction | null {
			const storeNavigate = module.service.store.getStore();

			return module.domain.getNavigateFunc(storeNavigate);
		};
	}
}
