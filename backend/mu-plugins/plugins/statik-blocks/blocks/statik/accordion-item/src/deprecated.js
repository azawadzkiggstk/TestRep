import {
	InnerBlocks,
	RichText,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import { ChevronDown } from './components/icons/ChevronDown';
import clsx from 'clsx';

const v2 = {
	attributes: {
		title: {
			type: 'string',
		},
		defaultExpanded: {
			type: 'boolean',
			default: false,
		},
	},
	migrate( attributes ) {
		return {
			...attributes,
			headerSelector: 'p',
		};
	},
	save( props ) {
		const { attributes } = props;

		const { blockId, defaultExpanded, title } = attributes;

		const isExpanded = defaultExpanded;

		const blockProps = useBlockProps.save( {
			className: clsx( `wp-block-${ blockId }`, {
				'wp-block-statik-accordion-item--expanded': isExpanded,
			} ),
		} );

		const innerBlocksProps = useInnerBlocksProps.save( {
			className: 'wp-block-statik-accordion-item__inner-blocks',
		} );

		const headerId = `wp-block-${ blockId }__header`;
		const bodyId = `wp-block-${ blockId }__body`;

		return (
			<div { ...blockProps }>
				<header
					id={ headerId }
					className="wp-block-statik-accordion-item__header"
					tabIndex={ 0 }
					role="heading"
					aria-expanded={ isExpanded }
					aria-disabled={ false }
					aria-controls={ bodyId }
				>
					<RichText.Content
						tagName="p"
						value={ title }
						className="wp-block-statik-accordion-item__title"
					/>
					<ChevronDown className="wp-block-statik-accordion-item__icon" />
				</header>
				<div
					id={ bodyId }
					className="wp-block-statik-accordion-item__body"
					role="region"
					aria-labelledby={ headerId }
				>
					<div { ...innerBlocksProps } />
				</div>
			</div>
		);
	},
};

const v1 = {
	attributes: {
		title: {
			type: 'string',
		},
		defaultExpanded: {
			type: 'boolean',
			default: false,
		},
	},
	save() {
		return <InnerBlocks.Content />;
	},
};

const deprecated = [ v1, v2 ];

export default deprecated;
