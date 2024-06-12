import { ToggleErrorModals } from "./Methods/ToggleErrorModals/ToggleErrorModals";
import { GetModalError } from "./Methods/GetModalError/GetModalError";
import { GetTheme } from "./Methods/GetTheme/GetTheme.ts";

export class AppStatusDomain {
	public getTheme = GetTheme.execute();
	public getModalError = GetModalError.execute();
	public toggleErrorModals = ToggleErrorModals.execute();
}
