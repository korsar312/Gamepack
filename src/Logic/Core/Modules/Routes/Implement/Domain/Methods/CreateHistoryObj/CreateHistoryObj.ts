import { RouteInterfaces } from "../../../../Route.interfaces";
import { Params } from "react-router-native";

export class CreateHistoryObj {
	static execute() {
		return function (pathName: RouteInterfaces.EPathName, params: Params): RouteInterfaces.THistory {
			return { pathName: pathName, params };
		};
	}
}
