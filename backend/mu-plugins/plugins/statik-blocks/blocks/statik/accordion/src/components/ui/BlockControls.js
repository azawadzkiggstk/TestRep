import { BlockControls as WPBlockControls } from '@wordpress/block-editor';
import { InnerBlocksControls } from './InnerBlocksControls';
import { useBlockClientId } from '../../../../../../assets/javascripts/hooks/useBlockClientId';

export function BlockControls() {
	const clientId = useBlockClientId();

	return (
		<WPBlockControls>
			<InnerBlocksControls rootClientId={ clientId } />
		</WPBlockControls>
	);
}
