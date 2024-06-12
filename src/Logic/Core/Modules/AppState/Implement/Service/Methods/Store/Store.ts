import { AppStatusInterfaces } from "../../../../AppStatus.interfaces";
import Creators from "../../../../../../Helpers/Creators/Creators";
import { IStore } from "../../../../../../Helpers/Creators/Factory/Variables/FactoryStore.ts";

export class Store {
	private readonly store;

	constructor() {
		this.store = Creators.createStore("AppStatusStore");
	}

	/**
	 * Возвращает стор
	 */
	public execute(): IStore<AppStatusInterfaces.TObj> {
		return this.store;
	}
}
