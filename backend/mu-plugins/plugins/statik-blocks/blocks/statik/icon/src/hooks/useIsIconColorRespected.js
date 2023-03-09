import { useBlockAttributes } from '../../../../../assets/javascripts/hooks/useBlockAttributes';

export const useIsIconColorRespected = () => {
	const {
		attributes: { icon },
	} = useBlockAttributes();

	return Boolean( icon );
};
