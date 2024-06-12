import { Modules } from "../Modules/Modules";
import { PublicCase } from "./PublicCase/PublicCase";
import Util from "../../Libs/Util";
import { ELogEvent } from "./PublicCase/Methods/LogAction/LogAction.ts";

function interactor<MODULE>(module: MODULE) {
	return function <TARGET extends keyof MODULE, METHOD extends keyof MODULE[TARGET], ARGS extends MODULE[TARGET][METHOD]>(
		target: TARGET,
		method: METHOD,
		...args: ARGS extends (...args: infer P) => unknown ? Parameters<ARGS> : unknown[]
	): ARGS extends (...args: infer P) => any ? ReturnType<ARGS> : ARGS {
		const logProp = {
			comment: `Вызов модуля: ${JSON.stringify(target)}, метода: ${JSON.stringify(method)}`,
		};

		try {
			const chosenMethod = module[target][method];
			const result = Util.polymorph(chosenMethod, module[target], ...args);
			const logName = caseLog(target, method);
			logName &&
				UseCases.public.logAction({
					action: logName,
					data: `Аргументы: ${JSON.stringify(result, undefined, 2)} ||==|| Результат: ${JSON.stringify(args, undefined, 2)}`,
					...logProp,
				});

			return result;
		} catch (e) {
			UseCases.public.logAction({ action: ELogEvent.error, element: JSON.stringify(e), ...logProp });
		}

		throw new Error();
	};
}

const modules = new Modules();

export class Facade {
	public interactor = interactor(modules);
	public public = new PublicCase(this);
}

function caseLog(target: string | number | symbol, method: string | number | symbol): ELogEvent | undefined {
	if (equal("router", "goLink")) return ELogEvent.goLink;
	if (equal("router", "goBack")) return ELogEvent.goLink;
	if (equal("router", "goHomePage")) return ELogEvent.goLink;

	function equal<TARGET extends keyof Modules, METHOD extends keyof Modules[TARGET]>(targetUs: TARGET, methodUs: METHOD) {
		return target === targetUs && method === methodUs;
	}
}

const UseCases = new Facade();
export default UseCases;
