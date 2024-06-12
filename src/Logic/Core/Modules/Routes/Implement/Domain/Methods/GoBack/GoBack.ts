import { RouteInterfaces } from "../../../../Route.interfaces";
import { Params } from "react-router-native";

export class GoBack {
	static execute() {
		return function (
			history: RouteInterfaces.THistory[],
			toPage?: RouteInterfaces.EPathName,
			params?: Params,
			iterat?: number,
		): RouteInterfaces.THistory[] {
			if (toPage) {
				let iterationFind = iterat || 0;

				const index = history.reverse().findIndex((el) => {
					if (el.pathName === toPage) {
						if (!iterationFind) return true;
						iterationFind--;
					}
				});

				const histories = history.slice(0, index + 1);
				histories?.[histories.length - 1] &&
					(histories[histories.length - 1].params = { ...histories[histories.length - 1].params, ...params });

				return histories;
			}

			const histories = history.slice(0, -1);
			histories?.[0] && (histories[0].params = { ...histories[0].params, ...params });

			return history.slice(0, -1);
		};
	}
}
