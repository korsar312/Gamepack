import { NavigateFunction, Params } from "react-router-native";
import { RoutesDomain } from "./Implement/Domain/Routes.domain";
import { RoutesService } from "./Implement/Service/Routes.service";

export namespace RouteInterfaces {
	export type EPathName = keyof typeof PathName;

	function concatParameters(paramArr: string[]) {
		return `${paramArr.reduce((prev, cur) => `${prev}/:${cur}?`, "")}`;
	}

	const payParameters = ["payMode", "trk", "nozzle", "paymentType", "typePayPage", "isLoyalty", "email", "tel"] as const;
	const calculatePayParameters = concatParameters([...payParameters]);
	export type TPayParameters = Record<(typeof payParameters)[number], string>;

	const refundParameters = ["isBank", "isElectron", "checkId", "statusError"] as const;
	const calculateRefundParameters = concatParameters([...refundParameters]);
	export type TRefundParameters = Record<(typeof refundParameters)[number], string>;

	export const payRoute = {
		REFUELING: `pay/refueling`,
		FUEL_TYPE: `pay/fuelType${calculatePayParameters}`,
		FUEL_VALUE: `pay/fuelValue${calculatePayParameters}`,
		SELL_HELPER: `pay/sellHelper${calculatePayParameters}`,
		SELL_GOODS: `pay/sellGoods${calculatePayParameters}`,
		BASKET: `pay/basket${calculatePayParameters}`,
		CHOICE_TYPE_PAY: `pay/typePay${calculatePayParameters}`,
		LOYALTY_VIRT: `pay/loyaltyVirt${calculatePayParameters}`,
		LOYALTY_VIRT_PLASTIC: `pay/loyaltyVirtPlastic${calculatePayParameters}`,
		LOYALTY_ERROR: `pay/loyaltyError${calculatePayParameters}`,
		CHECK_CHOICE: `pay/checkChoice${calculatePayParameters}`,
		CHECK_INPUT: `pay/checkInput${calculatePayParameters}`,
		PAYMENT: `pay/payment${calculatePayParameters}`,
		PAY_SUCCESS: `pay/paySuccess${calculatePayParameters}`,
		PAY_PRINT_CHECK: `pay/printCheck${calculatePayParameters}`,
		THANK_YOU: `pay/thank${calculatePayParameters}`,
	} as const;

	export const settingRoute = {
		LOGIN: `login`,
		SETTING_HOME: `setting`,
		APP_CONFIG: `setting/app`,
		UPGRADE: `setting/upgrade`,
		SERVICE: `setting/service`,
		SETTING: `setting/setting`,
		REPORTS: `setting/reports`,
		DEVICE: `setting/deviceStatus`,
		TIME_CONFIG: `setting/timeConfig`,
		WORK_SESSION: `setting/workSession`,
		GOODS_CONFIG: `setting/goodsConfig`,
		IMAGE_CONFIG: `setting/imageConfig`,
		TRK_CHOSE_CONFIG: `setting/trkChose`,
		SYSTEM_STATUS: `setting/systemStatus`,
		TRK_CONFIG: `setting/trkChose/:trkNumber`,
		LOCK_MANAGEMENT: `setting/lockManagement`,
		FUNCTION_REPORT: `setting/functionReport`,
		MODULES_VERSIONS: `setting/modulesVersions`,
		AVAILABLE_OPERATIONS: `setting/availableOperations`,
		TRK_TRANSACTION: `setting/trkChose/trans/:trkNumber`,
	} as const;

	export const refundRoute = {
		REFUND_SCAN: `refund/scan${calculateRefundParameters}`,
		REFUND_ERROR: `refund/error${calculateRefundParameters}`,
		REFUND_MANUAL: `refund/manual${calculateRefundParameters}`,
		REFUND_WAITING: `refund/waiting${calculateRefundParameters}`,
		REFUND_SUCCESS: `refund/success${calculateRefundParameters}`,
	} as const;

	/**
	 * Имя пути и путь роута
	 */
	export const PathName = {
		HOME_PAGE: ``,

		...payRoute,
		...settingRoute,
		...refundRoute,

		DEVELOP: `develop`,
		ERROR_PAGE: `*`,
	} as const;

	/**
	 * Основной навигационный объект
	 */
	export type TObj = {
		navigateFunc: NavigateFunction | null;
		params: Params | null;
		history: THistory[] | null;
	};

	export type THistory = {
		pathName: EPathName;
		params: Params;
	};

	/**
	 * Домен и сервис
	 */
	export interface IModules {
		domain: RoutesDomain;
		service: RoutesService;
	}
}
