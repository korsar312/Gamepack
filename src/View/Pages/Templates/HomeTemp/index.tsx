import { FC } from "react";
import TextPublic from "./Layout/HomeTemp.tsx";
import HomeTempModel from "./HomeTemp.model.ts";

export interface IComponent {}

/**
 * Основной компонент для текста
 */
const Index: FC<IComponent> = (props) => {
	const model = HomeTempModel(props);
	return <TextPublic {...model} />;
};

export default Index;
