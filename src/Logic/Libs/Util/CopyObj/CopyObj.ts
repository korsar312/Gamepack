/**
 * Копирование объекта
 */
export class CopyObj {
	static execute() {
		return function <T extends Record<string, any>>(obj: T, ignoreList: (keyof T)[]): Partial<T> {
			const result: Partial<T> = {};

			for (const key in obj) {
				if (obj.hasOwnProperty(key) && !ignoreList.includes(key as keyof T)) {
					result[key] = obj[key];
				}
			}

			return result;
		};
	}
}
