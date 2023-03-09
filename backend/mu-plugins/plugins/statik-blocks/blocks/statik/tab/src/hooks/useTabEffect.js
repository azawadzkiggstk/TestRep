import { useBlockAttributes } from '../../../../../assets/javascripts/hooks/useBlockAttributes';
import { useEffect } from '@wordpress/element';
import { useBlockRootAttributes } from '../../../../../assets/javascripts/hooks/useBlockRootAttributes';
import { useBlockIndex } from '../../../../../assets/javascripts/hooks/useBlockIndex';

export const useTabEffects = () => {
	const { setAttributes } = useBlockAttributes();
	const { attributes: tabsAttributes } = useBlockRootAttributes();
	const { preSelectedTab } = tabsAttributes;
	const blockIndex = useBlockIndex();

	useEffect( () => {
		setAttributes( {
			isPreSelected: Number( blockIndex ) === Number( preSelectedTab ),
		} );
	}, [ preSelectedTab ] );
};
