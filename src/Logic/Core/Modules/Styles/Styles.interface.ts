import { StylesDomain } from "./Implement/Domain/Styles.domain";
import { StylesService } from "./Implement/Service/Styles.service";
import { AppStatusInterfaces } from "../AppState/AppStatus.interfaces";
import { CSSProperties } from "react";

export namespace StylesInterface {
	export type TColorRGBFormat = `rgba(${string},${number})`;
	export type TColorHEXFormat = `#${string}`;

	export enum EColor {
		WHITE_1 = "WHITE_1",
		WHITE_2 = "WHITE_2",
		WHITE_3 = "WHITE_3",
		WHITE_4 = "WHITE_4",
		WHITE_5 = "WHITE_5",
		WHITE_6 = "WHITE_6",
		WHITE_7 = "WHITE_7",
		WHITE_8 = "WHITE_8",
		WHITE_9 = "WHITE_9",
		WHITE_10 = "WHITE_10",
		WHITE_11 = "WHITE_11",
		WHITE_12 = "WHITE_12",
		WHITE_13 = "WHITE_13",
		WHITE_14 = "WHITE_14",

		BLACK_1 = "BLACK_1",
		BLACK_2 = "BLACK_2",
		BLACK_3 = "BLACK_3",
		BLACK_4 = "BLACK_4",
		BLACK_5 = "BLACK_5",
		BLACK_6 = "BLACK_6",
		BLACK_7 = "BLACK_7",
		BLACK_8 = "BLACK_8",

		RED_1 = "RED_1",
		RED_2 = "RED_2",
		RED_3 = "RED_3",

		YELLOW_1 = "YELLOW_1",
		YELLOW_2 = "YELLOW_2",
		YELLOW_3 = "YELLOW_3",
		YELLOW_4 = "YELLOW_4",
		YELLOW_5 = "YELLOW_5",
		YELLOW_6 = "YELLOW_6",

		GREEN_1 = "GREEN_1",
		GREEN_2 = "GREEN_2",
		GREEN_3 = "GREEN_3",
		GREEN_4 = "GREEN_4",
		GREEN_5 = "GREEN_5",
		GREEN_6 = "GREEN_6",
		GREEN_7 = "GREEN_7",

		BLUE_1 = "BLUE_1",
		BLUE_2 = "BLUE_2",

		MAIN_COLOR = "MAIN_COLOR",
		INVERT_MAIN_COLOR = "INVERT_MAIN_COLOR",
		RE_INVERT_MAIN_COLOR = "RE_INVERT_MAIN_COLOR",
		RE_INVERT_MAIN_COLOR_2 = "RE_INVERT_MAIN_COLOR_2",
		TRK_COLOR = "TRK_COLOR",
		TRK_NUM_COLOR = "TRK_NUM_COLOR",
		MAIN_TEXT_COLOR = "MAIN_TEXT_COLOR",
		SUB_MAIN_TEXT_COLOR = "SUB_MAIN_TEXT_COLOR",
	}

	export type TColor = Record<EColor, Record<AppStatusInterfaces.ETheme, TColorHEXFormat>>;

	export enum EFont {
		Mont_MM_36_36 = "Mont_MM_36_36",
		Mont_MM_28_28 = "Mont_MM_28_28",
	}

	export type TFont = Record<keyof typeof EFont, Record<AppStatusInterfaces.ETheme, CSSProperties>>;

	/**
	 * Выбор цвета
	 */
	export type TColorChoice = EColor | undefined | "null" | false;

	/**
	 * Основной стилевой объект
	 */
	export type TObj = {
		color: TColor;
		font: TFont;
	};

	/**
	 * Домен и сервис
	 */
	export interface IModules {
		domain: StylesDomain;
		service: StylesService;
	}
}
