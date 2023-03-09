import { useBlockAttributes } from '../../../../../assets/javascripts/hooks/useBlockAttributes';

export const useIsIconBorderRespected = () => {
	const {
		attributes: { className = '' },
	} = useBlockAttributes();

	return className.includes( 'is-style-outline' );
};
