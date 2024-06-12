import { useNavigate, useParams } from "react-router-native";
import { useEffect } from "react";
import UseCases from "Logic/Core/UseCases/UseCases.ts";

/**
 * Компонент для реализации программного роутинга
 */
export const RouteActivator = () => {
	const navigate = useNavigate();
	const params = useParams();

	const clearParams = { ...params };
	delete clearParams["*"];

	const memoParams = Object.entries(clearParams).join(",");

	useEffect(() => {
		UseCases.interactor("router", "setNavigateFunc", navigate);
	}, []);

	useEffect(() => {
		UseCases.interactor("router", "setParams", clearParams);
	}, [memoParams]);

	return null;
};
