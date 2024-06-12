import { GetNavigateFunc } from "./Methods/GetNavigateFunc/GetNavigateFunc";
import { SetNavigateFunc } from "./Methods/SetNavigateFunc/SetNavigateFunc";
import { RouterGo } from "./Methods/RouterGo/RouterGo";
import { InitStore } from "./Methods/InitStore/InitStore";
import { GoBack } from "./Methods/GoBack/GoBack";
import { GoHomePage } from "./Methods/GoHomePage/GoHomePage";
import Modules from "../Implement/Modules";
import { SetParams } from "./Methods/SetParams/SetParams";
import { GetParams } from "./Methods/GetParams/GetParams";
import { GoLink } from "./Methods/GoLink/GoLink";
import { GetCurrentPage } from "./Methods/GetCurrentPage/GetCurrentPage";
import { IncludePathWithHistory } from "./Methods/IncludePathWithHistory/IncludePathWithHistory";

export class RoutesUseCase {
	private module = Modules.invoker();
	private initStore = InitStore.execute(this.module);
	private routerGo = RouterGo.execute(this.module);

	constructor() {
		this.initStore();
	}

	public goBack = GoBack.execute(this.module, this.routerGo);
	public goHomePage = GoHomePage.execute(this.module, this.routerGo);
	public goLink = GoLink.execute(this.module, this.routerGo);
	public getCurrentPage = GetCurrentPage.execute(this.module);
	public setNavigateFunc = SetNavigateFunc.execute(this.module);
	public setParams = SetParams.execute(this.module);
	public getParams = GetParams.execute(this.module);
	public getNavigateFunc = GetNavigateFunc.execute(this.module);
	public includePathWithHistory = IncludePathWithHistory.execute(this.module);
}
