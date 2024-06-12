import { LanguageInterface } from "../../../../Language.interface";
import { DictionaryList } from "../../../../../../../Config/ConfigLists/DictionaryList.ts";

export class GetDictionary {
	static execute() {
		/**
		 * Возвращает словарь
		 */
		return function (): LanguageInterface.TLanguage {
			return DictionaryList;
		};
	}
}
