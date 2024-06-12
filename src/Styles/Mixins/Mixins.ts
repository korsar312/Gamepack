import { CSSProperties } from "react";

class MixinsVars {
	public flexCenter: CSSProperties = {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	};

	public absolute: CSSProperties = {
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	};

	public lineBreak(line: number): CSSProperties {
		return {
			display: "-webkit-box",
			WebkitLineClamp: line,
			WebkitBoxOrient: "vertical",
			overflow: "hidden",
		};
	}
}

const Mixins = new MixinsVars();
export default Mixins;
