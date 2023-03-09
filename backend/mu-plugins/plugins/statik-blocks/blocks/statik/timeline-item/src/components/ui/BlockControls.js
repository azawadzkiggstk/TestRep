import {
	BlockAlignmentToolbar,
	BlockControls as WPBlockControls,
} from '@wordpress/block-editor';
import { useBlockAttributes } from '../../../../../../assets/javascripts/hooks/useBlockAttributes';

export function BlockControls() {
	const { attributes, setAttributes } = useBlockAttributes();
	const { labelAlign } = attributes;

	return (
		<WPBlockControls>
			<BlockAlignmentToolbar
				value={ labelAlign }
				onChange={ ( value ) =>
					setAttributes( {
						labelAlign: value,
					} )
				}
				controls={ [ 'left', 'right' ] }
				isCollapsed={ true }
			/>
		</WPBlockControls>
	);
}
