import { RouteInterfaces } from "../../../../Route.interfaces";

export class SetHistory {
	static execute() {
		return function (navigateObj: RouteInterfaces.TObj, newHistory: RouteInterfaces.THistory[]): RouteInterfaces.TObj {
			return { ...navigateObj, history: newHistory };
		};
	}
}
