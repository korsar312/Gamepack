import { useState } from "react";

export function useDirectory<obj extends Record<string, any>>(arr: obj[], findProp: keyof obj, childParam: keyof obj) {
	const [folderPath, setFolderPath] = useState<string[]>([]);

	const openedFolder = folderPath.reduce((prev, cur) => prev[childParam]?.find((e: obj) => cur === e[findProp]) || prev, {
		[childParam]: arr,
	} as obj);

	const isFirstDir = !folderPath.length;

	function openFolder(code: string) {
		setFolderPath((old) => [...old, code]);
	}

	function backFolder() {
		setFolderPath((old) => [...old.slice(0, -1)]);
	}

	return { openedFolder, folderPath, openFolder, backFolder, isFirstDir };
}
