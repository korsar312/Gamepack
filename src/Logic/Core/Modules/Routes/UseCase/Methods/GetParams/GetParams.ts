import { RouteInterfaces } from "../../../Route.interfaces";
import { Params } from "react-router-dom";

export class GetParams {
	static execute(module: RouteInterfaces.IModules) {
		return function (): Params | null {
			const storeNavigate = module.service.store.getStore();

			return module.domain.getParams(storeNavigate);
		};
	}
}
