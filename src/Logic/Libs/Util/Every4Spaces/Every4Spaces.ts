/**
 * Пробел каждый 4й символ
 */
export class Every4Spaces {
	static execute() {
		return function (val: string): string {
			return val.replace(/\s/g, "").replace(/(.{4})/g, "$1 ");
		};
	}
}
