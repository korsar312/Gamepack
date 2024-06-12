import UseCases from "../UseCases";
import { LogAction } from "./Methods/LogAction/LogAction";

export class PublicCase {
	public logAction;

	constructor(useCases: typeof UseCases) {
		this.logAction = LogAction.execute(useCases);
	}
}
