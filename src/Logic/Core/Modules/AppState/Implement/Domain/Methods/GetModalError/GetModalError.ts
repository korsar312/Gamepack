import { AppStatusInterfaces } from "../../../../AppStatus.interfaces";

export class GetModalError {
	static execute() {
		return function (appObj: AppStatusInterfaces.TObj): AppStatusInterfaces.TErrorData | null {
			return appObj.modalError;
		};
	}
}
