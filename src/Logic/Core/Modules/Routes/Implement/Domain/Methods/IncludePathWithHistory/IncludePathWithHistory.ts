import { RouteInterfaces } from "../../../../Route.interfaces";

export class IncludePathWithHistory {
	static execute() {
		return function (oldHistory: RouteInterfaces.THistory[], path: RouteInterfaces.EPathName): boolean {
			return Boolean(oldHistory.find((el) => el.pathName === path));
		};
	}
}
