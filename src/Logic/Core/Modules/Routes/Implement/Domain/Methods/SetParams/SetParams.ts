import { RouteInterfaces } from "../../../../Route.interfaces";
import { Params } from "react-router-native";

export class SetParams {
	static execute() {
		return function (navigateObj: RouteInterfaces.TObj, params: Params): RouteInterfaces.TObj {
			return { ...navigateObj, params };
		};
	}
}
