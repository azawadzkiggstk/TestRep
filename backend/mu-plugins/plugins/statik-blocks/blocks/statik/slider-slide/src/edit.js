import {
	useInnerBlocksProps,
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';
import { BlockControls } from './components/ui/BlockControls';
import { InspectorControls } from './components/ui/InspectorControls';
import { useSliderSlideState } from './hooks/useSliderSlideState';
import { useSetBlockProps } from '../../../../assets/javascripts/hooks/useSetBlockProps';
import { useSliderSlideEffect } from './hooks/useSliderSlideEffect';
import './editor.scss';
import clsx from 'clsx';

export default function SliderSlideEdit() {
	useSliderSlideEffect();

	const { hasInnerBlocks, isSelectedSlide } = useSliderSlideState();

	const blockProps = useBlockProps( {
		className: clsx( {
			'wp-block-statik-slider-slide--selected': isSelectedSlide,
		} ),
	} );

	useSetBlockProps();

	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		templateLock: false,
		renderAppender: hasInnerBlocks
			? undefined
			: InnerBlocks.ButtonBlockAppender,
	} );

	return (
		<>
			<BlockControls />
			<InspectorControls />
			<div { ...innerBlocksProps } />
		</>
	);
}
