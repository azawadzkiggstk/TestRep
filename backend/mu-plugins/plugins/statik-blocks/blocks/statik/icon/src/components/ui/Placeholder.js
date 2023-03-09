import { BlockIcon, MediaPlaceholder } from '@wordpress/block-editor';
import { starEmpty } from '@wordpress/icons';
import 'react-virtualized/styles.css';
import { useBlockAttributes } from '../../../../../../assets/javascripts/hooks/useBlockAttributes';
import { __ } from '@wordpress/i18n';
import { IconsCollection } from './IconsCollection';
import { useCallback } from '@wordpress/element';

export const Placeholder = () => {
	const { setAttributes } = useBlockAttributes();

	const setIconUrl = useCallback( ( media ) => {
		setAttributes( {
			id: media.id,
			iconUrl: media.url,
		} );
	} );

	return (
		<MediaPlaceholder
			icon={ <BlockIcon icon={ starEmpty } /> }
			labels={ {
				title: __( 'Icon', 'statik-blocks' ),
				instructions: __(
					'Insert an icon to draw attention of your visitors.',
					'statik-blocks'
				),
			} }
			onSelect={ setIconUrl }
			accept="image/svg+xml"
			allowedTypes={ [ 'image/svg+xml' ] }
			disableMediaButtons={ false }
		>
			<IconsCollection />
		</MediaPlaceholder>
	);
};
