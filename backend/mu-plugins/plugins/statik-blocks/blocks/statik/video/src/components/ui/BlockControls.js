import {
	MediaReplaceFlow,
	BlockControls as WPBlockControls,
} from '@wordpress/block-editor';
import { ReplaceUrlControl } from '../../../../../../assets/javascripts/components/controls/ReplaceUrlControl';
import { useBlockAttributes } from '../../../../../../assets/javascripts/hooks/useBlockAttributes';
import { useCallback } from '@wordpress/element';

export function BlockControls() {
	const { attributes, setAttributes } = useBlockAttributes();
	const { hasOverlay, url, overlayImage } = attributes;

	const onSelectUrl = useCallback( ( value ) => {
		setAttributes( { url: value } );
	} );

	const onSelectOverlay = useCallback( ( media ) => {
		if ( media && media.url ) {
			setAttributes( {
				overlayImage: media.url,
			} );
		}
	} );

	return (
		<WPBlockControls group="other">
			<ReplaceUrlControl mediaURL={ url } onSelectURL={ onSelectUrl } />
			{ hasOverlay && (
				<MediaReplaceFlow
					name={ 'Replace Overlay' }
					mediaURL={ overlayImage }
					onSelect={ onSelectOverlay }
					accept="image/*"
					allowedTypes={ [ 'image' ] }
				/>
			) }
		</WPBlockControls>
	);
}
