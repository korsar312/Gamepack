import { StylesInterface } from "../../../../Styles.interface";
import Creators from "../../../../../../Helpers/Creators/Creators";
import { IStore } from "../../../../../../Helpers/Creators/Factory/Variables/FactoryStore.ts";

export class Store {
	private readonly store;

	constructor() {
		this.store = Creators.createStore("StyleStore");
	}

	/**
	 * Возвращает стор
	 */
	public execute(): IStore<StylesInterface.TObj> {
		return this.store;
	}
}
