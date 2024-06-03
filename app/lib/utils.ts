import { Dimensions, PixelRatio, Platform } from 'react-native';

import {
	widthPercentageToDP as wd,
	heightPercentageToDP as hd,
} from 'react-native-responsive-screen';




const getWidth = (width: number): number => wd(width);

const getHeight = (height: number): number => hd(height);

const isIos = (): boolean => Platform.OS === 'ios';

const ratio = PixelRatio.get();

const getFontSize = (size: number): number => {
	const { width, height } = Dimensions.get('window');

	if (ratio >= 2 && ratio < 3) {
		if (width < 360) {
			return size * 0.95;
		} else if (height < 667) {
			return size;
		} else if (height >= 667 && height <= 735) {
			return size * 1.15;
		}

		return size * 1.25;
	} else if (ratio >= 3 && ratio < 3.5) {
		if (width < 360) {
			return size;
		} else if (height < 667) {
			return size * 1.15;
		} else if (height >= 667 && height <= 735) {
			return size * 1.2;
		}

		return size * 1.27;
	} else if (ratio >= 3.5) {
		if (width < 360) {
			return size;
		} else if (height < 667) {
			return size * 1.2;
		} else if (height >= 667 && height <= 735) {
			return size * 1.25;
		}

		return size * 1.4;
	}

	return size;
};

export {
	getWidth,
	getHeight,
	isIos,
	getFontSize,

	 
};
