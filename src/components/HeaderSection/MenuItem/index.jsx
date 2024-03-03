import { useGetArrayObjects } from "../../../utils/hooks";
import style from "./menuItem.module.scss";

export function MenuItem() {
const {dataMenu} = useGetArrayObjects()

	return (
		<>
			{dataMenu && dataMenu}
		</>
	)
}
