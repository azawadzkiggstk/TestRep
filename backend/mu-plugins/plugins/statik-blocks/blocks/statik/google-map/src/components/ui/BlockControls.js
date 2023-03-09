import { BlockControls as WPBlockControls } from '@wordpress/block-editor';
import { ReplaceUrlControl } from '../../../../../../assets/javascripts/components/controls/ReplaceUrlControl';
import { useBlockAttributes } from '../../../../../../assets/javascripts/hooks/useBlockAttributes';
import { useSetMapAttributes } from '../../hooks/useSetMapAttributes';
import { getMapUrl } from '../../utils/getMapUrl';

export function BlockControls() {
	const { attributes } = useBlockAttributes();
	const { latitude, longitude, zoom } = attributes;
	const handleChangeValue = useSetMapAttributes();

	return (
		<WPBlockControls group="other">
			<ReplaceUrlControl
				mediaURL={ getMapUrl( latitude, longitude, zoom ) }
				onSelectURL={ handleChangeValue }
			/>
		</WPBlockControls>
	);
}
