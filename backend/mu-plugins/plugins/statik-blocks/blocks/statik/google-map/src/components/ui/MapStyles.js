import { useCallback } from '@wordpress/element';
import { ImagePicker } from './ImagePicker';
import { mapStyles } from '../map-styles';

const mapStylesOptions = Object.values( mapStyles );

export const MapStyles = ( props ) => {
	const { value, onChange } = props;

	const changeImagePicker = useCallback( ( styleName, style ) => {
		onChange( styleName, style.json ? JSON.stringify( style.json ) : '' );
	} );

	return (
		<ImagePicker
			value={ value }
			options={ mapStylesOptions }
			onChange={ changeImagePicker }
		/>
	);
};
