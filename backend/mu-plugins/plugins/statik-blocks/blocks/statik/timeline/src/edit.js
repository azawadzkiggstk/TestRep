import {
	useInnerBlocksProps,
	useBlockProps,
	InnerBlocks,
} from '@wordpress/block-editor';
import { useSetBlockProps } from '../../../../assets/javascripts/hooks/useSetBlockProps';
import './editor.scss';

const ALLOWED_BLOCKS = [ 'statik/timeline-item' ];

const TEMPLATE = [ [ 'statik/timeline-item', {} ] ];

export default function TimelineEdit() {
	const blockProps = useBlockProps();
	useSetBlockProps();
	const innerBlockProps = useInnerBlocksProps(
		{
			className: 'wp-block-statik-timeline__inner-blocks',
		},
		{
			allowedBlocks: ALLOWED_BLOCKS,
			template: TEMPLATE,
			renderAppender: InnerBlocks.ButtonBlockAppender,
		}
	);

	return (
		<div { ...blockProps }>
			<div { ...innerBlockProps } />
		</div>
	);
}
