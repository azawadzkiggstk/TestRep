import { useBlockAttributes } from '../../../../../assets/javascripts/hooks/useBlockAttributes';
import { useDispatch } from '@wordpress/data';
import clsx from 'clsx';
import { useCallback } from '@wordpress/element';

export const ControlNavButton = ( props ) => {
	const { index, blockId } = props;

	const { attributes, setAttributes } = useBlockAttributes();
	const { selectBlock } = useDispatch( 'core/block-editor' );
	const { selectedSlideIndex } = attributes;

	const selectSlide = useCallback( () => {
		setAttributes( { selectedSlideIndex: index } );
		selectBlock( blockId );
	} );

	const className = clsx( {
		'wp-block-statik-slider__control-nav-button': true,
		'wp-block-statik-slider__control-nav-button--selected':
			selectedSlideIndex === index,
	} );

	return <button className={ className } onClick={ selectSlide } />;
};
