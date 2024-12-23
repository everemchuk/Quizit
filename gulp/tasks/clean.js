import { deleteAsync } from "del";
export const clean = () => {
	return deleteAsync(config.path.clean);
}