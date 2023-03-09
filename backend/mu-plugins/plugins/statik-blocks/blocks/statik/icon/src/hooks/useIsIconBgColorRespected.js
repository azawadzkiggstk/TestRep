import { useBlockAttributes } from '../../../../../assets/javascripts/hooks/useBlockAttributes';

export const useIsIconBgColorRespected = () => {
	const {
		attributes: { className = '' },
	} = useBlockAttributes();

	return (
		className.includes( 'is-style-rectangular' ) ||
		className.includes( 'is-style-circular' )
	);
};
