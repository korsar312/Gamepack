import { RouteObject } from "react-router-native";
import { lazy } from "react";
import { RouteInterfaces } from "../../Core/Modules/Routes/Route.interfaces.ts";
import RouteLayout from "../../../View/Layouts/RouteLayout";

const HomePage = lazy(() => import("View/Pages/General/HomePage/index.tsx"));

const { PathName } = RouteInterfaces;

export const MailList: RouteObject[] = [
	{
		path: PathName.HOME_PAGE,
		element: <HomePage />,
	},
];

export const RouteList: RouteObject[] = [
	{
		path: "/*",
		element: <RouteLayout />,
		children: MailList,
	},
];
