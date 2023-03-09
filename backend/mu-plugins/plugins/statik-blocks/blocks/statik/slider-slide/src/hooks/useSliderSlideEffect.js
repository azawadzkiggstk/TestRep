import { useBlockAttributes } from '../../../../../assets/javascripts/hooks/useBlockAttributes';
import { useEffect } from '@wordpress/element';
import { useBlockRootAttributes } from '../../../../../assets/javascripts/hooks/useBlockRootAttributes';
import { useBlockIndex } from '../../../../../assets/javascripts/hooks/useBlockIndex';
import { useInnerBlocksIds } from '../../../../../assets/javascripts/hooks/useInnerBlocksIds';
import { useBlockRootClientId } from '../../../../../assets/javascripts/hooks/useBlockRootClientId';

export const useSliderSlideEffect = () => {
	const { setAttributes } = useBlockAttributes();
	const sliderClientId = useBlockRootClientId();
	const innerBlocksIds = useInnerBlocksIds( sliderClientId );
	const { attributes: sliderAttributes } = useBlockRootAttributes();
	const { preSelectedSlide } = sliderAttributes;
	const blockIndex = useBlockIndex();

	useEffect( () => {
		setAttributes( {
			isPreSelected: Number( blockIndex ) === Number( preSelectedSlide ),
		} );
	}, [ preSelectedSlide ] );

	useEffect( () => {
		setAttributes( {
			slideIndex: blockIndex,
		} );
	}, [ blockIndex ] );

	useEffect( () => {
		setAttributes( {
			slidesCount: innerBlocksIds.length,
		} );
	}, [ innerBlocksIds.length ] );
};
