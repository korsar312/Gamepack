/**
 * Парсер JSON против ошибок
 */
export class ParseObj {
	static execute() {
		return function <K extends string, T extends {} | [] = {}>(json: K, catchReturn?: T): T {
			let path;

			try {
				path = JSON.parse(json) || catchReturn;
			} catch (e) {
				path = catchReturn;
			}

			return path;
		};
	}
}
