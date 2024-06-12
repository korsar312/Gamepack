import UseCases from "../../../UseCases";
import { RouteInterfaces } from "../../../../Modules/Routes/Route.interfaces.ts";

export type TLogParam = {
	page?: RouteInterfaces.EPathName;
	action?: ELogEvent;
	element?: string;
	data?: string;
	comment?: string;
};

export enum ELogEvent {
	startFront = "startFront",
	finishInit = "finishInit",
	error = "error",
	click = "click",
	goLink = "goLink",
	getScan = "getScan",
	setScan = "setScan",
}

export class LogAction {
	static execute(moduleChoicer: typeof UseCases) {
		return function (data: TLogParam) {
			const currentPage = moduleChoicer.interactor("router", "getCurrentPage");

			const newData: TLogParam = {
				page: currentPage.pathName,
				...data,
			};

			return console.log("LOG_ACTION", newData);
		};
	}
}
