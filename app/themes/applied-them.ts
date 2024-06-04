import * as lightTheme from './light-themes';
import * as darkTheme from './dark-themes';
import { store, useReduxSelector } from 'store';
const AppliedTheme = () => {
	const theme=store.getState().Main.theme;

	if(theme==='Dark'){

		return darkTheme.default;
	}
	return lightTheme.default;

};
export default AppliedTheme;
