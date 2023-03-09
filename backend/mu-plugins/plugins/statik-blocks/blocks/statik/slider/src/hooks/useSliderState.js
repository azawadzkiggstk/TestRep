import { useBlockAttributes } from '../../../../../assets/javascripts/hooks/useBlockAttributes';
import { useInnerBlocksIds } from '../../../../../assets/javascripts/hooks/useInnerBlocksIds';
import { useEffect, useState } from '@wordpress/element';

export const useSliderState = () => {
	const { attributes, setAttributes } = useBlockAttributes();
	const { selectedSlideIndex, showDirectionNav, showControlNav, autoHeight } =
		attributes;

	const innerBlocksIds = useInnerBlocksIds();
	const hasInnerBlocks = innerBlocksIds.length > 0;

	const [ selectedSlideId, setSelectedSlideId ] = useState(
		() => innerBlocksIds[ selectedSlideIndex ]
	);

	/**
	 *  Update `selectedSlideId` if  `selectedSlideIndex` has changed
	 */
	useEffect( () => {
		if ( hasInnerBlocks ) {
			setSelectedSlideId( innerBlocksIds[ selectedSlideIndex ] );
		}
	}, [ selectedSlideIndex ] );

	/**
	 * Update `selectedSlideIndex` if the InnerBlocks order or length has changed
	 * (to point to the same slide which was set previously)
	 */
	useEffect( () => {
		if ( hasInnerBlocks && innerBlocksIds.includes( selectedSlideId ) ) {
			setAttributes( {
				selectedSlideIndex: innerBlocksIds.indexOf( selectedSlideId ),
			} );
		}
	}, [ innerBlocksIds ] );

	return {
		showDirectionNav,
		showControlNav,
		autoHeight,
	};
};
