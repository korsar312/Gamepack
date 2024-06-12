/**
 * Возвращает текущее время в формате "25.10.2022 15:38:45"
 */
export class GetStringTime {
	static execute() {
		return function (customDate: string | number = 0) {
			const date = new Date(customDate);

			const DMY = timeNormalize(`${date.getDate()}.${date.getMonth() + 1}`, ".") + `.${date.getFullYear()}`;
			const HMS = timeNormalize(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`, ":");

			return {
				time: HMS,
				date: DMY,
				fullDate: `${DMY} ${HMS}`,
			};
		};
	}
}

function timeNormalize(time: string, separator: string) {
	return time
		.split(separator)
		.map((e) => ("0" + e).slice(-2))
		.join(separator);
}
