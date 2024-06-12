import { LanguageInterface } from "../../../../Language.interface";
import Creators from "../../../../../../Helpers/Creators/Creators";
import { IStore } from "../../../../../../Helpers/Creators/Factory/Variables/FactoryStore.ts";

export class Store {
	private readonly store;

	constructor() {
		this.store = Creators.createStore("LanguageStore");
	}

	/**
	 * Возвращает стор
	 */
	public execute(): IStore<LanguageInterface.TObj> {
		return this.store;
	}
}
