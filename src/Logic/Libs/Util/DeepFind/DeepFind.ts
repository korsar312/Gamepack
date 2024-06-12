/**
 * Глубокий поиск по массиву
 */
export class DeepFind {
	static execute() {
		return function recursFind<obj extends Record<string, any>>(
			arr: obj[],
			findFunc: (i: obj) => boolean,
			childParam: keyof obj,
		): obj | undefined {
			for (let i of arr) {
				if (findFunc(i)) return i;

				const findingDeeper = i[childParam] && recursFind(i[childParam], findFunc, childParam);
				if (findingDeeper) return findingDeeper;
			}
		};
	}
}
