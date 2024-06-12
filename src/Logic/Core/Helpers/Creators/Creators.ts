import { TModuleFactory, TStoreFactory, TTypeModule } from "./Factory/Factory.enam.ts";
import factory from "./Factory/Factory.ts";

type TStores = {
	[key in keyof TStoreFactory]: TStoreFactory[key];
};

type TModules = {
	[key in keyof TModuleFactory]: TModuleFactory[key];
};

class Creators {
	private stores: TStores = {
		LanguageStore: factory.create("LanguageStore"),
		RouterStore: factory.create("RouterStore"),
		StyleStore: factory.create("StyleStore"),
		AppStatusStore: factory.create("AppStatusStore"),
	};

	private modules: TModules = {
		LanguageModule: factory.create("LanguageModule"),
		RouterModule: factory.create("RouterModule"),
		StyleModule: factory.create("StyleModule"),
		AppStatusModule: factory.create("AppStatusModule"),
	};

	public createStore<T extends keyof TStoreFactory>(store: T): ReturnType<TStoreFactory[T]["factoryMethod"]> {
		return this.stores[store].factoryMethod() as ReturnType<TStoreFactory[T]["factoryMethod"]>;
	}

	public createModule<T extends keyof TModuleFactory, K>(
		module: T,
		imp: TTypeModule[T],
	): ReturnType<TModuleFactory[T]["factoryMethod"]> {
		return this.modules[module].factoryMethod(imp) as ReturnType<TModuleFactory[T]["factoryMethod"]>;
	}
}

export default new Creators();
