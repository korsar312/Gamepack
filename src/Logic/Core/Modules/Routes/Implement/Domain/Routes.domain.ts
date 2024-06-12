import { GetNavigateFunc } from "./Methods/GetNavigateFunc/GetNavigateFunc";
import { SetNavigateFunc } from "./Methods/SetNavigateFunc/SetNavigateFunc";
import { RouterGo } from "./Methods/RouterGo/RouterGo";
import { GoBack } from "./Methods/GoBack/GoBack";
import { SetParams } from "./Methods/SetParams/SetParams";
import { GetParams } from "./Methods/GetParams/GetParams";
import { AddHistory } from "./Methods/AddHistory/AddHistory";
import { GetHistory } from "./Methods/GetHistory/GetHistory";
import { GetCurrentPage } from "./Methods/GetCurrentPage/GetCurrentPage";
import { CreateHistoryObj } from "./Methods/CreateHistoryObj/CreateHistoryObj";
import { SetHistory } from "./Methods/SetHistory/SetHistory";
import { IncludePathWithHistory } from "./Methods/IncludePathWithHistory/IncludePathWithHistory";

export class RoutesDomain {
	public routerGo = RouterGo.execute();
	public createHistoryObj = CreateHistoryObj.execute();
	public goBack = GoBack.execute();
	public setNavigateFunc = SetNavigateFunc.execute();
	public getNavigateFunc = GetNavigateFunc.execute();
	public setParams = SetParams.execute();
	public getParams = GetParams.execute();
	public addHistory = AddHistory.execute();
	public setHistory = SetHistory.execute();
	public getHistory = GetHistory.execute();
	public getCurrentPage = GetCurrentPage.execute();
	public includePathWithHistory = IncludePathWithHistory.execute();
}
