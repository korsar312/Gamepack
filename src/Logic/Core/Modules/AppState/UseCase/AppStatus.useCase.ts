import Modules from "../Implement/Modules";
import { InitStore } from "./Methods/InitStore/InitStore";
import { GetModalError } from "./Methods/GetModalError/GetModalError";
import { ToggleErrorModals } from "./Methods/ToggleErrorModals/ToggleErrorModals";
import { GetTheme } from "./Methods/GetTheme/GetTheme.ts";

export class AppStatusUseCase {
	private module = Modules.invoker();
	private initStore = InitStore.execute(this.module);

	constructor() {
		this.initStore();
	}

	public getTheme = GetTheme.execute(this.module);
	public getModalError = GetModalError.execute(this.module);
	public toggleErrorModals = ToggleErrorModals.execute(this.module);
}
