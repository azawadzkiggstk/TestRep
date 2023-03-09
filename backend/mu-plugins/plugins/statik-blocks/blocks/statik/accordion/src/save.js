import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { filterEntries } from '../../../../assets/javascripts/helpers/filterEntries';
import clsx from 'clsx';

export default function AccordionSave( props ) {
	const { attributes } = props;
	const {
		blockId,
		showToggleIcon,
		headerBackgroundColor,
		headerTextColor,
		contentBackgroundColor,
		contentTextColor,
	} = attributes;

	const blockProps = useBlockProps.save( {
		className: clsx( `wp-block-${ blockId }`, {
			'wp-block-statik-accordion--no-toggle-icons':
				! Boolean( showToggleIcon ),
		} ),
		style: filterEntries(
			{
				'--statik-accordion--headerBackgroundColor':
					headerBackgroundColor,
				'--statik-accordion--headerTextColor': headerTextColor,
				'--statik-accordion--contentBackgroundColor':
					contentBackgroundColor,
				'--statik-accordion--contentTextColor': contentTextColor,
			},
			( [ , v ] ) => v !== ''
		),
	} );

	const innerBlocksProps = useInnerBlocksProps.save( {
		className: 'wp-block-statik-accordion__inner-blocks',
	} );

	return (
		<div { ...blockProps }>
			<div { ...innerBlocksProps } />
		</div>
	);
}
