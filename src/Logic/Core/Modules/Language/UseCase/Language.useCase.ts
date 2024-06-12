import { GetText } from "./Methods/GetText/GetText";
import { InitStore } from "./Methods/InitStore/InitStore";
import { SetCurrentLanguage } from "./Methods/SetCurrentLanguage/SetCurrentLanguage";
import { GetCurrentLanguage } from "./Methods/GetCurrentLanguage/GetCurrentLanguage";
import Modules from "../Implement/Modules";

export class LanguageUseCase {
	private module = Modules.invoker();

	private initStore = InitStore.execute(this.module);

	constructor() {
		this.initStore();
	}

	public getText = GetText.execute(this.module);
	public setCurrentLanguage = SetCurrentLanguage.execute(this.module);
	public getCurrentLanguage = GetCurrentLanguage.execute(this.module);
}
