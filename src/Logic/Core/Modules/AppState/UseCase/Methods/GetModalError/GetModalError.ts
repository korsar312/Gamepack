import { AppStatusInterfaces } from "../../../AppStatus.interfaces";

export class GetModalError {
	static execute(module: AppStatusInterfaces.IModules) {
		return function (): AppStatusInterfaces.TErrorData | null {
			const store = module.service.store.getStore();

			return module.domain.getModalError(store);
		};
	}
}
