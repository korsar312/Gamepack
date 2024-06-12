import { SetCurrentLanguage } from "./Methods/SetCurrentLanguage/SetCurrentLanguage";
import { GetCurrentLanguage } from "./Methods/GetCurrentLanguage/GetCurrentLanguage";
import { CheckUserLanguage } from "./Methods/CheckUserLanguage/CheckUserLanguage";
import { GetText } from "./Methods/GetText/GetText";

export class LanguageDomain {
	public setCurrentLanguage = SetCurrentLanguage.execute();
	public getCurrentLanguage = GetCurrentLanguage.execute();
	public checkUserLanguage = CheckUserLanguage.execute();
	public getText = GetText.execute();
}
