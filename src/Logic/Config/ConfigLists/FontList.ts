import { StylesInterface } from "../../Core/Modules/Styles/Styles.interface.ts";

enum Family {
	DrukText = "DrukText",
	Montserrat = "Montserrat",
	DinText = "DinText",
}

enum Weight {
	ExtraBold = 800,
	Bold = 700,
	SemiBold = 600,
	Medium = 500,
	Regular = 400,
}

enum Spacing {
	Hard = "-0.05em",
	Normal = "-0.02em",
	Small = "-0.01em",
	Null = "0",
}

export const FontList: StylesInterface.TFont = {
	Mont_MM_36_36: {
		rosneft: createFont(36, 78, Family.DrukText, Weight.Medium, Spacing.Normal),
		bashneft: createFont(36, 80, Family.DinText, Weight.Bold, Spacing.Normal),
	},
	Mont_MM_28_28: {
		rosneft: createFont(28, 39, Family.Montserrat, Weight.Regular, Spacing.Normal),
		bashneft: createFont(28, 42, Family.DinText, Weight.Regular, Spacing.Normal),
	},
};

function createFont(fontSize: number, lineHeight: number, fontFamily: Family, fontWeight: Weight, letterSpacing: Spacing) {
	return { fontSize: `${fontSize}px`, lineHeight: `${lineHeight}px`, fontFamily, fontWeight, letterSpacing };
}
