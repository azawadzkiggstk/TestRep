import { useBlockAttributes } from '../../../../../assets/javascripts/hooks/useBlockAttributes';

export const useIsAccentColorRespected = () => {
	const {
		attributes: { className = '' },
	} = useBlockAttributes();

	return (
		className.includes( 'is-style-rectangular' ) ||
		className.includes( 'is-style-circular' ) ||
		className.includes( 'is-style-outline' )
	);
};
