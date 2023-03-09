import { BlockControls as WPBlockControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { ToolbarButton } from '@wordpress/components';
import { useCallback } from '@wordpress/element';
import { useBlockAttributes } from '../../../../../../assets/javascripts/hooks/useBlockAttributes';

const label = __( 'Reset Post Type Selection', 'statik-blocks' );

export function BlockControls() {
	const { setAttributes } = useBlockAttributes();

	const resetPostType = useCallback( () => {
		setAttributes( {
			postType: undefined,
		} );
	} );

	return (
		<WPBlockControls>
			<ToolbarButton label={ label } onClick={ resetPostType }>
				<span>{ label }</span>
			</ToolbarButton>
		</WPBlockControls>
	);
}
