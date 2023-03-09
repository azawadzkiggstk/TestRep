import { useEffect } from '@wordpress/element';
import { useInnerBlocks } from '../../../../../assets/javascripts/hooks/useInnerBlocks';
import { useBlockAttributes } from '../../../../../assets/javascripts/hooks/useBlockAttributes';

export function useSliderEffect() {
	const { setAttributes } = useBlockAttributes();
	const innerBlocks = useInnerBlocks();

	/**
	 * Update `slides` attribute if the InnerBlocks have changed
	 */
	useEffect( () => {
		const slides = innerBlocks.map( ( block ) => {
			const { blockId } = block.attributes;
			return {
				blockId,
			};
		} );

		setAttributes( {
			slides,
		} );
	}, [ innerBlocks ] );
}
