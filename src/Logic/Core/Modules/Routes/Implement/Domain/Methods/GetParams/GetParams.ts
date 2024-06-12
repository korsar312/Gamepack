import { RouteInterfaces } from "../../../../Route.interfaces";
import { Params } from "react-router-native";

export class GetParams {
	static execute() {
		return function (navigateObj: RouteInterfaces.TObj): Params | null {
			return navigateObj.params;
		};
	}
}
