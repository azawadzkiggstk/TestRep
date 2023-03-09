import {
	Placeholder as WPPlaceholder,
	SelectControl,
} from '@wordpress/components';
import { BlockIcon } from '@wordpress/block-editor';
import { video } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import { usePostTypes } from '../../../../../../assets/javascripts/hooks/usePostTypes';
import { usePostTypesOptions } from '../../../../../../assets/javascripts/hooks/usePostTypesOptions';
import { useCallback } from '@wordpress/element';
import { useBlockAttributes } from '../../../../../../assets/javascripts/hooks/useBlockAttributes';

export function Placeholder() {
	const { attributes, setAttributes } = useBlockAttributes();

	const { postType } = attributes;

	const postTypes = usePostTypes();
	const options = usePostTypesOptions( postTypes );

	const finalOptions = [
		{ label: __( 'None', 'statik-blocks' ), value: 'none' },
		...options,
	];
	const finalValue = postType ?? 'none';

	const handleSelectPostType = useCallback( ( value ) => {
		setAttributes( {
			postType: value,
		} );
	} );

	return (
		<WPPlaceholder
			icon={ <BlockIcon icon={ video } /> }
			label={ __( 'Post Type Cards', 'statik-blocks' ) }
			instructions={ __(
				'Present WordPress entities as a cards',
				'statik-blocks'
			) }
			isColumnLayout={ false }
		>
			<SelectControl
				label={ __( 'Post Type' ) }
				value={ finalValue }
				options={ finalOptions }
				help={ __( 'Select Post Type to display', 'statik-blocks' ) }
				onChange={ handleSelectPostType }
			/>
		</WPPlaceholder>
	);
}
