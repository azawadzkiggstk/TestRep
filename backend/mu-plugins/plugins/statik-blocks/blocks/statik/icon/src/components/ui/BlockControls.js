import {
	BlockAlignmentToolbar,
	BlockControls as WPBlockControls,
} from '@wordpress/block-editor';
import { useBlockAttributes } from '../../../../../../assets/javascripts/hooks/useBlockAttributes';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useCallback } from '@wordpress/element';

export function BlockControls() {
	const { attributes, setAttributes } = useBlockAttributes();
	const { align } = attributes;

	const setAlign = useCallback( ( newAlign ) => {
		setAttributes( {
			align: newAlign,
		} );
	} );

	const resetIcon = useCallback( () => {
		setAttributes( {
			id: undefined,
			icon: undefined,
			iconUrl: undefined,
		} );
	} );

	return (
		<>
			<WPBlockControls>
				<BlockAlignmentToolbar
					value={ align }
					controls={ [ 'left', 'center', 'right' ] }
					onChange={ setAlign }
				/>
			</WPBlockControls>
			<WPBlockControls group="other">
				<ToolbarGroup>
					<ToolbarButton onClick={ resetIcon }>
						{ __( 'Replace icon', 'statik-blocks' ) }
					</ToolbarButton>
				</ToolbarGroup>
			</WPBlockControls>
		</>
	);
}
