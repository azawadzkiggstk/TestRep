import {
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import { InspectorControls } from './components/ui/InspectorControls';
import { useBlockIndex } from '../../../../assets/javascripts/hooks/useBlockIndex';
import { TabsNav } from './components/TabsNav';
import { useBlockRootClientId } from '../../../../assets/javascripts/hooks/useBlockRootClientId';
import { useInnerBlocksIds } from '../../../../assets/javascripts/hooks/useInnerBlocksIds';
import { useBlockAttributes } from '../../../../assets/javascripts/hooks/useBlockAttributes';
import { useHasInnerBlocks } from '../../../../assets/javascripts/hooks/useHasInnerBlocks';
import { BlockControls } from './components/ui/BlockControls';
import { useSetBlockProps } from '../../../../assets/javascripts/hooks/useSetBlockProps';
import { useTabEffects } from './hooks/useTabEffect';
import clsx from 'clsx';
import './editor.scss';

const TEMPLATE = [
	[
		'core/group',
		{
			style: {
				spacing: {
					padding: {
						top: '20px',
						right: '20px',
						bottom: '20px',
						left: '20px',
					},
				},
			},
		},
		[ [ 'core/paragraph', {} ] ],
	],
];

export default function TabEdit() {
	useTabEffects();

	const rootClientId = useBlockRootClientId();
	const parentInnerBlocksIds = useInnerBlocksIds( rootClientId );
	const {
		attributes: { activeTab },
	} = useBlockAttributes( rootClientId );

	const { attributes } = useBlockAttributes();
	const { blockId } = attributes;

	const hasInnerBlocks = useHasInnerBlocks();
	const blockIndex = useBlockIndex();
	const isTabActive = activeTab === blockIndex;

	const blockProps = useBlockProps( {
		className: clsx( {
			[ `wp-block-${ blockId }` ]: true,
			'wp-block-statik-tab--selected': isTabActive,
		} ),
	} );
	useSetBlockProps( {
		className: `wp-block-${ blockId }`,
	} );
	const innerBlocksProps = useInnerBlocksProps(
		{
			className: 'wp-block-statik-tab__inner-blocks',
		},
		{
			template: TEMPLATE,
			templateInsertUpdatesSelection: false,
			renderAppender: hasInnerBlocks
				? false
				: InnerBlocks.ButtonBlockAppender,
		}
	);

	if ( ! isTabActive ) {
		return <div { ...blockProps } />;
	}

	return (
		<>
			<BlockControls />
			<InspectorControls />
			<div { ...blockProps }>
				<TabsNav
					tabsRootId={ rootClientId }
					tabsIds={ parentInnerBlocksIds }
				/>
				<div { ...innerBlocksProps } />
			</div>
		</>
	);
}
