import { useBlockRootClientId } from '../../../../../assets/javascripts/hooks/useBlockRootClientId';
import { useSelect } from '@wordpress/data';
import { useBlockRootAttributes } from '../../../../../assets/javascripts/hooks/useBlockRootAttributes';
import { useHasInnerBlocks } from '../../../../../assets/javascripts/hooks/useHasInnerBlocks';
import { useBlockClientId } from '../../../../../assets/javascripts/hooks/useBlockClientId';

export const useSliderSlideState = () => {
	const clientId = useBlockClientId();
	const rootClientId = useBlockRootClientId();

	const { getBlockIndex } = useSelect( 'core/block-editor' );
	const blockIndex = getBlockIndex( clientId, rootClientId );

	const { attributes: parentAttributes } = useBlockRootAttributes();
	const { selectedSlideIndex } = parentAttributes;

	const hasInnerBlocks = useHasInnerBlocks();

	const isSelectedSlide = selectedSlideIndex === blockIndex;

	return {
		isSelectedSlide,
		hasInnerBlocks,
	};
};
