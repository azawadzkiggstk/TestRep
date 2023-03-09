import { Button, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Collection } from 'react-virtualized';
import { useCallback, useEffect, useRef, useState } from '@wordpress/element';
import { useBlockAttributes } from '../../../../../../assets/javascripts/hooks/useBlockAttributes';
import { useDebounce } from '../../../../../../assets/javascripts/hooks/common/useDebounce';
import iconoirIconsList from '../../icons/iconoir';
import { Iconoir } from '../Iconoir';

const icons = iconoirIconsList;

const ICON_SIZE = 24;
const CELL_SIZE = 50;

export const IconsCollection = () => {
	const ref = useRef( null );
	const collectionRef = useRef( null );
	const { setAttributes } = useBlockAttributes();
	const [ iconName, setIconName ] = useState( '' );
	const [ iconsList, setIconsList ] = useState( icons );
	const debouncedIconName = useDebounce( iconName, 500 );

	const [ boxWidth, setBoxWidth ] = useState( 100 );

	useEffect( () => {
		const refInstance = ref.current;
		const collectionRefInstance = collectionRef.current;

		const resizeObserver = new ResizeObserver( function ( entries ) {
			const rect = entries[ 0 ].contentRect;
			setBoxWidth( rect.width );
			collectionRefInstance.recomputeCellSizesAndPositions();
		} );

		resizeObserver.observe( refInstance );

		return () => {
			resizeObserver.unobserve( refInstance );
		};
	}, [] );

	useEffect( () => {
		if ( debouncedIconName ) {
			setIconsList(
				icons.filter( ( icon ) =>
					icon.toLowerCase().includes( debouncedIconName )
				)
			);
		} else {
			setIconsList( icons );
		}
	}, [ debouncedIconName ] );

	const getCellSizeAndPosition = useCallback( ( { index } ) => {
		const itemsPerRow = Math.max( Math.floor( boxWidth / CELL_SIZE ), 1 );
		const col = index % itemsPerRow;
		const row = Math.floor( index / itemsPerRow );
		return {
			height: CELL_SIZE,
			width: CELL_SIZE,
			x: col * CELL_SIZE,
			y: row * CELL_SIZE,
		};
	} );

	const getCellRender = useCallback( ( { index, key, style } ) => {
		return (
			<div
				key={ key }
				style={ {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					...style,
				} }
			>
				<Button
					icon={ <Iconoir icon={ iconsList[ index ] } /> }
					size={ ICON_SIZE }
					onClick={ () => {
						setAttributes( {
							icon: iconsList[ index ],
						} );
					} }
				/>
			</div>
		);
	} );

	return (
		<div style={ { width: '100%' } } ref={ ref }>
			<TextControl
				value={ iconName }
				onChange={ ( value ) => setIconName( value ) }
				placeholder={ __( 'Filter icons…', 'statik-blocks' ) }
			/>
			<Collection
				ref={ collectionRef }
				cellCount={ iconsList.length }
				cellRenderer={ getCellRender }
				cellSizeAndPositionGetter={ getCellSizeAndPosition }
				height={ 140 }
				width={ boxWidth }
			/>
		</div>
	);
};
