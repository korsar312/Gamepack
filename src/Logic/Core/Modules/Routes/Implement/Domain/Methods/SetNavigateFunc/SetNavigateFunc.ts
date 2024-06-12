import { RouteInterfaces } from "../../../../Route.interfaces";
import { NavigateFunction } from "react-router-native";

export class SetNavigateFunc {
	static execute() {
		return function (navigateObj: RouteInterfaces.TObj, navigate: NavigateFunction): RouteInterfaces.TObj {
			return { ...navigateObj, navigateFunc: navigate };
		};
	}
}
