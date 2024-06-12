import {RouteInterfaces} from "../../../../Route.interfaces";

export class AddHistory {
	static execute() {
		return function (
			oldHistory: RouteInterfaces.THistory[],
			addingHistory: RouteInterfaces.THistory,
		): RouteInterfaces.THistory[] {
			return [...oldHistory, addingHistory];
		};
	}
}
