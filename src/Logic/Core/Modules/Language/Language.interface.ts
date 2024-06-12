import { LanguageDomain } from "./Implement/Domain/Language.domain";
import { LanguageService } from "./Implement/Service/Language.service";
import { ReactNode } from "react";
import { AppStatusInterfaces } from "../AppState/AppStatus.interfaces.ts";

export namespace LanguageInterface {
	/**
	 * Список языков
	 */
	export enum ELanguageType {
		RU = "RU",
		EN = "EN",
	}

	/**
	 * Список слов
	 */
	export enum EWord {
		ERROR = "ERROR",
		REMOVE_GROUP = "REMOVE_GROUP",
		GENERAL = "GENERAL",
	}

	/**
	 * Список слов из смежных доменов
	 */
	const EOtherDomainWord = {};

	/**
	 * Список всех слов
	 */
	export const allLanguageWord = {
		...EWord,
		...EOtherDomainWord,
	};

	export type TAllTranslateWord = keyof typeof allLanguageWord;
	export type TAllWord = TAllTranslateWord | string | number | undefined | null;

	/**
	 * Список языков для словаря
	 */
	type TWord = {
		[key in ELanguageType]: string;
	};

	/**
	 * Список слов для словаря
	 */
	export type TLanguage = {
		[key in TAllTranslateWord]: TWord;
	};

	type TOptWord<T> = Partial<Record<TAllTranslateWord, T>>;
	type TOptLang<T> = Partial<Record<ELanguageType, T>>;
	type TOptTheme<T> = Partial<Record<AppStatusInterfaces.ETheme, T>>;

	export type TWordTransferList = TOptWord<TOptLang<TOptTheme<number[]>>>;
	export type TWordModifyList = TOptWord<TOptLang<TOptTheme<Array<[number, number]>>>>;

	export type TAddon = {
		trans?: LanguageInterface.TWordTransferList;
		modify?: LanguageInterface.TWordModifyList;
	};

	export type TAdding = {
		styles?: Record<string, string>;
		content?: ReactNode;
	};

	export type TTextCaseWord = "CAPITAL" | "SMALL" | "NORMAL";

	/**
	 * Основной языковой объект
	 */
	export type TObj = {
		model: ELanguageType;
	};

	/**
	 * Домен и сервис
	 */
	export interface IModules {
		domain: LanguageDomain;
		service: LanguageService;
	}
}
