import { AppStatusDomain } from "./Implement/Domain/AppStatus.domain";
import { AppStatusService } from "./Implement/Service/AppStatus.service";
import { LanguageInterface } from "../Language/Language.interface";

export namespace AppStatusInterfaces {
	export type TObj = {
		theme: ETheme;
		modalError: TErrorData | null;
	};

	export type TErrorData = {
		name: EErrorModalList;
		data?: unknown;
	};

	export enum EErrorModalList {
		commonError = "commonError",
	}

	export enum ETheme {
		rosneft = "rosneft",
		bashneft = "bashneft",
	}

	export interface IModules {
		domain: AppStatusDomain;
		service: AppStatusService;
	}
}
