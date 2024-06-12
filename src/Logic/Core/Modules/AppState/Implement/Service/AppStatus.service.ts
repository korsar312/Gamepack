import { Store } from "./Methods/Store/Store";
import { RequestSetOpacity } from "./Methods/RequestSetOpacity/RequestSetOpacity";
import { RequestGetOpacity } from "./Methods/RequestGetOpacity/RequestGetOpacity";

export class AppStatusService {
	public store = new Store().execute();
	public requestGetOpacity = RequestGetOpacity.execute();
	public requestSetOpacity = RequestSetOpacity.execute();
}
