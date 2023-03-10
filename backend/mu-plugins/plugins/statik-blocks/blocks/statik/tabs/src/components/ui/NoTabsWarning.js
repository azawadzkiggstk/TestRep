import { Warning } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { useDispatch } from '@wordpress/data';
import { useCallback } from '@wordpress/element';
import { useHasInnerBlocks } from '../../../../../../assets/javascripts/hooks/useHasInnerBlocks';
import { useBlockClientId } from '../../../../../../assets/javascripts/hooks/useBlockClientId';

export const NoTabsWarning = () => {
	const clientId = useBlockClientId();
	const { removeBlock } = useDispatch( 'core/block-editor' );
	const hasInnerBlocks = useHasInnerBlocks();

	const removeTabsBlock = useCallback( () => {
		removeBlock( clientId );
	} );

	if ( hasInnerBlocks ) {
		return null;
	}

	return (
		<Warning
			actions={ [
				<Button
					key="remove-block"
					onClick={ removeTabsBlock }
					variant="primary"
				>
					{ __( 'Remove block', 'statik-blocks' ) }
				</Button>,
			] }
		>
			{ __(
				'"Tabs" block requires at least one "Tab" inner block.',
				'statik-blocks'
			) }
		</Warning>
	);
};
