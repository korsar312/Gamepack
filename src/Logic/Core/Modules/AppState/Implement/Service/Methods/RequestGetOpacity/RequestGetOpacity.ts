export class RequestGetOpacity {
	static execute() {
		return function (): string {
			return ""; //localStorage.getItem("opacity") || "{}";
		};
	}
}
