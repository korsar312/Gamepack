import { RouteInterfaces } from "../../../../Route.interfaces";

export class GetHistory {
	static execute() {
		return function (navigateObj: RouteInterfaces.TObj): RouteInterfaces.THistory[] {
			return navigateObj.history || [];
		};
	}
}
