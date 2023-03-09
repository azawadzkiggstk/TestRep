import { BlockControls as WPBlockControls } from '@wordpress/block-editor';
import { ToolbarGroup } from '@wordpress/components';
import { InnerBlocksControls } from './InnerBlocksControls';
import { useBlockClientId } from '../../../../../../assets/javascripts/hooks/useBlockClientId';

export function BlockControls() {
	const clientId = useBlockClientId();

	return (
		<WPBlockControls>
			<ToolbarGroup>
				<InnerBlocksControls rootClientId={ clientId } />
			</ToolbarGroup>
		</WPBlockControls>
	);
}
