import { RouteInterfaces } from "../../../../Route.interfaces";

export class GetCurrentPage {
	static execute() {
		return function (historyList: RouteInterfaces.THistory[]): RouteInterfaces.THistory {
			return (
				historyList.at(-1) || {
					pathName: "HOME_PAGE",
					params: {},
				}
			);
		};
	}
}
