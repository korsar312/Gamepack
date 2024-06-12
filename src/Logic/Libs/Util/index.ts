import { GetArray } from "./GetArray/GetArray";
import { GetStringTime } from "./GetStringTime/GetStringTime";
import { Polymorph } from "./Polymorph/Polymorph";
import { DeepFind } from "./DeepFind/DeepFind";
import { ParseObj } from "./ParseObj/ParseObj";
import { ToMoney } from "./ToMoney/ToMoney";
import { Every4Spaces } from "./Every4Spaces/Every4Spaces";
import { ValidData } from "./ValidData/ValidData";
import { CopyObj } from "./CopyObj/CopyObj";

class Index {
	public getArray = GetArray.execute();
	public getStringTime = GetStringTime.execute();
	public polymorph = Polymorph.execute();
	public deepFind = DeepFind.execute();
	public parseObj = ParseObj.execute();
	public toMoney = ToMoney.execute();
	public every4Spaces = Every4Spaces.execute();
	public validData = ValidData.execute();
	public copyObj = CopyObj.execute();
}

export default new Index();
